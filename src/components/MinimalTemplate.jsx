import { artists, news, programming } from './content';

export function MinimalTemplate() {
  return (
    <div className="bg-stone-50 text-stone-900">
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">NOVA CULTURAL CENTER</p>
          <h2 className="max-w-xl font-display text-5xl leading-tight md:text-6xl">Where contemporary art meets community memory.</h2>
          <p className="max-w-lg text-stone-600">
            Nova is a civic home for exhibitions, live culture, and monthly programming shaped by artists, scholars, and neighbors.
          </p>
          <button className="rounded-full border border-stone-900 px-6 py-3 text-sm transition hover:-translate-y-0.5 hover:bg-stone-900 hover:text-stone-50">
            Explore Current Exhibitions
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
          alt="Visitors exploring a contemporary exhibition hall"
          className="h-[420px] w-full rounded-sm object-cover shadow-soft"
        />
      </section>

      <section className="mx-auto max-w-7xl border-y border-stone-200 px-6 py-14">
        <h3 className="font-display text-3xl">Latest Exhibitions & Highlights</h3>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {news.map((item) => (
            <article key={item.title} className="group space-y-3">
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover transition group-hover:opacity-90" />
              <h4 className="font-display text-2xl">{item.title}</h4>
              <p className="text-sm text-stone-600">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8 flex items-end justify-between">
          <h3 className="font-display text-3xl">Resident Artists</h3>
          <a href="#" className="text-sm text-stone-600 underline-offset-4 hover:underline">View full directory</a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {artists.map((artist) => (
            <article key={artist.name} className="space-y-4 border border-stone-200 p-4">
              <img src={artist.image} alt={artist.name} className="h-64 w-full object-cover" />
              <div>
                <h4 className="font-display text-2xl">{artist.name}</h4>
                <p className="text-xs uppercase tracking-[0.18em] text-stone-500">{artist.discipline}</p>
              </div>
              <p className="text-sm text-stone-600">{artist.bio}</p>
              <button className="text-sm underline underline-offset-4">Read profile</button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h3 className="font-display text-3xl">Monthly Programming · May</h3>
        <div className="mt-6 overflow-hidden border border-stone-200">
          {programming.map((item) => (
            <div key={item.title} className="grid gap-3 border-b border-stone-200 p-4 last:border-none md:grid-cols-[100px_180px_1fr]">
              <p className="font-medium">{item.date}</p>
              <p className="text-sm uppercase tracking-[0.12em] text-stone-500">{item.category}</p>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-stone-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
