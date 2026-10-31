import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../../styles/service-strategy-lamp.css'

type ServiceStrategyLampProps = {
  href?: string
}

export default function ServiceStrategyLamp({ href = '/services#strategie' }: ServiceStrategyLampProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className="service-card service-card-blue service-card-strategie strategy-lamp-card"
      id="strategie"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28, margin: '0px 0px -40px 0px' }}
      transition={{ duration: reduceMotion ? 0 : 0.7, ease: 'easeOut' }}
    >
      <motion.img
        className="strategy-lamp-card__bulb"
        src="/images/services/service-strategy-bulb.webp"
        alt=""
        width={1078}
        height={1460}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: reduceMotion ? 0 : 0.85, delay: reduceMotion ? 0 : 0.12, ease: 'easeOut' }}
      />
      <div className="service-card-content">
        <div className="service-number">
          <span>01</span>
          <i />
        </div>
        <h3>Stratégie marketing & rebranding</h3>
        <p>Nous construisons des stratégies sur mesure et donnons un nouveau souffle à votre marque.</p>
        <Link className="service-arrow" to={href} aria-label="Découvrir la stratégie marketing">
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.article>
  )
}
