import { NextApiRequest, NextApiResponse } from "next";
import { Item, PaginatedResponse } from "../../../interfaces";
import fakeItems from "../../../utils/temp/items.json";

const fakeItems2 = fakeItems.slice(0, 53);

const handler = async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const {
    query: { skip = 0, limit = 20 },
    method,
  } = _req;

  const _skip = Number(skip);
  const _limit = Number(limit);

  switch (method) {
    case "GET": {
      try {
        const filtered: Item[] = fakeItems2.map((i, index)=>({...i, name: i.name + " - " + index}))
          .sort((a, b) => a.favorites - b.favorites)
          .slice(Number(skip), Number(skip) + Number(limit));

        const result: PaginatedResponse<Item[]> = {
          skip: _skip,
          limit: _limit,
          total: fakeItems.length,
          count: filtered.length,
          data: filtered,
        };

        setTimeout(() => {
          res.status(200).json(result);
        }, 1000);
      } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
      }
      break;
    }
    default: {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
};

export default handler;
