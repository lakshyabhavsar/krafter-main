import { Hero } from "./hero"

function HeroDemo() {
  return (
    <Hero
      title="We provide bench
resources on contract 
and project basis."
      subtitle="Transform your workflow with intelligent automation. Simple, powerful, reliable."
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