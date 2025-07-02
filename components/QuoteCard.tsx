"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function QuoteCard() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  const fetchQuote = async () => {
    const res = await fetch("/api/quote");
    const data = await res.json();
    setQuote(data);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Card className="max-w-xl p-6 mx-auto text-center shadow-lg rounded-2xl bg-base-100">
      <CardContent>
        <p className="text-lg italic">{quote.text}</p>
        <p className="mt-2 font-semibold text-right">– {quote.author}</p>
        <Button onClick={fetchQuote} className="mt-4">New Quote</Button>
      </CardContent>
    </Card>
  );
}
