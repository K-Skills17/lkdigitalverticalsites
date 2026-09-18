import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Problem from "@/components/sections/Problem";
import SystemFramework from "@/components/sections/SystemFramework";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import NotAnotherAgency from "@/components/sections/NotAnotherAgency";
import BusinessTypes from "@/components/sections/BusinessTypes";
import Process from "@/components/sections/Process";
import Results from "@/components/sections/Results";
import Lab from "@/components/sections/Lab";
import Insights from "@/components/sections/Insights";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";
import DiagnosticForm from "@/components/sections/DiagnosticForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <Problem />
        <SystemFramework />
        <WhatWeBuild />
        <NotAnotherAgency />
        <BusinessTypes />
        <Process />
        <Results />
        <Lab />
        <Insights />
        <About />
        <FAQ />
        <CTAFinal />
        <DiagnosticForm />
      </main>
      <Footer />
    </>
  );
}
