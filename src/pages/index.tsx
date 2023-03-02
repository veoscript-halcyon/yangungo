import React from 'react'
import MainLayout from '@/layouts/MainLayout'
import NavBar from '@/components/NavBar'
import Card from '@/components/Card'
import { YangungoProps } from '@/helpers/interfaces'
import { useGetYangungo } from '@/helpers/reactquery/queries/yangungo'

const Home = (): JSX.Element => {

  const { data: yangungos, isLoading } = useGetYangungo()

  return (
    <MainLayout>
      <div className="flex flex-col w-full max-w-xl space-y-10">
        <NavBar
          title="Yangungo sa kinabuhi"
          subtitle="Home Page"
        />
        <div className="flex flex-col w-full space-y-3">
          {isLoading
            ? <div className="flex flex-row items-center w-full">Loading...</div>
            : <>
                {yangungos.map((yangungo: YangungoProps, key: number) => (
                  <Card
                    key={key}
                    title={yangungo.title}
                    content={yangungo.content}
                  />
                ))}
              </>
          }
        </div>
      </div>
    </MainLayout>
  )
}

export default Home