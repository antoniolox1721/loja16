import { useState } from 'react';
import { artistas, noticias, programacaoMensal } from '../../shared/conteudo';
import { MarcaCentroCultural } from '../../shared/MarcaCentroCultural';

function BlocoPlaceholder({ texto = 'PLACEHOLDER' }) {
  return (
    <div className="flex h-44 items-center justify-center border border-zinc-300 bg-white text-xs uppercase tracking-[0.3em] text-zinc-500">
      {texto}
    </div>
  );
}

export function HomePageMinimal() {
  const [tabAtiva, setTabAtiva] = useState('artistas');

  return (
    <div className="bg-[#f8f7f2] text-zinc-900">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 border-b border-zinc-300 pb-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-7">
            <MarcaCentroCultural subtitulo="Linha Minimalista" tamanho="grande" />
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Inspiração editorial contemporânea</p>
            <h2 className="max-w-2xl font-display text-5xl leading-[1.03] md:text-7xl">Programa cultural com clareza, ritmo e silêncio visual.</h2>
            <p className="max-w-xl text-zinc-600">
              Direção baseada em grelha tipográfica e muito espaço em branco, com leitura limpa e hierarquia forte.
            </p>
          </div>
          <div className="space-y-4 border-l border-zinc-300 pl-0 md:pl-8">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Imagem principal</p>
            <BlocoPlaceholder texto="PLACEHOLDER HERO" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="grid gap-4 border-b border-zinc-300 pb-10 md:grid-cols-3">
          {noticias.map((item) => (
            <article key={item.titulo} className="space-y-3">
              <BlocoPlaceholder texto="PLACEHOLDER NOTÍCIA" />
              <h3 className="font-display text-2xl leading-tight">{item.titulo}</h3>
              <p className="text-sm text-zinc-600">{item.excerto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-300 pb-4">
          <h3 className="font-display text-3xl">Conteúdo curatorial</h3>
          <div className="flex rounded-full border border-zinc-300 p-1 text-xs uppercase tracking-[0.13em]">
            <button
              onClick={() => setTabAtiva('artistas')}
              className={`rounded-full px-4 py-2 transition ${tabAtiva === 'artistas' ? 'bg-zinc-900 text-[#f8f7f2]' : 'text-zinc-600'}`}
            >
              Artistas
            </button>
            <button
              onClick={() => setTabAtiva('agenda')}
              className={`rounded-full px-4 py-2 transition ${tabAtiva === 'agenda' ? 'bg-zinc-900 text-[#f8f7f2]' : 'text-zinc-600'}`}
            >
              Agenda de exposições
            </button>
          </div>
        </div>

        {tabAtiva === 'artistas' ? (
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {artistas.map((artista) => (
              <article key={artista.nome} className="space-y-3 border border-zinc-300 p-4">
                <BlocoPlaceholder texto="PLACEHOLDER ARTISTA" />
                <h4 className="font-display text-2xl">{artista.nome}</h4>
                <p className="text-xs uppercase tracking-[0.17em] text-zinc-500">{artista.disciplina}</p>
                <p className="text-sm text-zinc-600">{artista.bio}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            {programacaoMensal.map((evento) => (
              <article key={evento.titulo} className="grid gap-3 border border-zinc-300 p-4 md:grid-cols-[90px_170px_1fr]">
                <p className="font-medium">{evento.data}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">{evento.categoria}</p>
                <div>
                  <h4 className="font-medium">{evento.titulo}</h4>
                  <p className="text-sm text-zinc-600">{evento.descricao}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
