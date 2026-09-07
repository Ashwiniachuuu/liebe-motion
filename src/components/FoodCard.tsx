import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

export type FoodItem = {
  name: string;
  desc: string;
  rating: string;
  price: string;
  img: string;
};

export function FoodCard({ item, index }: { item: FoodItem; index: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={() => {
          mx.set(0);
          my.set(0);
        }}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="glass group rounded-3xl p-6 transition-shadow duration-500 hover:shadow-lift"
      >
        <div className="relative mb-5 aspect-square overflow-hidden rounded-2xl bg-[radial-gradient(70%_60%_at_50%_45%,var(--beige),transparent_75%)]">
          <img
            src={item.img}
            alt={item.name}
            loading="lazy"
            width={800}
            height={800}
            className="h-full w-full object-contain mix-blend-multiply drop-shadow-[0_24px_24px_rgba(90,70,40,0.16)] transition-transform duration-700 group-hover:scale-[1.07]"
            style={{ transform: "translateZ(40px)" }}
          />
        </div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="display text-2xl text-foreground">{item.name}</h3>
          <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
            ★ {item.rating}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-lg font-semibold text-foreground">{item.price}</span>
          <button className="rounded-full border border-border px-4 py-2 text-xs font-semibold tracking-wide text-foreground transition-colors duration-300 hover:border-gold hover:text-gold">
            ADD
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
