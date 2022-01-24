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
        const item = fakeItems.find(
          (item) => item.id == id
        );

        setTimeout(() => {
          res.status(200).json(item);
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
