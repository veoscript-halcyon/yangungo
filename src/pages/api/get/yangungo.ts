import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/config/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const yangungo = await prisma.yangungo.findMany({
    orderBy: {
      id: 'desc'
    }
  })
  res.status(200).json(yangungo)
}