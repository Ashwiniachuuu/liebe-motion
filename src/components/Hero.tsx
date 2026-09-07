import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 20 });
  const py = useSpring(my, { stiffness: 60, damping: 20 });
  const { scrollY } = useScroll();
  const lift = useTransform(scrollY, [0, 700], [0, -90]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 26);
      my.set((e.clientY / window.innerHeight - 0.5) * 18);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-6">
      {/* floating warm particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-gold/40 blur-[1px]"
            style={{ left: `${(i * 37) % 96}%`, top: `${(i * 53) % 90}%` }}
            animate={{ y: [0, -26, 0], opacity: [0.15, 0.6, 0.15] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>

      <motion.div
        style={{ x: px, y: lift, opacity: fade }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block rounded-full glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground"
        >
          Crafted Daily
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: py }}
          className="display text-5xl leading-[1.05] text-foreground sm:text-7xl md:text-8xl"
        >
          Good Food. <br className="hidden sm:block" />
          Good <span className="text-gold-gradient">Mood!</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mx-auto mt-6 max-w-lg text-base text-muted-foreground sm:text-lg"
        >
          Fresh flavors. Bold cravings. Delivered your way.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#offers"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground shadow-lift transition-transform duration-300 hover:scale-105"
          >
            ORDER NOW
          </a>
          <a
            href="#menu"
            className="glass rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide text-foreground transition-colors duration-300 hover:text-gold"
          >
            EXPLORE MENU
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
      </motion.div>
    </section>
  );
}
