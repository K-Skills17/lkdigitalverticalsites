import type { Metadata } from "next";
import DemoClient from "./DemoClient";

export const metadata: Metadata = {
  title: "Demonstração do Filtro de Curiosos | LK Digital",
  description: "Teste o Filtro de Curiosos como se fosse cliente e veja a ficha que chegaria pro vendedor.",
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  return <DemoClient />;
}
