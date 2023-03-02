import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/config/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const createYangungo = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.name
    }
  })
  res.status(200).json(createYangungo)
}