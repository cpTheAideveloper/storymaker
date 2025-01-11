// File: src/app/page.tsx

'use client';

import { useState } from 'react';
import GenreStep from '@/components/ui/Onboarding/GenreStep';
import AudienceStep from '@/components/ui/Onboarding/AudienceStep';
import IdeaStep from '@/components/ui/Onboarding/IdeaStep';
import Loading from '@/components/ui/Loading';
import { StoryOptions } from '@/types';
import FormatStep from '@/components/ui/Onboarding/FormatStep';
import StoryDisplay from '@/components/ui/StoryDisplay';

export default function Home() {
  const [step, setStep] = useState(1);
  const [options, setOptions] = useState<StoryOptions>({
    genre: 'Aventura',
    narrativeStyle: 'Narración en primera persona',
    audience: 'Niños (3-10)',
    userIdea: '',
  });
  const [story, setStory] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleGenerateStory = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/generate-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(options),
      });
      const data = await res.json();
      setStory(data.story);
      setStep(5);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    if (loading) return <Loading />;

    if (step === 1)
      return (
        <GenreStep
          selectedGenre={options.genre}
          onSelect={(genre) => setOptions({ ...options, genre })}
        />
      );
    if (step === 2)
      return (
        <FormatStep
          selectedStyle={options.narrativeStyle}
          onSelect={(style) => setOptions({ ...options, narrativeStyle: style })}
        />
      );
    if (step === 3)
      return (
        <AudienceStep
          selectedAudience={options.audience}
          onSelect={(audience) => setOptions({ ...options, audience })}
        />
      );
    if (step === 4)
      return (
        <IdeaStep
          userIdea={options.userIdea || ""}
          onChange={(idea) => setOptions({ ...options, userIdea: idea })}
        />
      );
    if (step === 5)
      return (
        <StoryDisplay
          story={story}
          onGenerateNew={() => {
            setOptions({
              genre: 'Aventura',
              narrativeStyle: 'Narración en primera persona',
              audience: 'Niños (3-10)',
              userIdea: '',
            });
            setStory('');
            setStep(1);
          }}
        />
      );
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    if (step === 4) handleGenerateStory();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {renderStep()}
        {step < 5 && (
          <button
            className="mt-4 w-full bg-blue-500 text-white p-2 rounded"
            onClick={handleNext}
          >
            {step === 4 ? 'Generate Story' : 'Next'}
          </button>
        )}
      </div>
    </div>
  );
}