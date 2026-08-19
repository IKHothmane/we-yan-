import{a as o,j as e}from"./index-BQwcu4Av.js";const H=`/**
 * Google Apps Script — coller TOUT ce fichier, puis :
 * 1) Enregistrer
 * 2) Choisir installer → Exécuter (autorise l’accès)
 * 3) Déployer → Gérer les déploiements → crayon → Nouvelle version → Déployer
 *
 * Colonne G = liste : Valider | En cours | Terminer | Annuler
 */

var HEADERS = ['Date', 'Nom', 'Email', 'Téléphone', 'Service', 'Message', 'Statut']
var STATUT_LIST = ['Valider', 'En cours', 'Terminer', 'Annuler']

function jsonOutput(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
}

function sheetStatut(statut) {
  var s = String(statut || '').trim()
  if (s === 'Validée' || s === 'Validé' || s === 'Valider') return 'Valider'
  if (s === 'En cours') return 'En cours'
  if (s === 'Terminée' || s === 'Terminé' || s === 'Terminer') return 'Terminer'
  if (s === 'Annulée' || s === 'Annulé' || s === 'Annuler') return 'Annuler'
  return ''
}

function colorForStatus(statut) {
  var s = sheetStatut(statut)
  if (s === 'Valider') return '#C6EFCE'
  if (s === 'En cours') return '#FFC7CE'
  if (s === 'Terminer') return '#BDD7EE'
  if (s === 'Annuler') return '#E5E7EB'
  return '#FFFFFF'
}

function applyRowColor(sheet, row, statut) {
  sheet.getRange(row, 1, 1, HEADERS.length).setBackground(colorForStatus(statut))
}

function ensureHeaders(sheet) {
  var range = sheet.getRange(1, 1, 1, HEADERS.length)
  range.setValues([HEADERS])
  range.setFontWeight('bold')
  range.setBackground('#1F2937')
  range.setFontColor('#FFFFFF')
}

function ensureStatutList(sheet) {
  var last = Math.max(sheet.getMaxRows(), 200)
  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(STATUT_LIST, true)
    .setAllowInvalid(true)
    .setHelpText('Valider, En cours, Terminer ou Annuler')
    .build()
  sheet.getRange(2, 7, last - 1, 1).setDataValidation(rule)
}

function installer() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  ensureHeaders(sheet)
  ensureStatutList(sheet)
}

function onEdit(e) {
  if (!e || !e.range) return
  if (e.range.getColumn() !== 7 || e.range.getRow() < 2) return
  applyRowColor(e.range.getSheet(), e.range.getRow(), e.range.getValue())
}

function findRowIndex(sheet, data) {
  var values = sheet.getDataRange().getValues()
  var row = Number(data.row)
  var email = String(data.email || '')
  var message = String(data.message || '')

  if (row >= 2 && row <= values.length) {
    if (!email || String(values[row - 1][2]) === email) return row
  }

  var fallback = 0
  for (var i = values.length - 1; i >= 1; i--) {
    if (email && String(values[i][2]) !== email) continue
    if (message && String(values[i][5]) !== message) continue
    if (String(values[i][1] || '')) return i + 1
    if (!fallback) fallback = i + 1
  }
  return fallback
}

function updateStatus(sheet, data) {
  var row = findRowIndex(sheet, data)
  var statut = sheetStatut(data.statut)
  if (!row || row < 2) throw new Error('Ligne introuvable')
  if (!statut) throw new Error('Statut manquant')
  sheet.getRange(row, 7).setValue(statut)
  applyRowColor(sheet, row, statut)
  return row
}

function parseBody(e) {
  if (e && e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents)
    } catch (err) {
      return {}
    }
  }
  return {}
}

function paramsFromGet(e) {
  var p = (e && e.parameter) ? e.parameter : {}
  return {
    action: p.action || '',
    row: p.row || '',
    statut: p.statut || '',
    email: p.email || '',
    message: p.message || '',
  }
}

function isUpdatePayload(data) {
  return data.action === 'update' || (
    data.statut && !data.nom && !data.telephone && !data.service
  )
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    ensureHeaders(sheet)
    ensureStatutList(sheet)
    var data = parseBody(e)

    if (isUpdatePayload(data)) {
      var updatedRow = updateStatus(sheet, data)
      return jsonOutput({ success: true, ok: true, updated: true, row: updatedRow })
    }

    if (!(data.nom || data.email)) {
      return jsonOutput({ success: false, ok: false, error: 'Pas de nouvelle ligne : nom/email manquant' })
    }

    var statutNew = sheetStatut(data.statut)
    sheet.appendRow([
      new Date(),
      data.nom || '',
      data.email || '',
      data.telephone || '',
      data.service || '',
      data.message || '',
      statutNew,
    ])
    applyRowColor(sheet, sheet.getLastRow(), statutNew)
    return jsonOutput({ success: true, ok: true, created: true })
  } catch (error) {
    return jsonOutput({ success: false, ok: false, error: String(error) })
  }
}

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    ensureHeaders(sheet)
    ensureStatutList(sheet)
    var data = paramsFromGet(e)

    if (data.action === 'update') {
      var updatedRow = updateStatus(sheet, data)
      return jsonOutput({ success: true, ok: true, updated: true, row: updatedRow })
    }

    var values = sheet.getDataRange().getValues()
    var rows = values.slice(1).map(function (row, index) {
      return {
        row: index + 2,
        date: row[0],
        nom: row[1],
        email: row[2],
        telephone: row[3],
        service: row[4],
        message: row[5],
        statut: row[6] || '',
      }
    }).reverse()

    return jsonOutput({ ok: true, version: 4, rows: rows })
  } catch (error) {
    return jsonOutput({ ok: false, success: false, error: String(error) })
  }
}
`,A="weyan-demandes-key",F="weyan-demandes-statuts",T=[{id:"Nouvelle",title:"À valider",hint:"Nouvelles demandes",tone:"bg-white border-slate-200"},{id:"Validée",title:"Validées",hint:"Prêtes à démarrer",tone:"bg-emerald-50 border-emerald-200"},{id:"En cours",title:"En cours",hint:"Travail en cours",tone:"bg-red-50 border-red-200"},{id:"Terminée",title:"Terminées",hint:"Dossiers clos",tone:"bg-sky-50 border-sky-200"},{id:"Annulée",title:"Annulées",hint:"Demandes refusées",tone:"bg-slate-100 border-slate-200"}];function f(n){return n==="Valider"||n==="Validée"||n==="Validé"?"Validée":n==="En cours"?"En cours":n==="Terminer"||n==="Terminée"||n==="Terminé"?"Terminée":n==="Annuler"||n==="Annulée"||n==="Annulé"?"Annulée":"Nouvelle"}function R(n){if(!n)return"—";const l=new Date(n);return Number.isNaN(l.getTime())?String(n):new Intl.DateTimeFormat("fr-MA",{dateStyle:"short",timeStyle:"short"}).format(l)}function D(n){return n==="Validée"?"bg-emerald-50":n==="En cours"?"bg-red-50":n==="Terminée"?"bg-sky-50":n==="Annulée"?"bg-slate-100 text-slate-500":"bg-white"}function O(n){return`${n.email||""}|${n.message||""}|${n.date||""}`}function $(){try{const n=JSON.parse(localStorage.getItem(F)||"{}"),l={};for(const[i,c]of Object.entries(n))l[i]=f(c);return l}catch{return{}}}function P(n,l){const i=$();i[O(n)]=l,localStorage.setItem(F,JSON.stringify(i))}function B(n,l){const i=$();return n.map(c=>{const u=f(c.statut);return l&&u!=="Nouvelle"?{...c,statut:u}:{...c,statut:i[O(c)]||u}})}function V(n){return n==="Validée"?"bg-emerald-600 text-white":n==="En cours"?"bg-red-600 text-white":n==="Terminée"?"bg-sky-600 text-white":n==="Annulée"?"bg-slate-500 text-white":"bg-slate-800 text-white"}function C({statut:n,busy:l,onUpdate:i}){return e.jsxs("div",{className:"flex flex-wrap gap-2",children:[n==="Nouvelle"&&e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",disabled:l,onClick:()=>i("Validée"),className:"rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:brightness-110 disabled:opacity-50",children:"Valider"}),e.jsx("button",{type:"button",disabled:l,onClick:()=>i("Annulée"),className:"rounded-full bg-slate-500 px-4 py-2 text-xs font-bold text-white hover:brightness-110 disabled:opacity-50",children:"Annuler"})]}),n==="Validée"&&e.jsx("button",{type:"button",disabled:l,onClick:()=>i("En cours"),className:"rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white hover:brightness-110 disabled:opacity-50",children:"En cours"}),n==="En cours"&&e.jsx("button",{type:"button",disabled:l,onClick:()=>i("Terminée"),className:"rounded-full bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:brightness-110 disabled:opacity-50",children:"Terminer"}),(n==="Terminée"||n==="Annulée")&&e.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"—"})]})}function _(){const[n,l]=o.useState(""),[i,c]=o.useState(!1),[u,v]=o.useState([]),[S,w]=o.useState(!1),[m,N]=o.useState(null),[p,h]=o.useState(""),[I,g]=o.useState(!0),[G,E]=o.useState(!1);o.useEffect(()=>{document.title="Demandes | We Yan Digital";const s=document.head.querySelector('meta[name="robots"]');s&&s.setAttribute("content","noindex, nofollow")},[]);const b=async s=>{w(!0),h("");try{const r=await fetch(`/api/demandes?key=${encodeURIComponent(s)}`,{headers:{Accept:"application/json"}}),t=await r.json().catch(()=>({}));if(!r.ok||!t.ok)throw new Error(t.error||"Impossible de charger les demandes.");v(B(t.rows||[],t.scriptReady!==!1)),g(t.scriptReady!==!1),c(!0),sessionStorage.setItem(A,s)}catch(r){c(!1),h(r instanceof Error?r.message:"Accès refusé.")}finally{w(!1)}};o.useEffect(()=>{const s=sessionStorage.getItem(A);s&&(l(s),b(s))},[]);const k=async(s,r)=>{const t=Number(s.row)||0;N(t||s.email||s.message||"row"),h(""),P(s,r),v(d=>d.map(a=>t&&a.row===t||a.email===s.email&&a.message===s.message?{...a,statut:r}:a));try{const a=await(await fetch(`/api/demandes?key=${encodeURIComponent(n)}`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({row:t,email:s.email||"",message:s.message||"",statut:r})})).json().catch(()=>({}));(a.scriptReady===!1||a.sheetUpdated===!1)&&g(!1),a.ok===!1&&h(a.error||"Google Sheets n’a pas été modifié.")}catch(d){g(!1),h(d instanceof Error?d.message:"Google Sheets n’a pas été modifié.")}finally{N(null)}},L=s=>{s.preventDefault(),b(n.trim())},M=async()=>{await navigator.clipboard.writeText(H),E(!0),window.setTimeout(()=>E(!1),2500)},U=o.useMemo(()=>{var r;const s=new Map;for(const t of T)s.set(t.id,[]);for(const t of u){const d=f(t.statut);(r=s.get(d))==null||r.push(t)}return s},[u]),q=o.useMemo(()=>{const s=u.length;return s<=1?`${s} demande`:`${s} demandes`},[u.length]);return e.jsx("div",{className:"min-h-screen bg-slate-50 text-slate-900 px-4 py-10",children:e.jsxs("div",{className:"mx-auto w-full max-w-6xl",children:[e.jsxs("header",{className:"mb-8",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2",children:"Espace interne"}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black tracking-tight",children:"Demandes clients"}),e.jsx("p",{className:"mt-2 text-slate-500",children:"Valider, suivre et clôturer les demandes. Les couleurs sont aussi appliquées dans Google Sheets."})]}),!i&&e.jsxs("form",{onSubmit:L,className:"max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",children:[e.jsx("label",{htmlFor:"admin-key",className:"text-sm font-semibold text-slate-700",children:"Mot de passe"}),e.jsx("input",{id:"admin-key",type:"password",value:n,onChange:s=>l(s.target.value),className:"mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-primary focus:outline-none",placeholder:"Clé d’accès",required:!0}),e.jsx("button",{type:"submit",disabled:S,className:"mt-4 w-full rounded-xl bg-primary px-4 py-3 font-bold text-white disabled:opacity-70",children:S?"Vérification…":"Ouvrir le tableau"}),p&&e.jsx("p",{className:"mt-3 text-sm font-semibold text-red-600",children:p})]}),i&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-6 flex flex-wrap items-center justify-between gap-3",children:[e.jsx("p",{className:"text-sm font-semibold text-slate-500",children:q}),e.jsx("button",{type:"button",onClick:()=>void b(n),className:"rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold hover:bg-slate-100",children:"Actualiser"})]}),(!I||p)&&e.jsxs("div",{className:"mb-6 rounded-3xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-950",children:[e.jsx("p",{className:"font-black",children:"Google Sheets n’est pas à jour"}),e.jsxs("p",{className:"mt-2",children:["Enregistrer le code ne suffit pas. Il faut publier une ",e.jsx("strong",{children:"nouvelle version"})," du déploiement existant (icône crayon), pas un nouveau déploiement."]}),e.jsxs("ol",{className:"mt-3 list-decimal space-y-1 pl-5",children:[e.jsxs("li",{children:["Ouvre le Google Sheet → ",e.jsx("strong",{children:"Extensions → Apps Script"})]}),e.jsx("li",{children:"Efface tout le code, clique le bouton ci-dessous, puis colle"}),e.jsx("li",{children:"Enregistre (disquette)"}),e.jsxs("li",{children:[e.jsx("strong",{children:"Déployer → Gérer les déploiements → crayon"})," → Version :"," ",e.jsx("strong",{children:"Nouvelle version"})," → ",e.jsx("strong",{children:"Déployer"})]}),e.jsx("li",{children:"Recharge cette page, puis reclique Valider / En cours / Terminer"})]}),e.jsx("button",{type:"button",onClick:()=>void M(),className:"mt-4 rounded-full bg-amber-900 px-4 py-2 text-xs font-bold text-white hover:brightness-110",children:G?"Script copié":"Copier le script Google"}),p&&e.jsx("p",{className:"mt-3 font-semibold text-red-700",children:p})]}),e.jsx("div",{className:"space-y-8",children:T.map(s=>{const r=U.get(s.id)||[];return e.jsxs("section",{className:`rounded-3xl border p-4 md:p-6 ${s.tone}`,children:[e.jsx("div",{className:"mb-4 flex items-end justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl md:text-2xl font-black tracking-tight",children:s.title}),e.jsxs("p",{className:"text-sm text-slate-500",children:[s.hint," · ",r.length]})]})}),e.jsx("div",{className:"hidden md:block overflow-x-auto rounded-2xl border border-white/70 bg-white/80",children:e.jsxs("table",{className:"min-w-full text-left text-sm",children:[e.jsx("thead",{className:"bg-white/90 text-slate-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 font-bold",children:"Date"}),e.jsx("th",{className:"px-4 py-3 font-bold",children:"Nom"}),e.jsx("th",{className:"px-4 py-3 font-bold",children:"Email"}),e.jsx("th",{className:"px-4 py-3 font-bold",children:"Téléphone"}),e.jsx("th",{className:"px-4 py-3 font-bold",children:"Service"}),e.jsx("th",{className:"px-4 py-3 font-bold",children:"Message"}),e.jsx("th",{className:"px-4 py-3 font-bold",children:"Statut"}),e.jsx("th",{className:"px-4 py-3 font-bold",children:"Actions"})]})}),e.jsxs("tbody",{children:[r.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:8,className:"px-4 py-6 text-center text-slate-400",children:"Aucune demande dans cette catégorie."})}),r.map((t,d)=>{const a=f(t.statut),x=Number(t.row),j=m!==null&&(m===x||m===t.email);return e.jsxs("tr",{className:`border-t border-slate-100 align-top ${D(a)}`,children:[e.jsx("td",{className:"px-4 py-3 whitespace-nowrap text-slate-500",children:R(String(t.date||""))}),e.jsx("td",{className:"px-4 py-3 font-semibold",children:t.nom||"—"}),e.jsx("td",{className:"px-4 py-3",children:t.email?e.jsx("a",{href:`mailto:${t.email}`,className:"text-primary hover:underline",children:t.email}):"—"}),e.jsx("td",{className:"px-4 py-3 whitespace-nowrap",children:t.telephone||"—"}),e.jsx("td",{className:"px-4 py-3",children:t.service||"—"}),e.jsx("td",{className:"px-4 py-3 max-w-sm text-slate-600",children:t.message||"—"}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`inline-flex rounded-full px-2.5 py-1 text-[0.7rem] font-black uppercase tracking-wide ${V(a)}`,children:a})}),e.jsx("td",{className:"px-4 py-3 relative z-20",children:e.jsx(C,{statut:a,busy:j,onUpdate:y=>void k(t,y)})})]},`${x||t.email}-${d}`)})]})]})}),e.jsxs("div",{className:"md:hidden space-y-3",children:[r.length===0&&e.jsx("p",{className:"py-6 text-center text-slate-400 text-sm",children:"Aucune demande dans cette catégorie."}),r.map((t,d)=>{const a=f(t.statut),x=Number(t.row),j=m!==null&&(m===x||m===t.email);return e.jsxs("div",{className:`rounded-2xl border border-white/70 p-4 ${D(a)}`,children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 mb-3",children:[e.jsx("span",{className:"font-bold text-base truncate",children:t.nom||"—"}),e.jsx("span",{className:`shrink-0 inline-flex rounded-full px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-wide ${V(a)}`,children:a})]}),e.jsxs("div",{className:"space-y-1.5 text-sm text-slate-600",children:[e.jsx("p",{className:"text-xs text-slate-400",children:R(String(t.date||""))}),t.email&&e.jsx("p",{children:e.jsx("a",{href:`mailto:${t.email}`,className:"text-primary hover:underline break-all",children:t.email})}),t.telephone&&e.jsx("p",{children:t.telephone}),t.service&&e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold text-slate-700",children:"Service :"})," ",t.service]}),t.message&&e.jsx("p",{className:"text-slate-500 line-clamp-3",children:t.message})]}),e.jsx("div",{className:"mt-3 pt-3 border-t border-slate-100",children:e.jsx(C,{statut:a,busy:j,onUpdate:y=>void k(t,y)})})]},`m-${x||t.email}-${d}`)})]})]},s.id)})})]})]})})}export{_ as default};
