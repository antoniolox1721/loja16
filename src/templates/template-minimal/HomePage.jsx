import { artistas, noticias, programacaoMensal } from '../../shared/conteudo';
import { MarcaCentroCultural } from '../../shared/MarcaCentroCultural';

export function HomePageMinimal() {
  return (
    <div className="bg-[#f8f7f2] text-zinc-900">
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-8">
          <MarcaCentroCultural subtitulo="Direção Editorial" />
          <h2 className="max-w-xl font-display text-5xl leading-tight md:text-6xl">
            Um espaço para arte contemporânea, pensamento crítico e encontro.
          </h2>
          <p className="max-w-lg text-zinc-600">
            O Centro Cultural acolhe exposições, programação mensal e práticas artísticas abertas à cidade.
          </p>
          <button className="rounded-full border border-zinc-900 px-6 py-3 text-sm transition hover:bg-zinc-900 hover:text-[#f8f7f2]">
            Ver exposições atuais
          </button>
        </div>
        <img src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80" alt="Visitantes numa galeria contemporânea" className="h-[430px] w-full object-cover" />
      </section>

      <section className="mx-auto max-w-7xl border-y border-zinc-200 px-6 py-14">
        <h3 className="font-display text-3xl">Notícias e últimas exposições</h3>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {noticias.map((item) => (
            <article key={item.titulo} className="group space-y-3">
              <img src={item.imagem} alt={item.titulo} className="h-56 w-full object-cover transition group-hover:opacity-90" />
              <h4 className="font-display text-2xl">{item.titulo}</h4>
              <p className="text-sm text-zinc-600">{item.excerto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h3 className="font-display text-3xl">Artistas residentes</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {artistas.map((artista) => (
            <article key={artista.nome} className="space-y-3 border border-zinc-200 p-4">
              <img src={artista.imagem} alt={artista.nome} className="h-64 w-full object-cover" />
              <h4 className="font-display text-2xl">{artista.nome}</h4>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{artista.disciplina}</p>
              <p className="text-sm text-zinc-600">{artista.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h3 className="font-display text-3xl">Programação mensal · Maio</h3>
        <div className="mt-6 overflow-hidden border border-zinc-200">
          {programacaoMensal.map((evento) => (
            <article key={evento.titulo} className="grid gap-3 border-b border-zinc-200 p-4 last:border-none md:grid-cols-[100px_160px_1fr]">
              <p className="font-medium">{evento.data}</p>
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">{evento.categoria}</p>
              <div>
                <p className="font-medium">{evento.titulo}</p>
                <p className="text-sm text-zinc-600">{evento.descricao}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
