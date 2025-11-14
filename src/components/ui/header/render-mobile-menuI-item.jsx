import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import SubMenuLink from "./sub-menu-link";

const renderMobileMenuItem = (item, pathname) => {
  const isActive = pathname === item.url;

  if (item.items) {
    const hasActiveSubItem = item.items.some(
      (subItem) => pathname === subItem.url
    );

    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger
          className={`text-md py-0 font-semibold ${
            isActive || hasActiveSubItem
              ? "text-primary underline decoration-primary decoration-2 underline-offset-4 hover:underline"
              : "hover:no-underline"
          }`}
        >
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink
              key={subItem.title}
              item={subItem}
              pathname={pathname}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className={`text-md font-semibold ${
        isActive &&
        "text-primary underline decoration-primary decoration-2 underline-offset-4"
      }`}
    >
      {item.title}
    </a>
  );
};

export default renderMobileMenuItem;
