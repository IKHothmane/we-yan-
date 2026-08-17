import { Link } from 'react-router-dom'
import { getPageLinking, type Cluster, type LienSortant } from '../lib/internalLinking'

type SemanticLinkProps = {
  lien: LienSortant
  clusterSource?: Cluster
  className?: string
}

export default function SemanticLink({ lien, clusterSource, className = '' }: SemanticLinkProps) {
  const cible = getPageLinking(lien.cible)

  return (
    <p className={`leading-relaxed text-slate-600 ${className}`}>
      {lien.contexte_avant}{' '}
      <Link
        to={lien.cible}
        className="font-bold text-[#6483F0] underline-offset-4 hover:underline"
        data-cluster-source={clusterSource}
        data-cluster-cible={cible?.cluster_semantique}
      >
        {lien.ancre}
      </Link>{' '}
      {lien.contexte_apres}
    </p>
  )
}
