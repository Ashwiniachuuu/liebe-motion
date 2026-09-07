const links = [
  { label: "Home", id: "home" },
  { label: "Menu", id: "menu" },
  { label: "Offers", id: "offers" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="glass flex w-full max-w-4xl items-center justify-between rounded-full px-5 py-3 md:px-7">
        <a href="#home" className="display text-xl tracking-[0.28em] text-foreground md:text-2xl">
          LIEBE
        </a>
        <ul className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="transition-colors duration-300 hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-2 text-xs font-semibold tracking-wide text-primary-foreground transition-transform duration-300 hover:scale-105 md:text-sm"
        >
          Order
        </a>
      </nav>
    </header>
  );
}
