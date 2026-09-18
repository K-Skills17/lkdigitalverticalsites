import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade (LGPD)",
  description: "Política de privacidade da LK Digital. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.",
  alternates: { canonical: "/privacidade" },
};

export default function Privacidade() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen pt-28 pb-20 bg-white">
        <div className="max-w-prose mx-auto px-4 sm:px-6">
          <h1 className="font-display text-3xl text-[#122D4A] mb-8">Política de Privacidade (LGPD)</h1>
          <div className="prose prose-sm text-[#64748B] space-y-4">
            <p>Esta política de privacidade descreve como a LK Digital coleta, usa e protege seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).</p>
            <h2 className="font-display text-xl text-[#122D4A] mt-6">Dados coletados</h2>
            <p>Coletamos apenas os dados necessários para o fornecimento dos nossos serviços: nome, e-mail, WhatsApp e informações sobre o seu negócio fornecidas voluntariamente pelo formulário de diagnóstico.</p>
            <h2 className="font-display text-xl text-[#122D4A] mt-6">Uso dos dados</h2>
            <p>Os dados são utilizados exclusivamente para contato relacionado ao diagnóstico solicitado e prestação de serviços de aquisição e conversão. Não compartilhamos seus dados com terceiros sem consentimento.</p>
            <h2 className="font-display text-xl text-[#122D4A] mt-6">Seus direitos</h2>
            <p>Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail: contato@lkdigital.org</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
