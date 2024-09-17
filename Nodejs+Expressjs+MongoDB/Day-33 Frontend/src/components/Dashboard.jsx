import React, { useEffect, useState } from 'react'
import UserForm from './UserForm';

const Dashboard = () => {
    const [users ,setUsers] = useState([]);
    const [isAddUser , setIsAddUser] = useState(false);
    const fetchData = async ()=>{
        try {
            const response = await fetch("http://localhost:3000/api/users");
            const data = await response.json();
            console.log(data.data);
            setUsers(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        fetchData();
    },[]);

    console.log(isAddUser)

  return (
    <div>
        <div className='flex justify-between items-center m-5'>
            <div>
                <h1 className='text-2xl font-medium text-gray-100'>
                    {isAddUser ?  "Add User" : "Users"}
                </h1>
            </div>
            <div>
                {
                    isAddUser ? <button className='p-2 text-gray-100 border border-gray-100 hover:bg-gray-100 hover:text-gray-800 font-medium transition ease-in-out ' onClick={()=>{
                        setIsAddUser(false);
                    }}>X</button> : 
                    <button className='p-2 text-gray-100 border border-gray-100 hover:bg-gray-100 hover:text-gray-800 font-medium transition ease-in-out ' onClick={()=>{
                        setIsAddUser(true);
                    }}>Add User</button>
                }
            </div>
        </div>
        <div className='w-[96%] mx-auto h-[69vh] bg-slate-300 rounded overflow-auto'>
           {
            isAddUser ? <UserForm  setIsAddUser={setIsAddUser} fetchData={fetchData} /> : 
            (
                <table className='text-gray-800 mx-auto w-full border-separate border-spacing-y-3 border-separate-x-2'>
                <thead>
                    <tr>
                        <th>
                            S.No.
                        </th>
                        <th>
                           Full Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Address
                        </th>
                        <th>
                            Gender
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user , i)=>{
                            return (
                                <tr className='text-center' key={i}>
                                    <td>{i+1}</td>
                                    <td>{user.firstName + " " +  user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>{user.gender}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            )
           }
        </div>
    </div>
  )
}

export default Dashboard