import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body, query } = req;

  let apiUrl = `http://localhost:8080/api${req.url}`;
  if (query.id) {
    apiUrl = `http://localhost:8080/api/services/${query.id}`;
  }

  const response = await fetch(apiUrl, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: method === "GET" ? null : JSON.stringify(body),
  });

  const data: any = await response.json();

  res.status(response.status).json(data);
}
