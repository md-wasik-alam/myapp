import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import PlayerCard from '@/components/PlayerCard'
const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps (){
      let PlayerData = await fetch(process.env.PLAYER_API)
      PlayerData = await PlayerData.json()
      
      return {
        props:{
           values:PlayerData
        }
      }
}

export default function Home({values}) {
  return (
    <main
      className={`flex min-h-screen w-full flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <section className='flex w-full'>
          <div className='w-3/6  mx-auto'>
            <h1 className='text-3xl font-black text-white'>All Players</h1>
            <div className='flex flex-col gap-2'>
              {
                values.data.map((value, key) => (
                  <PlayerCard value={value} key={key}/>
                ))
              }
            </div>
          </div>
      </section>
    </main>
  )
}
