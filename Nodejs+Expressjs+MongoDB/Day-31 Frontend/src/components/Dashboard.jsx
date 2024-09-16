import React, { useEffect } from 'react';

const Dashboard = () => {
    const fetchData = async ()=>{
        try{
            const response = await fetch("http://localhost:3000/api/users")
            const data = await response.json();
            console.log(data);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div>
            <div className='w-[96%] mx-auto h-[69vh] bg-gray-100 rounded p-2'>
                <table>
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
                            users.map((user,i)=>{
                                return (
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{user.firstName + " " + user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address}</td>
                                        <td>{user.gender}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard