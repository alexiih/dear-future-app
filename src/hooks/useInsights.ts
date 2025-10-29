"use client";

import { useEffect, useState } from "react";

type Insight = {
  id: string | number;
  headline: string;
  summary: string;
};

export function useInsights() {
  const [data, setData] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/insights");
        if (!res.ok) {
          throw new Error("Failed to load insights");
        }
        const payload = await res.json();
        setData(payload.data ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { data, loading, error };
}
