import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addYangungo } from '../effects/yangungo'


export const useAddYangungo = () => {
  const queryClient = useQueryClient()
  return useMutation((_args: { title: string, content: string, userId: string }) => 
    addYangungo({
      title: _args.title,
      content: _args.content,
      userId: _args.userId
    }),
    {
      onError: (error: Error) => {
        console.error('ERROR CREATE YANGUNGO', error)
      },
      onSuccess: () => {
        queryClient.invalidateQueries(['yangungo'])
      }
    }
  )
}