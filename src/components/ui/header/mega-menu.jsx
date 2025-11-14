import { iconMap } from "@/mock/navigation-config";
import Image from "next/image";
import { ParagraphText, SubHeading } from "../text/heading-text";

export default function MegaMenu({ item }) {
  return (
    <>
      <div className="flex gap-8">
        <div className="flex-1">
          <SubHeading text="Services" className="mb-2" />
          <div className="grid grid-cols-2 gap-6">
            {item.items?.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={i}
                  className={`p-4 rounded-xl border border-white/20 cursor-pointer
                      hover:bg-yellow-500 hover:text-black transition group`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="p-2 rounded-md border border-white/20
                        bg-white/10 group-hover:bg-white"
                    >
                      {Icon && (
                        <Icon className="size-6 text-white group-hover:text-black" />
                      )}
                    </div>

                    <div>
                      <h3 className="font-semibold">{service.title}</h3>
                      <p className="text-sm opacity-80">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
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
