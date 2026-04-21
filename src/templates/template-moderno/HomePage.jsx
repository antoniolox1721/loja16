import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { artistas, noticias, programacaoMensal } from '../../shared/conteudo';
import { MarcaCentroCultural } from '../../shared/MarcaCentroCultural';

function Placeholder({ label }) {
  return (
    <motion.div layout className="flex h-44 items-center justify-center rounded-2xl border border-orange-300 bg-white text-xs uppercase tracking-[0.3em] text-orange-500">
      {label}
    </motion.div>
  );
}

export function HomePageModerno() {
  const [tab, setTab] = useState('artistas');

  const conteudo = {
    artistas: artistas.map((a) => ({ id: a.nome, titulo: a.nome, meta: a.disciplina, texto: a.bio })),
    agenda: programacaoMensal.map((e) => ({ id: e.titulo, titulo: `${e.data} · ${e.titulo}`, meta: e.categoria, texto: e.descricao })),
    noticias: noticias.map((n) => ({ id: n.titulo, titulo: n.titulo, meta: 'Atualização', texto: n.excerto }))
  };

  return (
    <div className="bg-gradient-to-b from-[#fff8ef] to-white text-zinc-900">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8 rounded-3xl border border-orange-200 bg-white p-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <MarcaCentroCultural subtitulo="Template Moderno" tamanho="grande" />
            <h2 className="font-display text-5xl leading-tight md:text-6xl">Loja16 com interação contemporânea.</h2>
            <p className="max-w-xl text-zinc-600">Mesma base visual do template minimalista, com movimento suave, transições e componentes animados.</p>
          </div>
          <Placeholder label="PLACEHOLDER" />
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-6 flex flex-wrap gap-2 rounded-full border border-orange-300 p-1 text-xs uppercase tracking-[0.14em]">
          {['artistas', 'agenda', 'noticias'].map((id) => (
            <button key={id} onClick={() => setTab(id)} className={`rounded-full px-4 py-2 transition ${tab === id ? 'bg-orange-500 text-white' : 'text-zinc-600 hover:text-zinc-900'}`}>
              {id === 'artistas' ? 'Artistas' : id === 'agenda' ? 'Agenda' : 'Notícias'}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25 }}
            className="grid gap-4 md:grid-cols-3"
          >
            {conteudo[tab].map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="space-y-3 rounded-2xl border border-orange-200 bg-white p-4"
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
