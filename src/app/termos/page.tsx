import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso da LK Digital.",
  alternates: { canonical: "/termos" },
};

export default function Termos() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen pt-28 pb-20 bg-white">
        <div className="max-w-prose mx-auto px-4 sm:px-6">
          <h1 className="font-display text-3xl text-[#122D4A] mb-8">Termos de Uso</h1>
          <div className="prose prose-sm text-[#64748B] space-y-4">
            <p>Ao utilizar o site da LK Digital, você concorda com os presentes termos de uso.</p>
            <h2 className="font-display text-xl text-[#122D4A] mt-6">Uso do site</h2>
            <p>O conteúdo deste site é de propriedade exclusiva da LK Digital. É proibida a reprodução total ou parcial sem autorização expressa.</p>
            <h2 className="font-display text-xl text-[#122D4A] mt-6">Serviços</h2>
            <p>Os serviços de aquisição e conversão são prestados mediante contrato específico, com escopo, prazo e investimento definidos individualmente.</p>
            <h2 className="font-display text-xl text-[#122D4A] mt-6">Contato</h2>
            <p>Para dúvidas sobre estes termos: contato@lkdigital.org</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
