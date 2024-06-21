import React from 'react'
import { getAllUsers } from '../actions/getDataAction'
import UserList from "../components/userList"


const Users = async () => {
    const data = await getAllUsers()
    return (
        <main className="flex flex-col gap-4 min-h-screen p-8">
            <h1 className='text-3xl p-2 shadow-lg border text-white bg-blue-600 text-center font-bold'>Total users: {data.length}</h1>
            <ul className="w-full divide-y border p-3 divide-gray-200 dark:divide-gray-700">

                {data.map((item) => {
                    return (
                        <UserList {...item} key={item.id} />
                    )
                })}
            </ul>
        </main>
    );
}

export default Users
