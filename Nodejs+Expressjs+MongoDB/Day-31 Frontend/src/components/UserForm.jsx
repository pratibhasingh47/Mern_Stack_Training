import React from 'react'

const UserForm = () => {
    return (
        <div>
            <form action="">
                <div>
                    <div>
                        <p className='text-gray-700 m-2'>
                            FirstName
                        </p>
                        <input type="text" placeholder='First Name' className='p-2 bg-transparent border border-gray-700 rounded shadow w-4/5' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserForm