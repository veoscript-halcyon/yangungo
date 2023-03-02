import { useQuery } from '@tanstack/react-query'

export function useGetUsers() {
  return useQuery(['users'],
    async () => {
      const data = fetch('/api/get/users')
      return (await data).json()
    },
    {
      onError: (error: any) => {
        console.error('ERROR GET USERS', error)
      }
    }
  )
}