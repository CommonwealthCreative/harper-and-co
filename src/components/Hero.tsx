export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-blush/30 to-cream-dark relative overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blush/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-light/15 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <p className="hero-animate hero-animate-1 text-xs md:text-sm uppercase tracking-[0.25em] text-rose font-bold mb-6">
          Luxury Wedding Planning
        </p>

        {/* Decorative gold line */}
        <div className="hero-animate hero-animate-1 w-12 h-px bg-gold mx-auto mb-8" />

        <h1 className="hero-animate hero-animate-2 font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight mb-6">
          Your Love Story,
          <br />
          <em className="text-gold">Beautifully</em> Planned.
        </h1>

        <p className="hero-animate hero-animate-3 text-lg md:text-xl text-charcoal-light font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Harper &amp; Co. creates timeless, unforgettable celebrations tailored
          to your unique vision. From intimate elopements to grand
          soir&eacute;es.
        </p>

        <div className="hero-animate hero-animate-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-gold text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gold-light hover:text-charcoal transition-all duration-300 shadow-lg shadow-gold/20"
          >
            Schedule Your Free Consultation
          </a>
          <a
            href="#gallery"
            className="text-charcoal-light hover:text-gold transition-colors duration-200 underline underline-offset-4 decoration-gold/40"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
