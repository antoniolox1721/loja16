import { useMemo, useState } from 'react';
import { HomePageMinimal } from './templates/template-minimal/HomePage';
import { HomePageModerno } from './templates/template-moderno/HomePage';
import { HomePageImersivo } from './templates/template-imersivo/HomePage';

const templates = [
  {
    id: 'minimal',
    etiqueta: 'Template 1 · Minimalista',
    pasta: 'src/templates/template-minimal',
    descricao: 'Base editorial com movimento mínimo e máxima legibilidade.',
    componente: HomePageMinimal
  },
  {
    id: 'moderno',
    etiqueta: 'Template 2 · Moderno',
    pasta: 'src/templates/template-moderno',
    descricao: 'Mesmo layout-base com transições médias e feedback interativo.',
    componente: HomePageModerno
  },
  {
    id: 'imersivo',
    etiqueta: 'Template 3 · Imersivo',
    pasta: 'src/templates/template-imersivo',
    descricao: 'Estrutura idêntica com motion avançado e sensação flagship.',
    componente: HomePageImersivo
  }
];

export default function App() {
  const [ativo, setAtivo] = useState('minimal');
  const Selecionado = useMemo(() => templates.find((t) => t.id === ativo)?.componente ?? HomePageMinimal, [ativo]);

  return (
    <div className="min-h-screen bg-[#fffaf4] text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-orange-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-orange-500">Centro Cultural Loja16</p>
            <h1 className="font-display text-2xl text-zinc-900">3 templates com o mesmo ADN visual</h1>
          </div>
          <div className="grid gap-2 md:grid-cols-3">
            {templates.map((t) => (
              <button
                key={t.id}
                onClick={() => setAtivo(t.id)}
                className={`rounded-full border px-4 py-2 text-left text-xs transition ${
                  ativo === t.id
                    ? 'border-orange-500 bg-orange-500 text-white'
                    : 'border-orange-200 text-zinc-700 hover:border-orange-400 hover:text-zinc-900'
                }`}
              >
                {t.etiqueta}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="border-b border-orange-200 bg-[#fff7ed]">
        <div className="mx-auto max-w-7xl space-y-1 px-5 py-4 text-sm text-zinc-700">
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
