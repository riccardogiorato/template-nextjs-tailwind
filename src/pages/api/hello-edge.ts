import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  return new Response(
    JSON.stringify({
      userAddress: req.ip,
      country: req.geo?.country,
      latitude: req.geo?.latitude,
      longitude: req.geo?.longitude,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
