import { create } from 'zustand'

interface UserStoreProps {
  name: string
  email: string
  setName: (value: string) => void
  setEmail: (value: string) => void
  setDefault: () => void
}

interface YangungoStoreProps {
  title: string
  content: string
  userId: string
  setTitle: (value: string) => void
  setContent: (value: string) => void
  setUserId: (value: string) => void
  setDefault: () => void
}

export const userStore = create<UserStoreProps>(set => ({
  name: '',
  email: '',
  setName: (value: string) => set(() => ({ name: value })),
  setEmail: (value: string) => set(() => ({ email: value })),
  setDefault: () => set(() => ({
    name: '',
    email: ''
  }))
}))

export const yangungoStore = create<YangungoStoreProps>(set => ({
  title: '',
  content: '',
  userId: '',
  setTitle: (value: string) => set(() => ({ title: value })),
  setContent: (value: string) => set(() => ({ content: value })),
  setUserId: (value: string) => set(() => ({ userId: value })),
  setDefault: () => set(() => ({
    title: '',
    content: '',
    userId: '',
    isComplete: false
  })),
}))