// File: src/components/ui/Onboarding/IdeaStep.tsx



interface Props {
  userIdea: string;
  onChange: (idea: string) => void;
}

export default function IdeaStep({ userIdea, onChange }: Props) {
  return (
    <div>
      <h2 className="text-xl mb-4">Add an Optional Idea</h2>
      <textarea
        className="w-full p-2 border rounded"
        value={userIdea}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write your idea here..."
      />
    </div>
  );
}