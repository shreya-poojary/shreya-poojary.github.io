import { useEffect, useMemo, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Recognition", href: "#recognition" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const sectionIds = useMemo(
    () => navItems.map((i) => i.href.replace("#", "")),
    []
  );
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "home");

  useEffect(() => {
    const setFromHash = () => {
      const id = window.location.hash.replace("#", "");
      if (id && sectionIds.includes(id)) setActiveId(id);
    };
    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, [sectionIds]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        const id = visible?.target?.id;
        if (id) setActiveId(id);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        // Bias toward the section currently under the navbar
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-700/50 bg-slate-950/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 h-14 flex items-center gap-2 md:gap-3 overflow-x-auto">
        {navItems.map((item) => (
          (() => {
            const id = item.href.replace("#", "");
            const isActive = activeId === id;
            return (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActiveId(id)}
            aria-current={isActive ? "page" : undefined}
            className={[
              "whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
              isActive
                ? "text-cyan-300 bg-slate-800/70 border border-cyan-500/20"
                : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/70",
            ].join(" ")}
          >
            {item.label}
          </a>
            );
          })()
        ))}
      </nav>
    </header>
  );
}
