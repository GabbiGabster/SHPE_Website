import type { Handler } from "@netlify/functions";

const RATE_LIMIT = 100;
const WINDOW_MS = 60_000;
const requestCounts = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(clientId: string): boolean {
  const now = Date.now();
  const entry = requestCounts.get(clientId);

  if (!entry || now > entry.resetAt) {
    requestCounts.set(clientId, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const handler: Handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { status: 204, headers: corsHeaders, body: "" };
  }

  const clientId =
    event.headers["x-forwarded-for"]?.split(",")[0]?.trim() ??
    event.headers["client-ip"] ??
    "unknown";

  if (isRateLimited(clientId)) {
    return {
      status: 429,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
        "Retry-After": "60",
      },
      body: JSON.stringify({ error: "Too many requests. Please try again later." }),
    };
  }

  return {
    status: 200,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
    body: JSON.stringify({ status: "ok", timestamp: new Date().toISOString() }),
  };
};
