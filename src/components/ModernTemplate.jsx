import { motion } from 'framer-motion';
import { artists, news, programming } from './content';

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function ModernTemplate() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1fr_1fr]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise} className="space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">THE FORUM FOR CONTEMPORARY CULTURE</p>
          <h2 className="font-display text-5xl leading-tight md:text-6xl">A living platform for exhibitions, dialogue, and creative exchange.</h2>
          <p className="max-w-xl text-slate-300">
            Discover this month&apos;s exhibition cycle, artist-led workshops, and performances designed to connect art with everyday life.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">Plan Your Visit</button>
            <button className="rounded-full border border-white/30 px-6 py-3 text-sm transition hover:border-cyan-200 hover:text-cyan-100">Browse Programs</button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
            alt="Audience in a contemporary cultural event"
            className="h-[460px] w-full rounded-3xl object-cover"
          />
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <motion.h3 initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise} className="font-display text-3xl">This Month at a Glance</motion.h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {programming.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-200/50"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">{item.date} · {item.category}</p>
              <h4 className="mt-2 text-lg font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <h3 className="font-display text-3xl">Artists Collective</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {artists.map((artist) => (
            <motion.article key={artist.name} whileHover={{ y: -6 }} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80">
              <img src={artist.image} alt={artist.name} className="h-60 w-full object-cover" />
              <div className="space-y-2 p-5">
                <h4 className="text-xl font-semibold">{artist.name}</h4>
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{artist.discipline}</p>
                <p className="text-sm text-slate-300">{artist.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h3 className="font-display text-3xl">News & Exhibition Stories</h3>
        <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img src={news[0].image} alt={news[0].title} className="h-72 w-full object-cover" />
            <div className="space-y-3 p-6">
              <h4 className="text-2xl font-semibold">{news[0].title}</h4>
              <p className="text-slate-300">{news[0].excerpt}</p>
            </div>
          </article>
          <div className="space-y-4">
            {news.slice(1).map((item) => (
              <article key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <img src={item.image} alt={item.title} className="h-24 w-24 rounded-xl object-cover" />
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-300">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
