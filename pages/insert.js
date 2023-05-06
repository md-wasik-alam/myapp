import { Inter } from 'next/font/google'
import Link from 'next/link'
import PlayerCard from '@/components/PlayerCard'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })


export default function Insert() {
    const playerInitValues = {
        name:"",
        age:"",
        rank:"",
        nom:0
    }

    const [player, setPlayer] = useState(playerInitValues);

    const handleChange = (e) => {
        const name = e.target.name 
        const value = e.target.value
        setPlayer((prevPlayer) => ({...prevPlayer,[name]: value}))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        let data = await fetch("http://127.0.0.1:3000/api/PlayerApi",{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(player)
        })
        data = await data.json()
        //for testing 
        console.log(data.data)
        //for empty the form data 
        setPlayer(playerInitValues)
    }
  return (
    <main
      className={`flex min-h-screen w-full flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <section className='flex w-full'>
          <div className='w-3/6  mx-auto'>
            <h1 className='text-3xl font-black text-white'>All Players</h1>
            <div className='flex flex-col gap-2'>
                <form method="post" onSubmit={handleSubmit} className='flex flex-col gap-2 text-black'>
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' onChange={handleChange} value={player.name} className='border border-black py-2 px-3' />
                    <label htmlFor="">Age</label>
                    <input type="text" name='age' onChange={handleChange} value={player.age} className='border border-black py-2 px-3' />
                    <label htmlFor="">ODI Rank</label>
                    <input type="text" name='rank' onChange={handleChange} value={player.rank} className='border border-black py-2 px-3' />
                    <label htmlFor="">No of Matchs</label>
                    <input type="text" name='nom' onChange={handleChange} value={player.nom} className='border border-black py-2 px-3' />
                    <input type="submit" value="Create Player Record" className='bg-red-500 text-white rounded px-3 py-2' />
                </form>
            </div>
          </div>
      </section>
    </main>
  )
}
