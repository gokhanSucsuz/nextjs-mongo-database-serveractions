import React from 'react'
import { getAllUsers } from '../actions/getDataAction'
import Image from 'next/image';

const Users = async () => {
    let users = [];
    try {
        users = await getAllUsers();

    } catch (error) {
        console.error(error);
    }

    return (
        <>
            <h1 className='border bg-blue-600 text-white shadow-lg p-3 text-3xl font-bold text-center rounded '>User Info List</h1>
            {
                users?.map((user, index) =>
                    <div key={index} className={`${index % 2 === 0 ? "bg-slate-200" : ""} p-4 border m-5 rounded-md gap-2`}>
                        <dl className="flex flex-wrap justify-between overflow-hidden text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">

                            <Image className='m-3' style={{}} src={`https://ui-avatars.com/api/?name=${user.name}`} alt={user.name} width={100} height={100} />


                            <div className="flex flex-col pb-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                    Email address</dt>
                                <dd className="text-lg font-semibold">{user.email}</dd>
                            </div>
                            <div className="flex flex-col py-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                    User
                                </dt>
                                <dd className="text-lg font-semibold">

                                    {user.name}</dd>
                            </div>
                            <div className="flex flex-col pt-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                    Password
                                </dt>
                                <dd className="text-lg font-semibold min-h-20 overflow-hidden md:overflow-visible">
                                    {user.password}
                                </dd>
                            </div>


                        </dl>
                    </div>
                )
            }
        </>
    )
}

export default Users