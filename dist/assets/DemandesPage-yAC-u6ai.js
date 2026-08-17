import{a as l,j as e}from"./index-B8Gbjm92.js";const $=`/**
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
`,A="weyan-demandes-key",k="weyan-demandes-statuts",T=[{id:"Nouvelle",title:"À valider",hint:"Nouvelles demandes",tone:"bg-white border-slate-200"},{id:"Validée",title:"Validées",hint:"Prêtes à démarrer",tone:"bg-emerald-50 border-emerald-200"},{id:"En cours",title:"En cours",hint:"Travail en cours",tone:"bg-red-50 border-red-200"},{id:"Terminée",title:"Terminées",hint:"Dossiers clos",tone:"bg-sky-50 border-sky-200"},{id:"Annulée",title:"Annulées",hint:"Demandes refusées",tone:"bg-slate-100 border-slate-200"}];function f(t){return t==="Valider"||t==="Validée"||t==="Validé"?"Validée":t==="En cours"?"En cours":t==="Terminer"||t==="Terminée"||t==="Terminé"?"Terminée":t==="Annuler"||t==="Annulée"||t==="Annulé"?"Annulée":"Nouvelle"}function L(t){if(!t)return"—";const o=new Date(t);return Number.isNaN(o.getTime())?String(t):new Intl.DateTimeFormat("fr-MA",{dateStyle:"short",timeStyle:"short"}).format(o)}function U(t){return t==="Validée"?"bg-emerald-50":t==="En cours"?"bg-red-50":t==="Terminée"?"bg-sky-50":t==="Annulée"?"bg-slate-100 text-slate-500":"bg-white"}function R(t){return`${t.email||""}|${t.message||""}|${t.date||""}`}function V(){try{const t=JSON.parse(localStorage.getItem(k)||"{}"),o={};for(const[i,d]of Object.entries(t))o[i]=f(d);return o}catch{return{}}}function M(t,o){const i=V();i[R(t)]=o,localStorage.setItem(k,JSON.stringify(i))}function q(t,o){const i=V();return t.map(d=>{const u=f(d.statut);return o&&u!=="Nouvelle"?{...d,statut:u}:{...d,statut:i[R(d)]||u}})}function H(t){return t==="Validée"?"bg-emerald-600 text-white":t==="En cours"?"bg-red-600 text-white":t==="Terminée"?"bg-sky-600 text-white":t==="Annulée"?"bg-slate-500 text-white":"bg-slate-800 text-white"}function z(){const[t,o]=l.useState(""),[i,d]=l.useState(!1),[u,v]=l.useState([]),[y,S]=l.useState(!1),[g,j]=l.useState(null),[p,m]=l.useState(""),[C,b]=l.useState(!0),[D,N]=l.useState(!1);l.useEffect(()=>{document.title="Demandes | We Yan Digital";const n=document.head.querySelector('meta[name="robots"]');n&&n.setAttribute("content","noindex, nofollow")},[]);const w=async n=>{S(!0),m("");try{const a=await fetch(`/api/demandes?key=${encodeURIComponent(n)}`,{headers:{Accept:"application/json"}}),s=await a.json().catch(()=>({}));if(!a.ok||!s.ok)throw new Error(s.error||"Impossible de charger les demandes.");v(q(s.rows||[],s.scriptReady!==!1)),b(s.scriptReady!==!1),d(!0),sessionStorage.setItem(A,n)}catch(a){d(!1),m(a instanceof Error?a.message:"Accès refusé.")}finally{S(!1)}};l.useEffect(()=>{const n=sessionStorage.getItem(A);n&&(o(n),w(n))},[]);const h=async(n,a)=>{const s=Number(n.row)||0;j(s||n.email||n.message||"row"),m(""),M(n,a),v(c=>c.map(r=>s&&r.row===s||r.email===n.email&&r.message===n.message?{...r,statut:a}:r));try{const r=await(await fetch(`/api/demandes?key=${encodeURIComponent(t)}`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({row:s,email:n.email||"",message:n.message||"",statut:a})})).json().catch(()=>({}));(r.scriptReady===!1||r.sheetUpdated===!1)&&b(!1),r.ok===!1&&m(r.error||"Google Sheets n’a pas été modifié.")}catch(c){b(!1),m(c instanceof Error?c.message:"Google Sheets n’a pas été modifié.")}finally{j(null)}},F=n=>{n.preventDefault(),w(t.trim())},O=async()=>{await navigator.clipboard.writeText($),N(!0),window.setTimeout(()=>N(!1),2500)},I=l.useMemo(()=>{var a;const n=new Map;for(const s of T)n.set(s.id,[]);for(const s of u){const c=f(s.statut);(a=n.get(c))==null||a.push(s)}return n},[u]),G=l.useMemo(()=>{const n=u.length;return n<=1?`${n} demande`:`${n} demandes`},[u.length]);return e.jsx("div",{className:"min-h-screen bg-slate-50 text-slate-900 px-4 py-10",children:e.jsxs("div",{className:"mx-auto w-full max-w-6xl",children:[e.jsxs("header",{className:"mb-8",children:[e.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2",children:"Espace interne"}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black tracking-tight",children:"Demandes clients"}),e.jsx("p",{className:"mt-2 text-slate-500",children:"Valider, suivre et clôturer les demandes. Les couleurs sont aussi appliquées dans Google Sheets."})]}),!i&&e.jsxs("form",{onSubmit:F,className:"max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",children:[e.jsx("label",{htmlFor:"admin-key",className:"text-sm font-semibold text-slate-700",children:"Mot de passe"}),e.jsx("input",{id:"admin-key",type:"password",value:t,onChange:n=>o(n.target.value),className:"mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-[#6483F0] focus:outline-none",placeholder:"Clé d’accès",required:!0}),e.jsx("button",{type:"submit",disabled:y,className:"mt-4 w-full rounded-xl bg-[#6483F0] px-4 py-3 font-bold text-white disabled:opacity-70",children:y?"Vérification…":"Ouvrir le tableau"}),p&&e.jsx("p",{className:"mt-3 text-sm font-semibold text-red-600",children:p})]}),i&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-6 flex flex-wrap items-center justify-between gap-3",children:[e.jsx("p",{className:"text-sm font-semibold text-slate-500",children:G}),e.jsx("button",{type:"button",onClick:()=>void w(t),className:"rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold hover:bg-slate-100",children:"Actualiser"})]}),(!C||p)&&e.jsxs("div",{className:"mb-6 rounded-3xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-950",children:[e.jsx("p",{className:"font-black",children:"Google Sheets n’est pas à jour"}),e.jsxs("p",{className:"mt-2",children:["Enregistrer le code ne suffit pas. Il faut publier une ",e.jsx("strong",{children:"nouvelle version"})," du déploiement existant (icône crayon), pas un nouveau déploiement."]}),e.jsxs("ol",{className:"mt-3 list-decimal space-y-1 pl-5",children:[e.jsxs("li",{children:["Ouvre le Google Sheet → ",e.jsx("strong",{children:"Extensions → Apps Script"})]}),e.jsx("li",{children:"Efface tout le code, clique le bouton ci-dessous, puis colle"}),e.jsx("li",{children:"Enregistre (disquette)"}),e.jsxs("li",{children:[e.jsx("strong",{children:"Déployer → Gérer les déploiements → crayon"})," → Version :"," ",e.jsx("strong",{children:"Nouvelle version"})," → ",e.jsx("strong",{children:"Déployer"})]}),e.jsx("li",{children:"Recharge cette page, puis reclique Valider / En cours / Terminer"})]}),e.jsx("button",{type:"button",onClick:()=>void O(),className:"mt-4 rounded-full bg-amber-900 px-4 py-2 text-xs font-bold text-white hover:brightness-110",children:D?"Script copié":"Copier le script Google"}),p&&e.jsx("p",{className:"mt-3 font-semibold text-red-700",children:p})]}),e.jsx("div",{className:"space-y-8",children:T.map(n=>{const a=I.get(n.id)||[];return e.jsxs("section",{className:`rounded-3xl border p-4 md:p-6 ${n.tone}`,children:[e.jsx("div",{className:"mb-4 flex items-end justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl md:text-2xl font-black tracking-tight",children:n.title}),e.jsxs("p",{className:"text-sm text-slate-500",children:[n.hint," · ",a.length]})]})}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-white/70 bg-white/80",children:e.jsxs("table",{className:"min-w-full text-left text-sm",children:[e.jsx("thead",{className:"bg-white/90 text-slate-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-3 font-bold",children:"Date"}),e.jsx("th",{className:"px-4 py-3 font-bold",children:"Nom"}),e.jsx("th",{className:"px-4 py-3 font-bold",children:"Email"}),e.jsx("th",{className:"px-4 py-3 font-bold",children:"Téléphone"}),e.jsx("th",{className:"px-4 py-3 font-bold",children:"Service"}),e.jsx("th",{className:"px-4 py-3 font-bold",children:"Message"}),e.jsx("th",{className:"px-4 py-3 font-bold",children:"Statut"}),e.jsx("th",{className:"px-4 py-3 font-bold",children:"Actions"})]})}),e.jsxs("tbody",{children:[a.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:8,className:"px-4 py-6 text-center text-slate-400",children:"Aucune demande dans cette catégorie."})}),a.map((s,c)=>{const r=f(s.statut),E=Number(s.row),x=g!==null&&(g===E||g===s.email);return e.jsxs("tr",{className:`border-t border-slate-100 align-top ${U(r)}`,children:[e.jsx("td",{className:"px-4 py-3 whitespace-nowrap text-slate-500",children:L(String(s.date||""))}),e.jsx("td",{className:"px-4 py-3 font-semibold",children:s.nom||"—"}),e.jsx("td",{className:"px-4 py-3",children:s.email?e.jsx("a",{href:`mailto:${s.email}`,className:"text-[#6483F0] hover:underline",children:s.email}):"—"}),e.jsx("td",{className:"px-4 py-3 whitespace-nowrap",children:s.telephone||"—"}),e.jsx("td",{className:"px-4 py-3",children:s.service||"—"}),e.jsx("td",{className:"px-4 py-3 max-w-sm text-slate-600",children:s.message||"—"}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`inline-flex rounded-full px-2.5 py-1 text-[0.7rem] font-black uppercase tracking-wide ${H(r)}`,children:r})}),e.jsx("td",{className:"px-4 py-3 relative z-20",children:e.jsxs("div",{className:"flex flex-wrap gap-2 pointer-events-auto",children:[r==="Nouvelle"&&e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",disabled:x,onClick:()=>void h(s,"Validée"),className:"relative z-20 cursor-pointer rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:brightness-110 disabled:opacity-50",children:"Valider"}),e.jsx("button",{type:"button",disabled:x,onClick:()=>void h(s,"Annulée"),className:"relative z-20 cursor-pointer rounded-full bg-slate-500 px-4 py-2 text-xs font-bold text-white hover:brightness-110 disabled:opacity-50",children:"Annuler"})]}),r==="Validée"&&e.jsx("button",{type:"button",disabled:x,onClick:()=>void h(s,"En cours"),className:"relative z-20 cursor-pointer rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white hover:brightness-110 disabled:opacity-50",children:"En cours"}),r==="En cours"&&e.jsx("button",{type:"button",disabled:x,onClick:()=>void h(s,"Terminée"),className:"relative z-20 cursor-pointer rounded-full bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:brightness-110 disabled:opacity-50",children:"Terminer"}),(r==="Terminée"||r==="Annulée")&&e.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"—"})]})})]},`${E||s.email}-${c}`)})]})]})})]},n.id)})})]})]})})}export{z as default};
