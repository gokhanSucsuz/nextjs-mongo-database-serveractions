import Link from "next/link";
import UserRemove from "./userRemove";
import { FaEdit } from "react-icons/fa";

const UserList = (p) => {
    return (

        <li className="pb-3 sm:pb-4 pt-2">
            <div className="flex flex-col sm:flex-row flex-wrap  overflow-hidden space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full"
                        src={`https://ui-avatars.com/api/?name=${p.name.charAt(0)}`}
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {p.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {p.email}
                    </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {p.password.slice(0, 8)}
                </div>
                <div className='flex gap-4'>
                    <Link href={`/update/${p.id}`}
                        className={`bg-orange-400 hover:bg-orange-600 flex items-center text-white font-bold p-2 rounded-md`}>
                        <FaEdit />
                    </Link>
                    <UserRemove id={p.id} />
                </div>
            </div>
        </li>


    )
}
export default UserList
