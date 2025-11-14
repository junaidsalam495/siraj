import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../navigation-menu";
import MegaMenu from "./mega-menu";

const renderMenuItem = (item, pathname) => {
  const isActive = pathname === item.url;
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger
          className={
            isActive &&
            "text-primary underline decoration-primary decoration-2 underline-offset-4"
          }
        >
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="text-popover-foreground w-full bg-black/95 border-2 border-primary rounded-xl p-4 shadow-2xl transition-all z-50">
          <div className="container mx-auto">
            <MegaMenu item={item} pathname={pathname} />
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className={`bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-md font-medium transition-colors ${
          isActive
            ? "text-primary underline decoration-primary decoration-2 underline-offset-4"
            : ""
        }`}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default renderMenuItem;
