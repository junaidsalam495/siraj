import { navigationConfig } from "@/mock/navigation-config";
import { ParagraphText } from "../ui/text/heading-text";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className="relative md:py-28 mx-auto py-12 px-4 md:px-20">
        <footer className="relative z-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2 lg:justify-start">
                <a
                  href={navigationConfig?.logo?.url}
                  className="flex items-center gap-2"
                >
                  <Image
                    src={navigationConfig?.logo?.src}
                    alt={navigationConfig?.logo?.alt}
                    width={180}
                    height={180}
                    loading="lazy"
                  />
                </a>
              </div>
              <ParagraphText text={navigationConfig?.footer?.tagline} />
            </div>
            {navigationConfig?.footer?.menuItems?.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </footer>
        <div className="text-muted-foreground text-sm absolute bottom-5 md:bottom-10 right-5 md:right-10">
          <ul className="flex gap-4">
            {navigationConfig?.footer?.bottomLinks?.map((link, linkIdx) => (
              <li key={linkIdx} className="hover:text-primary underline">
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
