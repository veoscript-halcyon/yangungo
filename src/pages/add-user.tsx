import React from 'react'
import Router from 'next/router'
import MainLayout from '@/layouts/MainLayout'
import NavBar from '@/components/NavBar'
import { userStore } from '@/helpers/zustand/store'
import { useAddUser } from '@/helpers/reactquery/mutations/user'

const AddUser = (): JSX.Element => {

  const { name, email, setName, setEmail, setDefault } = userStore()

  const addUser = useAddUser()

  const handleAddUser = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    await addUser.mutateAsync({
      name,
      email
    },
    {
      onSuccess: () => {
        setDefault()
        Router.push('/')
      }
    })
  }

  return (
    <MainLayout>
      <div className="flex flex-col w-full max-w-xl space-y-10">
        <NavBar
          title="Yangungo sa kinabuhi"
          subtitle="Add User"
        />
        <form onSubmit={() => handleAddUser} className="flex flex-col w-full space-y-2">
          <div className="flex flex-col w-full space-y-1">
            <label htmlFor="name" className="ml-1 font-light text-sm">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              className="w-full px-3 py-2 outline-none rounded-xl border border-neutral-700 focus:border-blue-500 bg-transparent"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full space-y-1">
            <label htmlFor="email" className="ml-1 font-light text-sm">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              className="w-full px-3 py-2 outline-none rounded-xl border border-neutral-700 focus:border-blue-500 bg-transparent"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            disabled={name === '' || email === ''}
            className={`px-3 py-3 outline-none rounded-xl text-sm bg-blue-500 transition-all ease-in-out duration-200 hover:bg-opacity-50 ${(name === '' || email === '') && 'cursor-not-allowed opacity-50'}`}
            onClick={handleAddUser}
          >
            Submit
          </button>
        </form>
      </div>
    </MainLayout>
  )
}

export default AddUser