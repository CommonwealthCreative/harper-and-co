import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import ConsultationForm from "@/components/ConsultationForm";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Gallery />

      {/* Consultation Form Section */}
      <section id="contact" className="bg-cream-dark py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.2em] text-rose font-bold mb-4">
                Get Started
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal mb-4">
                Let&apos;s Plan Your Perfect Day
              </h2>
              <p className="text-charcoal-light leading-relaxed">
                Ready to begin? Fill out the form below and we&apos;ll reach out
                to schedule your complimentary consultation.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <ConsultationForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
