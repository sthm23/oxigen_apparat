import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import "../globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kislorodpro.uz - Кислородные концентраторы",
  description: "Профессиональные кислородные концентраторы для дома и клиник. Аренда и продажа с быстрой доставкой. ☎️ +998 99 011 11 99 · +998 95 033 73 73",
  keywords: ["кислород", "концентратор", "аренда", "продажа", "Узбекистан", "Ташкент", "kislorodpro"],
  authors: [{ name: "kislorodpro.uz" }],
  metadataBase: new URL("https://kislorodpro.uz"),
  openGraph: {
    title: "kislorodpro.uz - Кислородные концентраторы",
    description: "Аренда и продажа кислородных концентраторов. Быстрая доставка. ☎️ +998 99 011 11 99 · +998 95 033 73 73",
    url: "https://kislorodpro.uz",
    siteName: "kislorodpro.uz",
    locale: "ru_RU",
    type: "website",
    images: [{
      url: "/logo.jpg",
      width: 1200,
      height: 630,
      alt: "Кислородные концентраторы kislorodpro.uz",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "kislorodpro.uz - Кислородные концентраторы",
    description: "Аренда и продажа кислородных концентраторов. Быстрая доставка. ☎️ +998 99 011 11 99 · +998 95 033 73 73",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code-here",
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
