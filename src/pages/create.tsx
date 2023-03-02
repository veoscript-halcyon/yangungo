import React from 'react'
import Router from 'next/router'
import MainLayout from '@/layouts/MainLayout'
import NavBar from '@/components/NavBar'
import { UsersProps } from '@/helpers/interfaces'
import { yangungoStore } from '@/helpers/zustand/store'
import { useGetUsers } from '@/helpers/reactquery/queries/users'
import { useAddYangungo } from '@/helpers/reactquery/mutations/yangungo'

const Create = (): JSX.Element => {

  const { title, content, userId, setTitle, setContent, setUserId, setDefault } = yangungoStore()

  const { data: users, isSuccess } = useGetUsers()

  const addYangungo = useAddYangungo()

  const handleOnCreateYangungo = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    await addYangungo.mutateAsync({
      title,
      content,
      userId
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
          subtitle="Create Yangungo"
        />
        <form onSubmit={() => handleOnCreateYangungo} className="flex flex-col w-full space-y-2">
          <div className="flex flex-col w-full space-y-1">
            <label htmlFor="title" className="ml-1 font-light text-sm">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              className="w-full px-3 py-2 outline-none rounded-xl border border-neutral-700 focus:border-blue-500 bg-transparent"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full space-y-1">
            <label htmlFor="content" className="ml-1 font-light text-sm">Content</label>
            <textarea
              id="content"
              value={content}
              className="w-full px-3 py-2 outline-none rounded-xl border border-neutral-700 focus:border-blue-500 bg-transparent"
              cols={30}
              rows={10}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full space-y-1">
            <label htmlFor="content" className="ml-1 font-light text-sm">Author</label>
            <select
              className="w-full px-5 py-2 cursor-pointer appearance-none outline-none rounded-xl border border-neutral-700 focus:border-blue-500 bg-transparent"
              onChange={(e) => setUserId(e.target.value)}
            >
              <option className="text-white bg-black" value="">-- --</option>
              {isSuccess && users.map((user: UsersProps, key: number) => (
                <option 
                  key={key} 
                  value={user.id}
                  className="text-white bg-black"
                >
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <button
            disabled={title === '' || content === '' || userId === ''}
            className={`px-3 py-3 outline-none rounded-xl text-sm bg-blue-500 transition-all ease-in-out duration-200 hover:bg-opacity-50 ${(title === '' || content === '' || userId === '') && 'cursor-not-allowed opacity-50'}`}
            onClick={handleOnCreateYangungo}
          >
            Submit
          </button>
        </form>
      </div>
    </MainLayout>
  )
}

export default Create