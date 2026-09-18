import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | LK Digital",
    default: "LK Digital | Sistemas de Aquisição e Conversão",
  },
  description:
    "Sistemas de aquisição e conversão para negócios de alto valor. Transformamos procura digital em oportunidades comerciais, orçamentos e agendamentos.",
  metadataBase: new URL("https://lkdigital.org"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "LK Digital",
    title: "LK Digital | Sistemas de Aquisição e Conversão",
    description:
      "Sistemas de aquisição e conversão para negócios de alto valor. Transformamos procura digital em oportunidades comerciais.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-to-content">
          Pular para o conteúdo
        </a>
        {children}

        {/* Analytics placeholder — swap G-PLACEHOLDER with real GA4 ID */}
        <Script
          id="deferred-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              setTimeout(function(){
                var gs=document.createElement('script');
                gs.src='https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER';
                gs.async=true;
                document.head.appendChild(gs);
                window.dataLayer=window.dataLayer||[];
                function gtag(){dataLayer.push(arguments);}
                gtag('js',new Date());
                gtag('config','G-PLACEHOLDER');
              }, 5000);
            `,
          }}
        />
      </body>
    </html>
  );
}
