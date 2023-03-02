import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/config/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const createYangungo = await prisma.yangungo.create({
    data: {
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId
    }
  })
  res.status(200).json(createYangungo)
}