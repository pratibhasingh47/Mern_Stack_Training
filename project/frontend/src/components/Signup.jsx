import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { z } from 'zod';
import { signup } from '../redux/slices/authSlice';

const Signup = () => {
    const validationSchema = z.object({
        "name": z.string().min(1, "Name is required"),
        "email": z.string().min(1, "Email is required").email("Invalid Email"),
        "password": z.string()
            .min(8, "Password must be of at least 8 letters")
            .regex(/[a-z]/, "Password must contain atleast 1 lowercase letter")
            .regex(/[A-Z]/, "Password must contain atleast 1 uppercase letter")
            .regex(/[0-9]/, "Password must contain atleast 1 Number")
            .regex(/[\W_]/, "Password must contain atlest 1 special charater"),
        "phoneNumber": z.string().min(10, "Phone number must contain 10 numbers").max(10, "Phone number must contain 10 numbers")
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(validationSchema)
    });


    const dispatch = useDispatch();
    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:5000/api/auth/google";
    }

    const onSubmit = async (data) => {
        dispatch(signup(data));
    }

    return (
        <div className='w-4/5 h-4/5 flex justify-center items-center bg-white shadow-2xl rounded'>
            
            <div className='w-1/2'>
                <img src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="" className='w-full' />
            </div>

            <div className='w-1/2 flex flex-col gap-8'>

                <h1 className='text-3xl text-blue-500 font-semibold text-center'>Welcome ! Sign-In</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='grid grid-cols-2 gap-3'>

                        <div>
                            <label className='text-blue-500 font-medium'>Name</label>
                            <br />
                            <input type="text" className={`p-2 border w-[90%] my-2 rounded shadow-xl ${errors.name ? "border-red-500 outline-none" : "border-gray-500 outline-blue-500"}`} {...register("name")} />
                            {errors.name && (
                                <p className='text-xs text-red-500'>{errors.name.message}</p>
                            )}
                        </div>

                        <div>
                            <label className='text-blue-500 font-medium'>Email</label>
                            <br />
                            <input type="email" className={`p-2 border   w-[90%] my-2 rounded shadow-xl ${errors.email ? "border-red-500 outline-none" : "border-gray-500 outline-blue-500"}`} {...register("email")} />
                            {errors.email && (
                                <p className='text-xs text-red-500'>{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label className='text-blue-500 font-medium'>Password</label>
                            <input type="password" className={`p-2 border w-[90%] my-2 rounded shadow-xl ${errors.password ? "border-red-500 outline-none" : "border-gray-500 outline-blue-500"}`} {...register("password")} />
                            {errors.password && (
                                <p className='text-xs text-red-500'>{errors.password.message}</p>
                            )}
                        </div>

                        <div>
                            <label className='text-blue-500 font-medium'>Phone Number</label>
                            <input type="number" className={`p-2 border w-[90%] my-2 rounded shadow-xl ${errors.phoneNumber ? "border-red-500 outline-none" : "border-gray-500 outline-blue-500"}`}   {...register("phoneNumber")} />
                            {errors.phoneNumber && (
                                <p className='text-xs text-red-500'>{errors.phoneNumber.message}</p>
                            )}
                        </div>

                    </div>

                    <button className='bg-blue-500 my-5 text-white font-medium p-2 w-[95%] shadow-xl rounded active:bg-blue-600'>Sign-Up</button>
                </form>

                <button className='bg-red-500 my-5 text-white font-medium p-2 w-[90%] shadow-xl w-\[95\%] rounded active:bg-blue-600' onClick={handleGoogleLogin}>Log-In- With Google</button>

            </div>
            
        </div>
    )
}

export default Signup



// import { zodResolver } from '@hookform/resolvers/zod';
// import React, { useState } from 'react'
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';

// const Signup = () => {

//     const [formData, setFormData] = useState({});

//     const validationSchema = z.object({
//         "name": z.string().min(3, "Name must contain 3 letters"),
//         "email": z.string().min(1, "Email is required").email("Invalid email"),
//         "password": z.string()
//             .min(8, "Password must contain atleast 8 letters")
//             .regex(/[a-z]/, "Password must contain 1 lowercase")
//             .regex(/[A-Z]/, "Password must contain 1 uppercase")
//             .regex(/[0-9]/, "Password must contain 1 number")
//             .regex(/[\W_]/, "Password must contain 1 special character")
//     })

//     const { register, handleSubmit, formState: { errors } } = useForm({
//         resolver: zodResolver(validationSchema)
//     });

//     const onSubmit = (data) => {
//         console.log(data);
//     }

//     return (
//         <div className='w-4/5 h-4/5 flex justify-center items-center bg-white shadow-2xl rounded'>
//             <div className='w-1/2'>
//                 <img src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="" className='w-full' />
//             </div>
//             <div className='w-1/2 flex flex-col gap-8'>
//                 <h1 className='text-3xl text-blue-500 font-semibold text-center'>Welcome ! Sign-In</h1>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className='grid grid-cols-2 gap-3'>
//                         <div>
//                             <label className='text-blue-500 font-medium'>Name</label>
//                             <input type="text" className='p-2 border border-gray-500 outline-blue-500 w-[90%] my-2 rounded shadow-xl' {...register("name")} />
//                         </div>

//                         <div>
//                             <label className='text-blue-500 font-medium'>Email</label>
//                             <input type="email" className='p-2 border border-gray-500 outline-blue-500 w-[90%] my-2 rounded shadow-xl' {...register("email")} />
//                         </div>

//                         <div>
//                             <label className='text-blue-500 font-medium'>Password</label>
//                             <input type="password" className='p-2 border border-gray-500 outline-blue-500 w-[90%] my-2 rounded shadow-xl' {...register("password")} />
//                         </div>

//                         <div>
//                             <label className='text-blue-500 font-medium'>Phone Number</label>
//                             <input type="number" className='p-2 border border-gray-500 outline-blue-500 w-[90%] my-2 rounded shadow-xl' {...register("phoneNumber")} />
//                         </div>
//                     </div>
//                     <button className='bg-blue-500 my-5 text-white font-medium p-2 w-[95%] shadow-xl rounded active:bg-blue-600'>Sign-Up</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup




// // import React from 'react'

// // const Signup = () => {
// //     return (
// //         <div>
// //             <div>
// //                 <img src="" alt="" />
// //             </div>
// //             <div>
// //                 <form>
// //                     <div>
// //                         <div>
// //                             <label>Name</label>
// //                             <input type="text" />
// //                         </div>
// //                         <div>
// //                             <label>Email</label>
// //                             <input type="email" />
// //                         </div>
// //                         <div>
// //                             <label>Password</label>
// //                             <input type="password" />
// //                         </div>
// //                         <div>
// //                             <label>Phone Number</label>
// //                             <input type="number" />
// //                         </div>
// //                     </div>
// //                 </form>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Signup
