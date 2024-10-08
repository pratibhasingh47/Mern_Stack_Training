import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";
import { logOut } from '../redux/slices/authSlice';

const Navbar = () => {
    const { isAuth, role } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut());
    }

    return (
        <div className='flex h-28 justify-between items-center bg-sky-950 px-6 py-4 w-full'>
            <div className='text-white text-2xl font-medium'>
            <Link to="/">logo</Link>
            </div>
            <div className='w-[60%]'>
                <input type="text" placeholder='Search...' className='p-2 py-1 h-12 w-[100%] border border-gray-100 bg-slate-50 text-white outline-none' />
            </div>
            <div className='flex gap-5 text-xl items-center'>
                {
                    isAuth
                        ?
                        (
                            role === "User"
                                ?
                                (
                                    <div className='flex gap-5 text-white'>
                                        <Link to="/cart">Cart</Link>
                                        <Link to="/myorder">My-Orders</Link>
                                        <Link to="/profile">Profile</Link>
                                    </div>
                                )
                                :
                                (
                                    <div className='flex gap-5 text-white'>
                                        <Link to="/dashboard">Dashboard</Link>
                                        <Link to="/adminUser">Users</Link>
                                        <Link to="/adminProduct">Products</Link>
                                        <Link to="/adminOrder">Orders</Link>
                                        <Link to="/profile">Profile</Link>
                                    </div>
                                )
                        )
                        :
                        (
                            <div className='flex gap-5 text-white'>
                                <Link to="/cart">Cart</Link>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Signup</Link>
                            </div>
                        )
                }
                {isAuth && (
                    <button className='text-xl text-white' onClick={handleLogOut}><FiLogOut /></button>
                )}
            </div>

        </div>
    )
}

export default Navbar