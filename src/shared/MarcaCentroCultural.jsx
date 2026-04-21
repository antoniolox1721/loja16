import logo from '../assets/logotipo-centro-cultural.svg';

export function MarcaCentroCultural({ subtitulo = 'Centro Cultural', inverso = false }) {
  return (
    <div className="flex items-center gap-3">
      <img src={logo} alt="Logótipo do Centro Cultural" className="h-12 w-12 rounded-sm" />
      <div>
        <p className={`text-[11px] uppercase tracking-[0.22em] ${inverso ? 'text-orange-200' : 'text-zinc-500'}`}>Centro Cultural</p>
        <p className={`text-sm font-semibold ${inverso ? 'text-white' : 'text-zinc-900'}`}>{subtitulo}</p>
      </div>
    </div>
  );
}
