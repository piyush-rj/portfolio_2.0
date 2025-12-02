import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://wakatime.com/api/v1/users/current/summaries?range=Today",
    {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.WAKATIME_API_KEY || "").toString("base64")}`
      }
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}
