import type { OptimalSolution } from "@/types/OptimalSolution";

export async function optimization(
  monReq: number,
  tueReq: number,
  wedReq: number,
  thuReq: number,
  friReq: number,
  satReq: number,
  sunReq: number,
  x1Max: number | string,
  x2Max: number | string,
  x3Max: number | string,
  x4Max: number | string,
  x5Max: number | string,
  x6Max: number | string,
  x7Max: number | string,
): Promise<OptimalSolution | null> {
  const DATA_URL =
    process.env.NODE_ENV === "production"
      ? "https://simulation-api-rsaw.onrender.com/api/optimizations/staffing"
      : "http://localhost:8000/api/optimizations/staffing";
  const res = await fetch(DATA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      monReq,
      tueReq,
      wedReq,
      thuReq,
      friReq,
      satReq,
      sunReq,
      x1Max,
      x2Max,
      x3Max,
      x4Max,
      x5Max,
      x6Max,
      x7Max,
    }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data;
}

export default optimization;
