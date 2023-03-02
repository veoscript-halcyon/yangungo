import React from 'react'

interface IProps {
  title: string
  content: string
}

type ComponentProps = (props: IProps) => JSX.Element

const Card: ComponentProps = ({ title, content }) => {
  return (
    <div className="flex flex-col w-full p-5 space-y-2 rounded-xl border border-neutral-800">
      <div className="flex w-full">
        <h1 className="font-bold">{title}</h1>
      </div>
      <div className="flex w-full">
        <p className="font-light text-sm">{content}</p>
      </div>
    </div>
  )
}

export default Card