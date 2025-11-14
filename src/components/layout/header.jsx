import { ArrowRight, Menu } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { navigationConfig } from "@/mock/navigation-config";
import renderMenuItem from "../ui/header/render-menu-item";
import renderMobileMenuItem from "../ui/header/render-mobile-menuI-item";

const Header = () => {
  return (
    <section className="py-4">
      <div className="container">
        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
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
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {navigationConfig?.headerMenu?.map((item) =>
                    renderMenuItem(item)
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild size="lg">
              <a
                href={navigationConfig?.contact?.url}
                className="flex items-center gap-2"
              >
                {navigationConfig?.contact?.title}
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </nav>

        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
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
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
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
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {navigationConfig?.headerMenu?.map((item) =>
                      renderMobileMenuItem(item)
                    )}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={navigationConfig?.contact?.url}>
                        {navigationConfig?.contact?.title}
                      </a>
                    </Button>
                    <Button asChild>
                      <a href={navigationConfig?.contact?.url}>
                        {navigationConfig?.contact?.title}
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
