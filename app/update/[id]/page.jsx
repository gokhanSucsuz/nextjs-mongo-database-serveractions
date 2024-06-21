
import React from 'react'
import Link from 'next/link'
import { getUser } from '../../actions/getDataAction'
import UserDetailComp from "../../components/userDetailComp"


const UserDetail = async (p) => {
    //const [user, setUser] = useState({})
    let user = {}
    try {
        user = await getUser(p.params.id);
    } catch (error) {
        console.error(error);
    }

    return (
        <>
            <UserDetailComp user={user} />
        </>

    )
}

export default UserDetail