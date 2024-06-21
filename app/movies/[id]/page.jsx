import Image from 'next/image';
import { getMovie } from '../../actions/getDataAction';
import React from 'react'

const MovieDetail = async (p) => {
    let res = [];
    try {
        res = await getMovie(p.params.id);
    } catch (error) {
        console.error(error);
    }
    return (
        <div className='flex items-center p-2 sm:p-8'>
            <div className="flex gap-3 flex-col w-auto sm:flex-row  border shadow-lg p-3">
                <Image className="object-cover rounded-t-lg h-96 w-96 md:rounded-none md:rounded-s-lg" src={res.poster ? res.poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"} alt={res.title} width={200} height={200} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {res.title}</h5>
                    <div className=' p-3 flex gap-3 border flex-wrap'><span className='font-bold'>Directors: </span> {
                        res.directors.map((item, index) =>
                            <div className='gap-3' key={index}> {item} </div>
                        )
                    }</div>
                    <div className=' p-3 flex gap-3 flex-wrap sm:w-4/12 border'><span className='font-bold'>Cast: </span> {
                        res.cast.map((item, index) =>
                            <div className='gap-3' key={index}> {item} </div>
                        )
                    }</div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  m-3">
                        {res.fullplot ? res.fullplot : res.plot}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 border sm:w-4/12 p-2  m-3">
                        <span className='font-bold'>Rating:</span> {res.imdb.rating} - <span className='font-bold'>Votes:</span> {res.imdb.votes}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 border sm:w-4/12 p-2   m-3">
                        <span className='font-bold'> Year:</span> {res.year} </p>
                </div>
            </div>
        </div>

    )
}

export default MovieDetail