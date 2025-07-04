"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function QuoteCard() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [fade, setFade] = useState(false);

  const fetchQuote = async () => {
    setFade(true);
    setIsLoading(true);
    try {
      const res = await fetch("/api/quote");
      const data = await res.json();
      setTimeout(() => {
        setQuote(data);
        setFade(false);
        setIsLoading(false);
      }, 300); // Small delay for smooth transition
    } catch (error) {
      console.error("Failed to fetch quote:", error);
      setIsLoading(false);
      setFade(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Card className="max-w-xl p-8 mx-auto text-center shadow-xl rounded-2xl bg-base-100 dark:bg-gray-800 transition-all duration-300 hover:shadow-2xl">
      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 ml-auto animate-pulse mt-6"></div>
          </div>
        ) : (
          <div className={`transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}>
            <p className="text-xl md:text-2xl italic text-gray-800 dark:text-gray-200">
              {quote.text}
            </p>
            <p className="mt-4 text-lg font-medium text-right text-gray-600 dark:text-gray-400">
              – {quote.author || "Unknown"}
            </p>
          </div>
        )}
        <Button 
          onClick={fetchQuote} 
          className="mt-6 px-6 py-2 rounded-full bg-primary hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary transition-colors"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </span>
          ) : (
            "New Quote"
          )}
        </Button>
      </CardContent>
    </Card>
  );
}