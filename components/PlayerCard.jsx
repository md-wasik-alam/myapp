import React from 'react'

const PlayerCard = ({value}) => {
    return (
        <div className='flex w-full bg-black border border-white'>
            <div className='w-2/12'>
                {/* <Image width={20} height={20} src="https://picsum.photos/20/20" alt='img'/> */}
            </div>
            <div className='10/12'>
                <h1 className='text-lg font-semibold'>{value.name}</h1>
                <p className='text-sm'>Age: {value.age}</p>
                <p className='text-sm'>ODI RANK: {value.odi_rank}</p>
                <small className='text-slate-300'>No of Matchs: {value.no_of_matchs}</small>
            </div>
        </div>
    )
}

export default PlayerCard
