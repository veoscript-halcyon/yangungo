import React from 'react'

interface IProps {
  children: React.ReactNode
}

type ComponentProps = (props: IProps) => JSX.Element

const MainLayout: ComponentProps = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full h-screen p-10 overflow-y-auto text-white bg-black">
      {children}
    </div>
  )
}

export default MainLayout