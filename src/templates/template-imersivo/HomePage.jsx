import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { artistas, noticias, programacaoMensal } from '../../shared/conteudo';
import { MarcaCentroCultural } from '../../shared/MarcaCentroCultural';

function Placeholder({ label }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-orange-300 bg-white">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-orange-200/0 via-orange-200/50 to-orange-200/0"
        initial={{ x: '-120%' }}
        animate={{ x: '120%' }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
      />
      <div className="relative flex h-48 items-center justify-center text-xs uppercase tracking-[0.32em] text-orange-500">{label}</div>
    </div>
  );
}

export function HomePageImersivo() {
  const [tab, setTab] = useState('artistas');

  const itens = useMemo(
    () => ({
      artistas: artistas.map((a) => ({ id: a.nome, titulo: a.nome, meta: a.disciplina, texto: a.bio })),
      agenda: programacaoMensal.map((e) => ({ id: e.titulo, titulo: `${e.data} · ${e.titulo}`, meta: e.categoria, texto: e.descricao })),
      noticias: noticias.map((n) => ({ id: n.titulo, titulo: n.titulo, meta: 'Atualização', texto: n.excerto }))
    }),
    []
  );

  return (
    <div className="bg-[#fff9f2] text-zinc-900">
      <section className="relative overflow-hidden border-b border-orange-200">
        <motion.div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 6, repeat: Infinity }} />
        <motion.div className="absolute -right-16 top-20 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl" animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <MarcaCentroCultural subtitulo="Template Imersivo" tamanho="grande" />
            <h2 className="font-display text-5xl leading-[1.02] md:text-7xl">Mesmo ADN visual, experiência flagship.</h2>
            <p className="max-w-2xl text-zinc-600">Aqui a estrutura mantém-se (tabs + placeholders), mas com camadas animadas, transições e direção mais experimental.</p>
          </motion.div>
          <Placeholder label="PLACEHOLDER" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-6 flex flex-wrap gap-2 rounded-full border border-orange-300 p-1 text-xs uppercase tracking-[0.14em]">
          {['artistas', 'agenda', 'noticias'].map((id) => (
            <motion.button
              key={id}
              onClick={() => setTab(id)}
              whileTap={{ scale: 0.96 }}
              whileHover={{ y: -1 }}
              className={`rounded-full px-4 py-2 transition ${tab === id ? 'bg-orange-500 text-white' : 'text-zinc-600 hover:text-zinc-900'}`}
            >
              {id === 'artistas' ? 'Artistas' : id === 'agenda' ? 'Agenda' : 'Notícias'}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.32 }}
            className="grid gap-4 md:grid-cols-3"
          >
            {itens[tab].map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                whileHover={{ y: -6, rotateX: 1.2 }}
                className="space-y-3 rounded-3xl border border-orange-200 bg-white p-4 shadow-[0_16px_40px_-26px_rgba(249,115,22,0.55)]"
              >
                <Placeholder label="PLACEHOLDER" />
                <h3 className="font-display text-2xl leading-tight">{item.titulo}</h3>
                <p className="text-xs uppercase tracking-[0.15em] text-orange-500">{item.meta}</p>
                <p className="text-sm text-zinc-600">{item.texto}</p>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
