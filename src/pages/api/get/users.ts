import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/config/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const users = await prisma.user.findMany()
  res.status(200).json(users)
}