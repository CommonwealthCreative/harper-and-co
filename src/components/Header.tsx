export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-blush-dark/30">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-charcoal tracking-tight"
        >
          Harper <span className="text-gold">&amp;</span> Co.
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-charcoal-light">
          <a href="#about" className="hover:text-gold transition-colors duration-200">
            About
          </a>
          <a href="#services" className="hover:text-gold transition-colors duration-200">
            Services
          </a>
          <a href="#gallery" className="hover:text-gold transition-colors duration-200">
            Portfolio
          </a>
          <a href="#testimonials" className="hover:text-gold transition-colors duration-200">
            Testimonials
          </a>
        </nav>

        <a
          href="#contact"
          className="bg-gold text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gold-light hover:text-charcoal transition-all duration-300"
        >
          Book a Consultation
        </a>
      </div>
    </header>
  );
}
