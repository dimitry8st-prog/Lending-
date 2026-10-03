import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://psychologist-landing.ketwolsheb.chatgpt.site"),
  alternates: { canonical: "https://st8dom.ru/demos/psychologist/" },
  title: "Лендинг психолога — демонстрация ДИС",
  description: "Портфолио-кейс Степанова Д.А.: адаптивный сайт частного психолога с направлениями работы, стоимостью, FAQ и заявкой на адаптацию. Данные специалиста вымышлены.",
  keywords: ["психолог Москва", "психолог онлайн", "психологическая консультация"],
  openGraph: {
    title: "Лендинг психолога — демонстрация ДИС",
    description: "Адаптивный сайт частной практики. Публичная демонстрация и заказ адаптации на портале ДИС.",
    type: "website",
    locale: "ru_RU",
    url: "https://st8dom.ru/demos/psychologist/",
    images: [{ url: "https://st8dom.ru/static/demos/psychologist/cover.webp", width: 1672, height: 941, alt: "Демонстрационный кабинет психолога" }],
  },
  robots: { index: true, follow: true },

};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
