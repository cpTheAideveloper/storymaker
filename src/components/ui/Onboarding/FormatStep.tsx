// File: src/components/ui/Onboarding/FormatStep.tsx

import { NarrativeStyle } from '@/types';

interface Props {
  selectedStyle: NarrativeStyle;
  onSelect: (style: NarrativeStyle) => void;
}

const styles: NarrativeStyle[] = [
  'Narración en primera persona',
  'Narración en tercera persona',
  'Estilo epistolar',
  'Flujo de conciencia',
  'Narración múltiple'
];

export default function FormatStep({ selectedStyle, onSelect }: Props) {
  return (
    <div>
      <h2 className="text-xl mb-4">Select the Narrative Style</h2>
      <div className="grid grid-cols-1 gap-2">
        {styles.map((style) => (
          <button
            key={style}
            className={`p-2 border rounded ${selectedStyle === style ? 'bg-green-500 text-white' : 'bg-white'}`}
            onClick={() => onSelect(style)}
          >
            {style}
          </button>
        ))}
      </div>
    </div>
  );
}