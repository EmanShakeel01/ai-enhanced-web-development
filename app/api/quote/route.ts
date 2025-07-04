export async function GET() {
  const quotes = [
    { text: "Push yourself, because no one else is going to do it for you" },
    { text: "The best time to start was yesterday. The next best time is now."},
    { text: "Success doesn’t just find you. You have to go out and get it." },
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return new Response(JSON.stringify(randomQuote), {
    headers: { "Content-Type": "application/json" },
  });
}
