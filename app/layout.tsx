import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://luckybear23casino.vercel.app'

export const metadata: Metadata = {
  title: 'Lucky Bear Casino — официальный сайт лаки бир казино онлайн, зеркало и бонусы',
  description:
    'Lucky Bear Casino — официальный сайт лаки бир казино онлайн. Играйте в лучшие слоты, рулетку и карточные игры. Зеркало для стабильного входа, щедрые бонусы новым игрокам, быстрые выплаты и круглосуточная поддержка 24/7.',
  keywords: [
    'lucky bear casino',
    'luckybear casino',
    'luckybear casino официальный',
    'lucky bear казино',
    'лаки бир казино',
    'лакибир казино',
    'лаки бир казино зеркало',
    'лаки бир казино онлайн',
    'лаки бир казино официальный',
    'лаки бир казино официальный сайт',
    'лакибир казино официальный сайт',
    'лаки бир казино сайт',
    'luckybear casino зеркало',
    'luckybear casino официальный сайт',
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Lucky Bear Casino — официальный сайт лаки бир казино онлайн',
    description:
      'Lucky Bear Casino — официальный сайт лаки бир казино. Зеркало для входа, бонусы новым игрокам, быстрые выплаты.',
    url: SITE_URL,
    siteName: 'Lucky Bear Casino',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucky Bear Casino — официальный сайт',
    description: 'Лаки бир казино онлайн: слоты, рулетка, карты. Зеркало и бонусы.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0e1a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Additional custom head tags — insert any extra meta/link/script tags here */}
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="geo.region" content="RU" />
        <meta name="geo.placename" content="Russia" />
        <meta name="language" content="Russian" />
        <meta name="author" content="Lucky Bear Casino" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 day" />
        <meta name="theme-color" content="#0a0e1a" />
        <meta name="color-scheme" content="dark" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" hrefLang="ru" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Lucky Bear Casino" />
        <meta property="og:title" content="Lucky Bear Casino — официальный сайт лаки бир казино онлайн" />
        <meta property="og:description" content="Lucky Bear Casino — официальный сайт лаки бир казино. Зеркало для входа, бонусы, быстрые выплаты." />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lucky Bear Casino — официальный сайт" />
        <meta name="twitter:description" content="Лаки бир казино онлайн: слоты, рулетка, карты. Зеркало и бонусы." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
        {/* End of custom head tags */}
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
