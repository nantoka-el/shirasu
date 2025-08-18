import type { Metadata } from "next";
import { SITE_CONFIG, ANALYTICS } from '@/lib/constants';
import "./globals.css";

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  keywords: '篠島,しらす,直送,生しらす,冷凍しらす,愛知県,虎丸水産,朝獲れ,漁師直送,しらす丼',
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: '篠島直送しらす',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analytics Placeholder */}
        {/* 
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.ga4.measurementId}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ANALYTICS.ga4.measurementId}');
            `,
          }}
        />
        */}
        
        {/* LINE Tag Placeholder */}
        {/*
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(g,d,o){
                g._ltq=g._ltq||[];g._lt=g._lt||function(){g._ltq.push(arguments)};
                var h=location.protocol==='https:'?'https://d.line-scdn.net':'http://d.line-cdn.net';
                var s=d.createElement('script');s.async=1;
                s.src=o||h+'/n/line_tag/public/release/v1/lt.js';
                var t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
              })(window, document);
              _lt('init', {
                customerType: 'account',
                tagId: '${ANALYTICS.lineTag.tagId}'
              });
              _lt('send', 'pv', ['${ANALYTICS.lineTag.tagId}']);
            `,
          }}
        />
        */}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
