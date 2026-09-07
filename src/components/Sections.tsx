import { motion } from "framer-motion";
import { FoodCard, type FoodItem } from "./FoodCard";
import cheese from "@/assets/cheese.jpg.asset.json";
import spicy from "@/assets/spicy.jpg.asset.json";
import double from "@/assets/double.jpg.asset.json";
import chicken from "@/assets/chicken.jpg.asset.json";
import fries from "@/assets/fries.jpg.asset.json";
import drinks from "@/assets/drinks.jpg.asset.json";
import combo from "@/assets/combo.jpg.asset.json";
import kitchen from "@/assets/kitchen.jpg.asset.json";

const items: FoodItem[] = [
  { name: "Cheese Burger", desc: "Aged cheddar, flame-grilled patty, brioche bun.", rating: "4.9", price: "$9.50", img: cheese.url },
  { name: "Spicy Chicken Burger", desc: "Buttermilk chicken with smoked chili glaze.", rating: "4.8", price: "$10.20", img: spicy.url },
  { name: "Double Beef Burger", desc: "Two prime patties, double melt, house sauce.", rating: "5.0", price: "$13.40", img: double.url },
  { name: "Crispy Chicken", desc: "Golden tenders, herb crust, honey mustard.", rating: "4.7", price: "$8.90", img: chicken.url },
  { name: "Loaded Fries", desc: "Hand-cut fries under warm cheese velouté.", rating: "4.8", price: "$6.50", img: fries.url },
  { name: "Drinks", desc: "Chilled citrus sodas and cold-pressed refreshers.", rating: "4.6", price: "$3.80", img: drinks.url },
];

function Heading({ eyebrow, title, accent }: { eyebrow: string; title: string; accent?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-2xl text-center"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">{eyebrow}</p>
      <h2 className="display mt-4 text-4xl text-foreground sm:text-6xl">
        {title} {accent && <span className="text-gold-gradient">{accent}</span>}
      </h2>
    </motion.div>
  );
}

export function MenuSection() {
  return (
    <section id="menu" className="relative px-6 py-32">
      <Heading eyebrow="The Menu" title="Signature" accent="Cravings" />
      <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <FoodCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

export function OffersSection() {
  return (
    <section id="offers" className="relative px-6 py-32">
      <Heading eyebrow="Featured Offer" title="Spicy Burger Combo" accent="20% OFF" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="glass mx-auto mt-16 grid max-w-5xl items-center gap-10 rounded-[2rem] p-8 shadow-lift md:grid-cols-2 md:p-12"
      >
        <div className="relative rounded-[1.5rem] bg-[radial-gradient(65%_60%_at_50%_55%,var(--beige),transparent_78%)] p-4">
          <motion.img
            src={combo.url}
            alt="Spicy burger combo with fries and a drink"
            loading="lazy"
            width={1200}
            height={900}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="w-full object-contain mix-blend-multiply drop-shadow-[0_40px_34px_rgba(90,70,40,0.2)]"
          />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">Limited Time</p>
          <h3 className="display mt-4 text-4xl text-foreground">Burger. Fries. Drink.</h3>
          <p className="mt-4 text-muted-foreground">
            A full cinematic plate — our smoked chili chicken burger paired with hand-cut fries and a
            chilled citrus soda. Served warm, plated beautifully, priced generously.
          </p>
          <div className="mt-8 flex items-end gap-4">
            <span className="display text-5xl text-foreground">$14.90</span>
            <span className="pb-2 text-lg text-muted-foreground line-through">$18.60</span>
          </div>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-transform duration-300 hover:scale-105"
          >
            CLAIM OFFER
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] shadow-lift"
        >
          <img
            src={kitchen.url}
            alt="Chef plating a dish in the bright LIEBE kitchen"
            loading="lazy"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--background)_55%,transparent),transparent_55%)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">Our Story</p>
          <h2 className="display mt-4 text-4xl text-foreground sm:text-6xl">
            Made Fresh. <br /> Made With <span className="text-gold-gradient">Passion.</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            LIEBE began with one idea: comfort food deserves the same care as fine dining. Every bun is
            baked the morning it is served, every patty pressed by hand, every sauce built from scratch
            in our open kitchen.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The result is food that feels indulgent and honest at once — warm, generous and quietly
            luxurious.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              ["12k+", "Happy guests"],
              ["100%", "Fresh daily"],
              ["4.9", "Average rating"],
            ].map(([v, l]) => (
              <div key={l} className="glass rounded-2xl px-4 py-5 text-center">
                <div className="display text-2xl text-foreground">{v}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const contact = [
  ["Location", "24 Marble Lane, Downtown"],
  ["Phone", "+1 (555) 018-4420"],
  ["Email", "hello@liebe.food"],
  ["Opening Hours", "Mon–Sun · 10:00 – 23:00"],
];

export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <Heading eyebrow="Visit Us" title="Find" accent="LIEBE" />
      <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
        {contact.map(([label, value], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="glass rounded-3xl p-8"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">{label}</p>
            <p className="mt-3 text-lg text-foreground">{value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative px-6 pb-32 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="glass mx-auto max-w-4xl rounded-[2.5rem] px-8 py-20 text-center shadow-lift"
      >
        <h2 className="display text-4xl text-foreground sm:text-6xl">
          Ready for Your Next <span className="text-gold-gradient">Craving?</span>
        </h2>
        <p className="mt-5 text-muted-foreground">One bite is all it takes.</p>
        <a
          href="#menu"
          className="mt-10 inline-block rounded-full bg-primary px-10 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-transform duration-300 hover:scale-105"
        >
          ORDER YOUR BURGER
        </a>
      </motion.div>
      <p className="mt-16 text-center text-xs tracking-[0.3em] text-muted-foreground">
        © {new Date().getFullYear()} LIEBE
      </p>
    </section>
  );
}
