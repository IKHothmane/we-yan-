import React from 'react'

type IconProps = {
  name: string
  className?: string
  title?: string
}

function Svg({
  className,
  title,
  children,
}: {
  className?: string
  title?: string
  children: React.ReactNode
}) {
  if (title) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        role="img"
        aria-label={title}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{title}</title>
        {children}
      </svg>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

export default function Icon({ name, className, title }: IconProps) {
  const commonStroke = {
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (name) {
    case 'arrow_forward':
      return (
        <Svg className={className} title={title}>
          <path {...commonStroke} d="M5 12h12" />
          <path {...commonStroke} d="M13 6l6 6-6 6" />
        </Svg>
      )

    case 'add':
      return (
        <Svg className={className} title={title}>
          <path {...commonStroke} d="M12 5v14" />
          <path {...commonStroke} d="M5 12h14" />
        </Svg>
      )

    case 'circle':
      return (
        <Svg className={className} title={title}>
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </Svg>
      )

    case 'check_circle':
      return (
        <Svg className={className} title={title}>
          <circle cx="12" cy="12" r="9" {...commonStroke} />
          <path {...commonStroke} d="M8.5 12.5l2.2 2.2L15.8 9.6" />
        </Svg>
      )

    case 'mail':
      return (
        <Svg className={className} title={title}>
          <path {...commonStroke} d="M4 6h16v12H4z" />
          <path {...commonStroke} d="M4 7l8 6 8-6" />
        </Svg>
      )

    case 'phone':
      return (
        <Svg className={className} title={title}>
          <path
            {...commonStroke}
            d="M7.5 4.8l2.3-.7 2 4-1.9 1.3c1.3 2.6 3.5 4.8 6.1 6.1l1.3-1.9 4 2-.7 2.3c-.2.8-.9 1.3-1.7 1.3A15.9 15.9 0 0 1 3.9 6.5c0-.8.5-1.5 1.3-1.7Z"
          />
        </Svg>
      )

    case 'phone_iphone':
    case 'smartphone':
      return (
        <Svg className={className} title={title}>
          <rect x="7" y="3" width="10" height="18" rx="2" {...commonStroke} />
          <path {...commonStroke} d="M10 18h4" />
        </Svg>
      )

    case 'location_on':
      return (
        <Svg className={className} title={title}>
          <path
            {...commonStroke}
            d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
          />
          <circle cx="12" cy="10" r="2.5" {...commonStroke} />
        </Svg>
      )

    case 'chat':
      return (
        <Svg className={className} title={title}>
          <path {...commonStroke} d="M5 6h14v9H9l-4 3V6Z" />
          <path {...commonStroke} d="M8 10h8" />
          <path {...commonStroke} d="M8 12.5h6" />
        </Svg>
      )

    case 'share':
      return (
        <Svg className={className} title={title}>
          <circle cx="18" cy="5.5" r="2.3" {...commonStroke} />
          <circle cx="6" cy="12" r="2.3" {...commonStroke} />
          <circle cx="18" cy="18.5" r="2.3" {...commonStroke} />
          <path {...commonStroke} d="M8 11l8-4.2" />
          <path {...commonStroke} d="M8 13l8 4.2" />
        </Svg>
      )

    case 'camera':
      return (
        <Svg className={className} title={title}>
          <path
            {...commonStroke}
            d="M7 7h3l1-2h2l1 2h3a2 2 0 0 1 2 2v9H5V9a2 2 0 0 1 2-2Z"
          />
          <circle cx="12" cy="13" r="3" {...commonStroke} />
        </Svg>
      )

    case 'link':
      return (
        <Svg className={className} title={title}>
          <path {...commonStroke} d="M10 13a4 4 0 0 1 0-6l1-1a4 4 0 0 1 6 6l-1 1" />
          <path {...commonStroke} d="M14 11a4 4 0 0 1 0 6l-1 1a4 4 0 0 1-6-6l1-1" />
        </Svg>
      )

    case 'public':
    case 'web':
      return (
        <Svg className={className} title={title}>
          <circle cx="12" cy="12" r="9" {...commonStroke} />
          <path {...commonStroke} d="M3 12h18" />
          <path {...commonStroke} d="M12 3a14 14 0 0 1 0 18" />
          <path {...commonStroke} d="M12 3a14 14 0 0 0 0 18" />
        </Svg>
      )

    case 'analytics':
    case 'insights':
      return (
        <Svg className={className} title={title}>
          <path {...commonStroke} d="M5 19V9" />
          <path {...commonStroke} d="M12 19V5" />
          <path {...commonStroke} d="M19 19v-7" />
          <path {...commonStroke} d="M4 19h16" />
        </Svg>
      )

    case 'trending_up':
      return (
        <Svg className={className} title={title}>
          <path {...commonStroke} d="M4 16l6-6 4 4 6-6" />
          <path {...commonStroke} d="M14 8h6v6" />
        </Svg>
      )

    case 'search':
    case 'travel_explore':
      return (
        <Svg className={className} title={title}>
          <circle cx="11" cy="11" r="6" {...commonStroke} />
          <path {...commonStroke} d="M16 16l4 4" />
        </Svg>
      )

    case 'campaign':
    case 'ads_click':
      return (
        <Svg className={className} title={title}>
          <path {...commonStroke} d="M4 11V8l10-3v14L4 16v-3" />
          <path {...commonStroke} d="M14 8.5a4.5 4.5 0 0 1 0 7" />
          <path {...commonStroke} d="M6 16l1 4h3l-1-4" />
        </Svg>
      )

    case 'palette':
      return (
        <Svg className={className} title={title}>
          <path
            {...commonStroke}
            d="M12 3c5 0 9 3.6 9 8.2 0 2.1-1.3 3.3-3.2 3.3h-1.6c-1 0-1.6.7-1.2 1.7.4 1 .2 2.8-3 2.8-5 0-9-3.6-9-8.2C3 6.6 7 3 12 3Z"
          />
          <circle cx="8" cy="10" r="1.2" fill="currentColor" />
          <circle cx="12" cy="8" r="1.2" fill="currentColor" />
          <circle cx="16" cy="10" r="1.2" fill="currentColor" />
        </Svg>
      )

    case 'edit_note':
    case 'edit_document':
      return (
        <Svg className={className} title={title}>
          <path {...commonStroke} d="M7 3h7l3 3v15H7V3Z" />
          <path {...commonStroke} d="M14 3v3h3" />
          <path {...commonStroke} d="M9 12h6" />
          <path {...commonStroke} d="M9 15h5" />
          <path {...commonStroke} d="M9 18h4" />
        </Svg>
      )

    case 'groups':
    case 'groups_3':
      return (
        <Svg className={className} title={title}>
          <circle cx="9" cy="10" r="2.2" {...commonStroke} />
          <circle cx="16.5" cy="9.5" r="1.8" {...commonStroke} />
          <path {...commonStroke} d="M5.5 18a3.8 3.8 0 0 1 7.6 0" />
          <path {...commonStroke} d="M13.2 18a3 3 0 0 1 6 0" />
        </Svg>
      )

    case 'architecture':
      return (
        <Svg className={className} title={title}>
          <path {...commonStroke} d="M4 20h16" />
          <path {...commonStroke} d="M6 20V10l6-4 6 4v10" />
          <path {...commonStroke} d="M10 20v-6h4v6" />
        </Svg>
      )

    case 'movie_filter':
      return (
        <Svg className={className} title={title}>
          <rect x="4" y="7" width="16" height="12" rx="2" {...commonStroke} />
          <path {...commonStroke} d="M8 7l-2-3h4l2 3" />
          <path {...commonStroke} d="M16 7l-2-3h4l2 3" />
          <path {...commonStroke} d="M10 12l5 3-5 3v-6Z" />
        </Svg>
      )

    case 'psychology':
    case 'auto_awesome':
      return (
        <Svg className={className} title={title}>
          <path {...commonStroke} d="M12 3l1.2 3.6L17 8l-3.8 1.4L12 13l-1.2-3.6L7 8l3.8-1.4L12 3Z" />
          <path {...commonStroke} d="M18.5 12.5l.7 2.1 2.3.9-2.3.9-.7 2.1-.7-2.1-2.3-.9 2.3-.9.7-2.1Z" />
        </Svg>
      )

    default:
      return (
        <Svg className={className} title={title}>
          <rect x="5" y="5" width="14" height="14" rx="3" {...commonStroke} />
        </Svg>
      )
  }
}

