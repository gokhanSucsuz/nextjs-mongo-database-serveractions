import React from 'react'
import { getAllMovies } from '../actions/getDataAction';
import Image from 'next/image';
import Link from 'next/link';

const Movies = async () => {
    let res = [];
    try {
        res = await getAllMovies();
        console.log(res[0].plot);
    } catch (error) {
        console.error(error);
    }

    return (
        <>
            <h1 className='border bg-blue-600 text-white shadow-lg p-3 
            text-3xl font-bold text-center rounded mb-5'>Movies List</h1>
            <main className="flex flex-col items-center justify-between p-8">

                <div className="flex gap-3 flex-col">
                    {res?.map(item => (

                        <Link key={item._id} href={`/movies/${item._id}`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <Image className="object-cover w-full rounded-t-lg h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item.poster ? item.poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"} alt={item.title} width={300} height={300} />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {item.title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {item.plot}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main >
        </>

    )
}

export default Movies