import QuoteCard from '@/components/QuoteCard';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6 bg-base-200">
      <h1 className="text-3xl font-bold mb-6">✨ InspireVerse ✨</h1>
      <QuoteCard />
    </main>
  );
}
