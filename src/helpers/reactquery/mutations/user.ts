import { useMutation } from '@tanstack/react-query'
import { addUser } from '../effects/user'


export const useAddUser = () => {
  return useMutation((_args: { name: string, email: string }) => 
    addUser({
      name: _args.name,
      email: _args.email
    }),
    {
      onError: (error: Error) => {
        console.error('ERROR CREATE USER', error)
      }
    }
  )
}