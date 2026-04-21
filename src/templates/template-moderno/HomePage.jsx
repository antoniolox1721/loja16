import { motion } from 'framer-motion';
import { artistas, noticias, programacaoMensal } from '../../shared/conteudo';
import { MarcaCentroCultural } from '../../shared/MarcaCentroCultural';

export function HomePageModerno() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
          <MarcaCentroCultural subtitulo="Programa Contemporâneo" inverso />
          <h2 className="font-display text-5xl leading-tight md:text-6xl">Exposições, oficinas e performances com pulso urbano.</h2>
          <p className="max-w-xl text-zinc-300">Uma plataforma cultural para descobrir artistas, acompanhar programação mensal e participar em atividades públicas.</p>
          <div className="flex gap-3">
            <button className="rounded-full bg-[#ff5a00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ff7a33]">Planear visita</button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-[#ff5a00]">Ver programação</button>
          </div>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
          alt="Evento cultural com público"
          className="h-[460px] w-full rounded-3xl object-cover"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <h3 className="font-display text-3xl">Programação do mês</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {programacaoMensal.map((evento, idx) => (
            <motion.article key={evento.titulo} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-[#ff5a00]/80">
              <p className="text-xs uppercase tracking-[0.16em] text-orange-300">{evento.data} · {evento.categoria}</p>
              <h4 className="mt-2 text-lg font-semibold">{evento.titulo}</h4>
              <p className="mt-2 text-sm text-zinc-300">{evento.descricao}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <h3 className="font-display text-3xl">Artistas</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {artistas.map((artista) => (
            <motion.article key={artista.nome} whileHover={{ y: -6 }} className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/80">
              <img src={artista.imagem} alt={artista.nome} className="h-60 w-full object-cover" />
              <div className="space-y-2 p-5">
                <h4 className="text-xl font-semibold">{artista.nome}</h4>
                <p className="text-xs uppercase tracking-[0.18em] text-orange-300">{artista.disciplina}</p>
                <p className="text-sm text-zinc-300">{artista.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h3 className="font-display text-3xl">Notícias e atividade recente</h3>
        <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img src={noticias[0].imagem} alt={noticias[0].titulo} className="h-72 w-full object-cover" />
            <div className="space-y-3 p-6">
              <h4 className="text-2xl font-semibold">{noticias[0].titulo}</h4>
              <p className="text-zinc-300">{noticias[0].excerto}</p>
            </div>
          </article>
          <div className="space-y-4">
            {noticias.slice(1).map((item) => (
              <article key={item.titulo} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <img src={item.imagem} alt={item.titulo} className="h-24 w-24 rounded-xl object-cover" />
                <div>
                  <h4 className="font-semibold">{item.titulo}</h4>
                  <p className="mt-1 text-sm text-zinc-300">{item.excerto}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
