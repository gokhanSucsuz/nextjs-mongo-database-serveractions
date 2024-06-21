
import React from 'react'
import { getUser } from '../../actions/getDataAction'
import UserDetailComp from "../../components/userDetailComp"

const UserDetail = async (p) => {
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