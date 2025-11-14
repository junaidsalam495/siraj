const SubMenuLink = ({ item, pathname }) => {
  const isActive = pathname === item.url;

  return (
    <a
      className={`hover:bg-muted hover:text-accent-foreground flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none outline-none transition-colors ${
        isActive
          ? "text-primary underline decoration-primary decoration-2 underline-offset-4 bg-muted/50"
          : "no-underline"
      }`}
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export default SubMenuLink;
