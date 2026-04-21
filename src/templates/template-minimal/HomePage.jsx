import { useState } from 'react';
import { artistas, noticias, programacaoMensal } from '../../shared/conteudo';
import { MarcaCentroCultural } from '../../shared/MarcaCentroCultural';

function Placeholder({ label }) {
  return (
    <div className="flex h-40 items-center justify-center border border-orange-300 bg-white text-xs uppercase tracking-[0.3em] text-orange-500">
      {label}
    </div>
  );
}

export function HomePageMinimal() {
  const [tab, setTab] = useState('artistas');

  return (
    <div className="bg-[#fffaf4] text-zinc-900">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 border-b border-orange-200 pb-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-7">
            <MarcaCentroCultural subtitulo="Template Minimal" tamanho="grande" />
            <p className="text-xs uppercase tracking-[0.22em] text-orange-500">Linha editorial limpa</p>
            <h2 className="max-w-2xl font-display text-5xl leading-[1.02] md:text-7xl">Centro Cultural Loja16</h2>
            <p className="max-w-xl text-zinc-600">Composição inspirada em linguagem editorial: tipografia, ritmo e espaço negativo.</p>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-orange-500">Hero</p>
            <Placeholder label="PLACEHOLDER" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="mb-6 flex flex-wrap gap-2 rounded-full border border-orange-300 p-1 text-xs uppercase tracking-[0.14em]">
          <button onClick={() => setTab('artistas')} className={`rounded-full px-4 py-2 ${tab === 'artistas' ? 'bg-orange-500 text-white' : 'text-zinc-600'}`}>Artistas</button>
          <button onClick={() => setTab('agenda')} className={`rounded-full px-4 py-2 ${tab === 'agenda' ? 'bg-orange-500 text-white' : 'text-zinc-600'}`}>Agenda</button>
          <button onClick={() => setTab('noticias')} className={`rounded-full px-4 py-2 ${tab === 'noticias' ? 'bg-orange-500 text-white' : 'text-zinc-600'}`}>Notícias</button>
        </div>

        {tab === 'artistas' && (
          <div className="grid gap-4 md:grid-cols-3">
            {artistas.map((a) => (
              <article key={a.nome} className="space-y-3 border border-orange-200 bg-white p-4">
                <Placeholder label="PLACEHOLDER" />
                <h3 className="font-display text-2xl">{a.nome}</h3>
                <p className="text-xs uppercase tracking-[0.15em] text-orange-500">{a.disciplina}</p>
                <p className="text-sm text-zinc-600">{a.bio}</p>
              </article>
            ))}
          </div>
        )}

        {tab === 'agenda' && (
          <div className="space-y-3">
            {programacaoMensal.map((e) => (
              <article key={e.titulo} className="grid gap-3 border border-orange-200 bg-white p-4 md:grid-cols-[90px_150px_1fr]">
                <p className="font-medium">{e.data}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-orange-500">{e.categoria}</p>
                <div>
                  <h3 className="font-medium">{e.titulo}</h3>
                  <p className="text-sm text-zinc-600">{e.descricao}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        {tab === 'noticias' && (
          <div className="grid gap-4 md:grid-cols-3">
            {noticias.map((n) => (
              <article key={n.titulo} className="space-y-3 border border-orange-200 bg-white p-4">
                <Placeholder label="PLACEHOLDER" />
                <h3 className="font-display text-2xl">{n.titulo}</h3>
                <p className="text-sm text-zinc-600">{n.excerto}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
