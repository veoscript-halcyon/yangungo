import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface IProps {
  title: string
  subtitle: string
}

type ComponentProps = (props: IProps) => JSX.Element

const NavBar: ComponentProps = ({ title, subtitle }) => {

  const { pathname } = useRouter()

  return (
    <div className="flex flex-row items-center w-full">
      <div className="flex flex-col items-start w-full">
        <h2 className="font-bold text-base">{title}</h2>
        <h3 className="font-light text-sm">{subtitle}</h3>
      </div>
      <div className="flex flex-col items-end w-full">
        {pathname === '/'
          ? <div className="flex space-x-2">
              <Link
                href="/create"
                className="px-3 py-2 outline-none rounded-md text-sm bg-blue-500 transition-all ease-in-out duration-200 hover:bg-opacity-50"
              >
                Create Yangungo
              </Link>
              <Link
                href="/add-user"
                className="px-3 py-2 outline-none rounded-md text-sm bg-blue-500 transition-all ease-in-out duration-200 hover:bg-opacity-50"
              >
                Add User
              </Link>
            </div>
          : <Link
              href="/"
              className="px-3 py-2 outline-none rounded-md text-sm bg-neutral-500 transition-all ease-in-out duration-200 hover:bg-opacity-50"
            >
              Back
            </Link>
        }
      </div>
    </div>
  )
}

export default NavBar