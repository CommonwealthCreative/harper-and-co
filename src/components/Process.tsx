import FadeIn from "./FadeIn";

const steps = [
  {
    number: "1",
    title: "Consultation",
    description:
      "We start with a complimentary consultation to hear your vision, understand your style, and discuss how we can bring it to life.",
  },
  {
    number: "2",
    title: "Proposal & Planning",
    description:
      "We create a tailored proposal and once you're ready, we dive into every detail — from mood boards to vendor introductions.",
  },
  {
    number: "3",
    title: "Design & Coordination",
    description:
      "We bring your vision to life through thoughtful design choices, seamless vendor coordination, and meticulous timeline management.",
  },
  {
    number: "4",
    title: "Your Perfect Day",
    description:
      "Relax and savor every moment. We're behind the scenes ensuring everything unfolds beautifully.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-rose font-bold mb-4">
              The Process
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal">
              Your Journey with Us
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 150}>
              <div className="relative text-center lg:text-left">
                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-gold/30" />
                )}

                <div className="flex flex-col items-center lg:items-start">
                  {/* Number circle */}
                  <div className="w-12 h-12 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
                    <span className="font-[family-name:var(--font-playfair)] text-gold text-lg font-semibold">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal-light leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
