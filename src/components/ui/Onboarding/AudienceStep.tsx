// File: src/components/ui/Onboarding/AudienceStep.tsx

import { Audience } from '@/types';

interface Props {
  selectedAudience: Audience;
  onSelect: (audience: Audience) => void;
}

const audiences: Audience[] = [
  'Niños (3-10)',
  'Jóvenes (12-17)',
  'Adultos (18+)'
];

export default function AudienceStep({ selectedAudience, onSelect }: Props) {
  return (
    <div>
      <h2 className="text-xl mb-4">Select the Audience</h2>
      <div className="grid grid-cols-1 gap-2">
        {audiences.map((audience) => (
          <button
            key={audience}
            className={`p-2 border rounded ${selectedAudience === audience ? 'bg-purple-500 text-white' : 'bg-white'}`}
            onClick={() => onSelect(audience)}
          >
            {audience}
          </button>
        ))}
      </div>
    </div>
  );
}