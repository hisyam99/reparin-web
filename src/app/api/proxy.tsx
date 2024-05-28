import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  // Jika metode adalah POST dan URL adalah /api/register, meneruskan ke backend Go
  if (method === "POST" && req.url === "/register") {
    try {
      const response = await fetch("http://localhost:8080/api/users/register", { // Ubah URL endpoint ke /api/users/register
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data: any = await response.json();

      // Mengirim respons dari backend Go kembali ke frontend
      res.status(response.status).json(data);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(404).json({ message: "Not Found" });
  }
}
