export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-3">
            Harper <span className="text-gold">&amp;</span> Co.
          </h3>
          <p className="text-sm leading-relaxed text-white/60">
            Your love story, beautifully planned.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-gold transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gold transition-colors duration-200">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-gold transition-colors duration-200">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gold transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
            Get in Touch
          </h4>
          <ul className="space-y-2 text-sm">
            <li>hello@harperandco.com</li>
            <li>(555) 123-4567</li>
            <li>@harperandcoweddings</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40">
          <p>&copy; 2026 Harper &amp; Co. Weddings. All rights reserved.</p>
          <a
            href="#"
            className="mt-2 sm:mt-0 hover:text-gold transition-colors duration-200"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
