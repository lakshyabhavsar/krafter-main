import { Hero } from "./hero"

function HeroDemo() {
  return (
    <Hero
      title="Join Our Team: Explore Exciting Careers at Krafter"
      subtitle="Discover job opportunities, grow your career, and work with industry leaders. Apply now to be part of our innovative team."
      actions={[
        {
          label: "Try Demo",
          href: "#",
          variant: "outline"
        },
        {
          label: "Start Free",
          href: "#",
          variant: "default"
        }
      ]}
      titleClassName="text-3xl md:text-6xl "
      subtitleClassName="text-lg md:text-xl max-w-[600px]"
      actionsClassName="mt-8"
    />
  );
}

export { HeroDemo }