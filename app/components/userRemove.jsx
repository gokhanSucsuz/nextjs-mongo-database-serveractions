'use client'

import { useEffect, useState } from "react";
import { removeUser } from "../actions/removeUser";
import { CiCircleRemove } from "react-icons/ci";

const UserRemove = (p) => {
    const [deleting, setDeleting] = useState(false)
    const handleClick = async () => {
        setDeleting(true)
        const result = await removeUser(p.id)
        setDeleting(false)
    }
    return (
        <button
            onClick={handleClick}
            disabled={deleting}
            className={`bg-red-400 hover:bg-red-600 text-white font-bold  p-2 rounded-md ${deleting ? 'bg-gray-100' : ''}`}>{
                deleting ? 'Removing...' : <CiCircleRemove />
            }</button>
    )
}
export default UserRemove
