import QuoteCard from '@/components/QuoteCard';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6 bg-gradient-to-br from-sky-50 via-blue-50 to-sky-50 dark:from-navy-900 dark:via-blue-900 dark:to-navy-900">
      <div className="w-full max-w-2xl mx-auto text-center space-y-8">
        {/* Enhanced Header */}
        <div className="space-y-4">
         <h1 className="text-5xl font-bold text-black dark:text-white drop-shadow-sm">
         💙InspireVerse💙
          </h1>
          <p className="text-lg text-navy-700 dark:text-blue-200 font-medium">
            Your daily source of inspiration
          </p>
        </div>

        {/* Quote Card with enhanced animation */}
        <div className="transition-all duration-500 hover:opacity-95 hover:scale-[1.02] hover:rotate-1">
          <QuoteCard />
        </div>

        {/* Enhanced Footer */}
        <footer className="space-y-2">
          <div className="flex justify-center items-center space-x-2 text-sm text-navy-600 dark:text-blue-300">
            <span className="animate-pulse">🌊</span>
            <p className="font-medium">Click New Quote for more wisdom</p>
            <span className="animate-pulse">✨</span>
          </div>
          <div className="flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-blue-600 to-navy-600 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}