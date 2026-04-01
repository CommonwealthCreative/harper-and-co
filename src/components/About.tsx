import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Portrait placeholder */}
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-blush to-rose/60 shadow-lg" />

            {/* Story */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-rose font-bold mb-4">
                Meet Your Planner
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal mb-6 italic">
                Hi, I&apos;m Harper.
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  With a deep passion for design and an unwavering attention to
                  detail, I believe every wedding should feel as unique as the
                  love it celebrates. My approach blends timeless elegance with
                  thoughtful personal touches — because the most beautiful
                  moments are the ones that feel unmistakably yours.
                </p>
                <p>
                  From the first spark of inspiration to the final dance,
                  I&apos;m here to guide you through every step — taking the
                  stress off your shoulders so you can savor the joy of this
                  incredible season. Nothing makes me happier than watching a
                  couple see their vision come to life.
                </p>
                <p>
                  Let&apos;s create something extraordinary together.
                </p>
              </div>
              <p className="mt-8 font-[family-name:var(--font-playfair)] text-gold text-xl italic">
                — Harper
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
