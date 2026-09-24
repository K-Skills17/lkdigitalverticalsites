import type { Metadata } from "next";
import ApresentacaoClient from "./ApresentacaoClient";

export const metadata: Metadata = {
  title: "Filtro de Curiosos — Apresentação | LK Digital",
  description: "Como o Filtro de Curiosos separa compradores de curiosos e entrega fichas prontas para o vendedor.",
  robots: { index: false, follow: false },
};

export default function ApresentacaoPage() {
  return <ApresentacaoClient />;
}
