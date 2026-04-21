import { motion } from 'framer-motion';
import { artists, news, programming } from './content';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

export function ImmersiveTemplate() {
  return (
    <div className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[82vh]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
        <motion.div initial="hidden" animate="show" variants={stagger} className="relative mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-end px-6 pb-16">
          <motion.p variants={reveal} className="text-xs uppercase tracking-[0.35em] text-fuchsia-200">AURORA HOUSE OF CULTURE</motion.p>
          <motion.h2 variants={reveal} className="mt-4 max-w-4xl font-display text-5xl leading-tight md:text-7xl">
            Monumental stories in motion: exhibitions, performances, and living archives.
          </motion.h2>
          <motion.p variants={reveal} className="mt-6 max-w-2xl text-zinc-200">
            Enter a multi-sensory program where contemporary artists, local communities, and global voices co-create public culture.
          </motion.p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger} className="grid gap-6 lg:grid-cols-3">
          {news.map((item, i) => (
            <motion.article
              key={item.title}
              variants={reveal}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 ${i === 0 ? 'lg:col-span-2' : ''}`}
            >
              <img src={item.image} alt={item.title} className={`w-full object-cover transition duration-700 group-hover:scale-105 ${i === 0 ? 'h-80' : 'h-64'}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 max-w-xl text-sm text-zinc-200">{item.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-display text-4xl">Resident Artists</h3>
          <p className="text-sm text-zinc-300">Click cards to imagine modal-style profiles</p>
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="grid gap-5 md:grid-cols-3">
          {artists.map((artist) => (
            <motion.button
              key={artist.name}
              variants={reveal}
              whileHover={{ y: -8 }}
              className="group text-left"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-fuchsia-200/20">
                <img src={artist.image} alt={artist.name} className="h-80 w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-200">{artist.discipline}</p>
                  <h4 className="mt-1 text-2xl font-semibold">{artist.name}</h4>
                </div>
              </div>
              <p className="mt-3 text-sm text-zinc-300">{artist.bio}</p>
            </motion.button>
          ))}
        </motion.div>
      </section>

      <section className="relative border-y border-white/10 bg-gradient-to-r from-fuchsia-950/40 via-indigo-950/40 to-cyan-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.2),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <h3 className="font-display text-4xl">Monthly Programming Timeline</h3>
          <div className="mt-8 space-y-4">
            {programming.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid gap-3 rounded-2xl border border-white/15 bg-black/30 p-5 md:grid-cols-[120px_140px_1fr]"
              >
                <p className="text-fuchsia-200">{item.date}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-300">{item.category}</p>
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-zinc-300">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
