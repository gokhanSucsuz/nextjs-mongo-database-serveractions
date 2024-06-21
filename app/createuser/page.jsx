"use client"
import React, { useState } from 'react'
import { addUser } from '../actions/addUserAction'
import Link from 'next/link'

const CreateUser = () => {
    const [adding, setAdding] = useState(false)
    const [isError, setIsError] = useState(false)

    const handleAction = async (formData) => {
        const res = await addUser(formData)
        if (res) {
            console.log(res)
            setIsError(res)
            setAdding(false)
        }
        else {
            setIsError(false)
            setAdding(false)
        }
    }
    const handleClick = () => {
        setAdding(true)
        setIsError(false)
    }
    return (
        <div className=' p-10 border max-w-lg mx-auto my-20 shadow-lg rounded-lg'>
            <form className="max-w-sm mx-auto" action={handleAction}>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input name='email' type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@mail.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input name='userName' type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input name='password' type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className='flex justify-between'>
                    <button onClick={handleClick} type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Save</button>
                    <Link href="/users" className='bg-red-500 hover:bg-red-700 text-white p-2.5 rounded-md mx-2'>Cancel</Link>
                </div>
            </form>
            <div
                className={`text-green-500 font-bold my-4 p-2 rounded-md ${adding ? "" : "hidden"}`}> New User Saving...</div>
            <div
                className={`text-red-500 font-bold my-4 p-2 rounded-md ${isError ? "" : "hidden"}`}> This user email is already registered! Please enter new email! </div>
        </div>

    )
}

export default CreateUser