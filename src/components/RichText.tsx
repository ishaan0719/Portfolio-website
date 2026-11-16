// Renders "**text**" segments from content.ts as accent-coloured highlights.
export function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="text-accent font-semibold">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
