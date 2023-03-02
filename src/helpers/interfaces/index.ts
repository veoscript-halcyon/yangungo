export interface UsersProps {
  id: string
  name: string
  email: string
  yangungo: YangungoProps
}

export interface YangungoProps {
  id: string
  title: string
  content: string
  user: UsersProps
  userId: string
}