import { motion } from 'framer-motion';
import { artistas, noticias, programacaoMensal } from '../../shared/conteudo';
import { MarcaCentroCultural } from '../../shared/MarcaCentroCultural';

export function HomePageImersivo() {
  return (
    <div className="overflow-hidden bg-black text-white">
      <section className="relative min-h-[84vh]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/65 to-black" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative mx-auto flex min-h-[84vh] max-w-7xl flex-col justify-end px-6 pb-16">
          <MarcaCentroCultural subtitulo="Experiência Imersiva" inverso />
          <h2 className="mt-6 max-w-4xl font-display text-5xl leading-tight md:text-7xl">Arte em escala monumental para uma comunidade em movimento.</h2>
          <p className="mt-6 max-w-2xl text-zinc-200">Uma homepage de referência com narrativa visual, blocos dinâmicos e programação cultural em destaque.</p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {noticias.map((item, i) => (
            <motion.article key={item.titulo} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.02 }} className={`group relative overflow-hidden rounded-3xl border border-white/10 ${i === 0 ? 'lg:col-span-2' : ''}`}>
              <img src={item.imagem} alt={item.titulo} className={`w-full object-cover transition duration-700 group-hover:scale-105 ${i === 0 ? 'h-80' : 'h-64'}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-2xl font-semibold">{item.titulo}</h3>
                <p className="mt-2 text-sm text-zinc-200">{item.excerto}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-display text-4xl">Artistas em residência</h3>
          <p className="text-sm text-zinc-300">Cartões preparados para detalhe em modal/página própria.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {artistas.map((artista) => (
            <motion.article key={artista.nome} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8 }} viewport={{ once: true }} className="group text-left">
              <div className="relative overflow-hidden rounded-[2rem] border border-orange-300/30">
                <img src={artista.imagem} alt={artista.nome} className="h-80 w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-300">{artista.disciplina}</p>
                  <h4 className="mt-1 text-2xl font-semibold">{artista.nome}</h4>
                </div>
              </div>
              <p className="mt-3 text-sm text-zinc-300">{artista.bio}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-gradient-to-r from-orange-950/40 via-black to-zinc-900">
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <h3 className="font-display text-4xl">Programação mensal</h3>
          <div className="mt-8 space-y-4">
            {programacaoMensal.map((evento, idx) => (
              <motion.article key={evento.titulo} initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid gap-3 rounded-2xl border border-white/15 bg-black/35 p-5 md:grid-cols-[120px_140px_1fr]">
                <p className="text-orange-300">{evento.data}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-300">{evento.categoria}</p>
                <div>
                  <h4 className="text-lg font-semibold">{evento.titulo}</h4>
                  <p className="text-sm text-zinc-300">{evento.descricao}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
