import { useMemo, useState } from 'react';
import { HomePageMinimal } from './templates/template-minimal/HomePage';
import { HomePageModerno } from './templates/template-moderno/HomePage';
import { HomePageImersivo } from './templates/template-imersivo/HomePage';

const templates = [
  {
    id: 'minimal',
    etiqueta: 'Template 1 · Minimalista',
    pasta: 'src/templates/template-minimal',
    descricao: 'Visual editorial elegante, com micro-interações subtis e muita respiração.',
    componente: HomePageMinimal
  },
  {
    id: 'moderno',
    etiqueta: 'Template 2 · Moderno',
    pasta: 'src/templates/template-moderno',
    descricao: 'Direção contemporânea com animações médias, equilíbrio e leitura clara.',
    componente: HomePageModerno
  },
  {
    id: 'imersivo',
    etiqueta: 'Template 3 · Imersivo',
    pasta: 'src/templates/template-imersivo',
    descricao: 'Experiência flagship com narrativa visual forte e movimento avançado.',
    componente: HomePageImersivo
  }
];

export default function App() {
  const [ativo, setAtivo] = useState('minimal');
  const Selecionado = useMemo(() => templates.find((t) => t.id === ativo)?.componente ?? HomePageMinimal, [ativo]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Estudo de Homepage · Centro Cultural</p>
            <h1 className="font-display text-2xl text-white">3 templates em diretórios distintos</h1>
          </div>
          <div className="grid gap-2 md:grid-cols-3">
            {templates.map((t) => (
              <button
                key={t.id}
                onClick={() => setAtivo(t.id)}
                className={`rounded-full border px-4 py-2 text-left text-xs transition ${
                  ativo === t.id
                    ? 'border-orange-300 bg-orange-200/10 text-orange-200'
                    : 'border-white/20 text-zinc-300 hover:border-orange-200/70 hover:text-white'
                }`}
              >
                {t.etiqueta}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="border-b border-white/10 bg-zinc-900/60">
        <div className="mx-auto max-w-7xl space-y-1 px-5 py-4 text-sm text-zinc-300">
          <p>{templates.find((t) => t.id === ativo)?.descricao}</p>
          <p className="text-xs text-zinc-500">Diretório: {templates.find((t) => t.id === ativo)?.pasta}</p>
        </div>
      </section>

      <main>
        <Selecionado />
      </main>
    </div>
  );
}
