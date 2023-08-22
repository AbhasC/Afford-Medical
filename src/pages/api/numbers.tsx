import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const urls = req.query?.url ?? [];
  const numbers: number[] = [];
  console.log(urls);
  for (let url of urls) {
    try {
      const rawData = await axios.get(url, { timeout: 100 }).catch(() => {});
      const data = rawData?.data;
      const nums: number[] = data?.numbers ?? [];
      numbers.push(...nums);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
  }
  try {
    const set = new Set(numbers);
    const arr = Array.from(set).sort((a, b) => a - b);
    res.status(200).json({ numbers: arr });
    return;
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
}
