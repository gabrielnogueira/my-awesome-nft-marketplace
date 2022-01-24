import { NextApiRequest, NextApiResponse } from "next";
import { Item, PaginatedResponse } from "../../../../interfaces";
import fakeItems from "../../../../utils/temp/items.json";

const handler = async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const {
    query: { id = -1, skip = 0, limit = 20 },
    method,
  } = _req;

  const _skip = Number(skip);
  const _limit = Number(limit);

  switch (method) {
    case "GET": {
      try {
        const collectionId = fakeItems.find(
          (item) => item.id == id
        )?.collectionId;

        const filtered: Item[] = fakeItems
          .filter((item) => item.collectionId == collectionId)
          .slice(Number(skip), Number(skip) + Number(limit));

        const result: PaginatedResponse<Item[]> = {
          skip: _skip,
          limit: _limit,
          total: fakeItems.length,
          count: filtered.length,
          data: filtered,
        };

        res.status(200).json(result);
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
