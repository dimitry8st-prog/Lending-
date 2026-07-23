import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Анна Миронова — психолог в Москве и онлайн",
  description: "Бережные психологические консультации для взрослых: тревога, отношения, самооценка и жизненные перемены. Онлайн и очно в Москве.",
  keywords: ["психолог Москва", "психолог онлайн", "психологическая консультация"],
  openGraph: {
    title: "Анна Миронова — психолог-консультант",
    description: "Место, где можно быть собой и найти внутреннюю опору.",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/images/psychologist-landing-cover.png",
        width: 1792,
        height: 1024,
        alt: "Уютный кабинет психолога",
      },
    ],
  },
  robots: { index: true, follow: true },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
