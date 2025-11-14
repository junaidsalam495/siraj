import { iconMap } from "@/mock/navigation-config";
import Image from "next/image";
import Link from "next/link";
import { ParagraphText, SubHeading } from "../text/heading-text";

export default function MegaMenu({ item, pathname }) {
  return (
    <>
      <div className="flex gap-8">
        <div className="flex-1">
          <SubHeading text="Services" className="mb-2" />
          <div className="grid grid-cols-2 gap-6">
            {item.items?.map((service, i) => {
              const Icon = iconMap[service.icon];
              const isActive = pathname === service.url;
              return (
                <Link
                  key={i}
                  href={service.url}
                  className={`p-4 rounded-xl border cursor-pointer transition group ${
                    isActive
                      ? "bg-yellow-500 text-black border-primary"
                      : "border-white/20 hover:bg-yellow-500 hover:text-black"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-md border
                        ${
                          isActive
                            ? "bg-white border-white"
                            : "border-white/20 bg-white/10 group-hover:bg-white"
                        }`}
                    >
                      {Icon && (
                        <Icon
                          className={`size-6 ${
                            isActive
                              ? "text-black"
                              : "text-white group-hover:text-black"
                          }`}
                        />
                      )}
                    </div>

                    <div>
                      <h3 className="font-semibold">{service.title}</h3>
                      <p
                        className={`text-sm ${
                          isActive ? "opacity-90" : "opacity-80"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-[240px] space-y-2">
          <SubHeading text="Explore" className="!text-xl" />
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/images/mega-menu.jpg"
              width={200}
              height={200}
              alt="overview"
              className="object-cover"
            />
          </div>
          <SubHeading text="Platform Overview" className="!text-xl" />
          <ParagraphText
            text="Take a free tour of our platform features"
            className="text-white"
          />
        </div>
      </div>
    </>
  );
}
