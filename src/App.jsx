import { useMemo, useState } from 'react';
import { MinimalTemplate } from './components/MinimalTemplate';
import { ModernTemplate } from './components/ModernTemplate';
import { ImmersiveTemplate } from './components/ImmersiveTemplate';

const templates = [
  {
    id: 'minimal',
    label: 'Template 1 · Minimalistic Chic',
    description: 'Quiet luxury editorial layout with restrained micro-interactions.',
    component: MinimalTemplate
  },
  {
    id: 'modern',
    label: 'Template 2 · Modern Animated',
    description: 'Balanced interaction with smooth transitions and clear hierarchy.',
    component: ModernTemplate
  },
  {
    id: 'immersive',
    label: 'Template 3 · Bold Immersive',
    description: 'Flagship visual narrative with layered motion and art direction.',
    component: ImmersiveTemplate
  }
];

export default function App() {
  const [active, setActive] = useState('minimal');
  const Selected = useMemo(() => templates.find((t) => t.id === active)?.component ?? MinimalTemplate, [active]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Cultural Center Homepage Study</p>
            <h1 className="font-display text-2xl text-white">Three Distinct Website Directions</h1>
          </div>
          <div className="grid gap-2 md:grid-cols-3">
            {templates.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`rounded-full border px-4 py-2 text-left text-xs transition ${
                  active === t.id
                    ? 'border-amber-300 bg-amber-200/10 text-amber-200'
                    : 'border-white/20 text-zinc-300 hover:border-amber-200/70 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="border-b border-white/10 bg-zinc-900/60">
        <div className="mx-auto max-w-7xl px-5 py-4 text-sm text-zinc-300">
          {templates.find((t) => t.id === active)?.description}
        </div>
      </section>

      <main>
        <Selected />
      </main>
    </div>
  );
}
