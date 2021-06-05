// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Conditions from '../../types/Conditions';
import MOCK_DATA from "../../utils/mock";

export default (req: NextApiRequest, res: NextApiResponse<Conditions>) => {
    // Use mock data as response
    res.status(200).json(MOCK_DATA)
}
