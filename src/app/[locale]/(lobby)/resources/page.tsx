import { BackButton } from "@/components/back-button";
import { FramerDiv, FramerSection } from "@/components/framer";
import { HeroBg } from "@/components/layout/hero-bg";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/constants/animations";
import { Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ResourcesPage() {
  const t = useTranslations("resources");

  return (
    <FramerSection
      className="flex justify-center items-center min-h-[85dvh]"
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
    >
      <HeroBg />
      <div className="border-y border-dashed py-12 max-w-2xl">
        <FramerDiv
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="flex flex-col justify-center items-center bg-card gap-3 text-center rounded-md p-16 border"
        >
          <div className="border-2 border-dashed rounded-full p-3">
            <Rocket size="1.5rem" />
          </div>
          <div>
            <h2>{t("fallbackTitle")}</h2>
          </div>
          <div>
            <p className="text-muted-foreground">{t("fallbackDescription")}</p>
          </div>
          <BackButton />
        </FramerDiv>
      </div>
    </FramerSection>
  );
}
