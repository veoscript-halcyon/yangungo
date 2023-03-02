import { useQuery } from '@tanstack/react-query'

export function useGetYangungo() {
  return useQuery(['yangungo'],
    async () => {
      const data = fetch('/api/get/yangungo')
      return (await data).json()
    },
    {
      onError: (error: any) => {
        console.error('ERROR GET YANGUNGO', error)
      }
    }
  )
}