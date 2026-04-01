import FadeIn from "./FadeIn";

const services = [
  {
    number: "01",
    title: "Full Planning & Design",
    description:
      "From 'yes' to 'I do,' we handle every detail. Venue selection, vendor curation, design concept, timeline management, and flawless day-of execution.",
  },
  {
    number: "02",
    title: "Partial Planning",
    description:
      "Already started planning? We step in wherever you need us — managing the details you'd rather not, coordinating vendors, and bringing your vision to life.",
  },
  {
    number: "03",
    title: "Day-of Coordination",
    description:
      "You've done the planning. We ensure it all comes together perfectly. Vendor management, timeline execution, and problem-solving so you can be fully present.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream-dark py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-rose font-bold mb-4">
              What We Offer
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal">
              How We Can Help
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.number} delay={i * 150}>
              <div className="bg-ivory rounded-2xl p-8 md:p-10 shadow-sm border border-blush/40 h-full flex flex-col">
                <span className="font-[family-name:var(--font-playfair)] text-4xl text-gold/40 mb-4 block">
                  {service.number}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-charcoal mb-4">
                  {service.title}
                </h3>
                <p className="text-charcoal-light leading-relaxed flex-1">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 text-gold font-medium text-sm hover:text-gold-light transition-colors duration-200 inline-block"
                >
                  Learn More &rarr;
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
