// File: src/components/ui/StoryDisplay.tsx

interface Props {
    story: string;
    onGenerateNew: () => void;
  }
  
  export default function StoryDisplay({ story, onGenerateNew }: Props) {
    return (
      <div className="relative p-4">
        <div className="prose max-w-none">{story}</div>
        <button
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
          onClick={onGenerateNew}
        >
          New Story
        </button>
      </div>
    );
  }