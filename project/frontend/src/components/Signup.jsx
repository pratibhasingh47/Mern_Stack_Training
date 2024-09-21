
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const Signup = () => {

    const [formData, setFormData] = useState({});

    const validationSchema = z.object({
        "name": z.string().min(3, "Name must contain 3 letters"),
        "email": z.string().min(1, "Email is required").email("Invalid email"),
        "password": z.string()
            .min(8, "Password must contain atleast 8 letters")
            .regex(/[a-z]/, "Password must contain 1 lowercase")
            .regex(/[A-Z]/, "Password must contain 1 uppercase")
            .regex(/[0-9]/, "Password must contain 1 number")
            .reger(/[\W_]/, "Password must contain 1 special character")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(validationSchema)
    });

    const onSubmit = (data) => {
        console.log(data);
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
                            <input type="text" className='p-2 border border-gray-500 outline-blue-500 w-[90%] my-2 rounded shadow-xl' {...register("name")} />
                        </div>

                        <div>
                            <label className='text-blue-500 font-medium'>Email</label>
                            <input type="email" className='p-2 border border-gray-500 outline-blue-500 w-[90%] my-2 rounded shadow-xl' {...register("email")} />
                        </div>

                        <div>
                            <label className='text-blue-500 font-medium'>Password</label>
                            <input type="password" className='p-2 border border-gray-500 outline-blue-500 w-[90%] my-2 rounded shadow-xl' {...register("password")} />
                        </div>

                        <div>
                            <label className='text-blue-500 font-medium'>Phone Number</label>
                            <input type="number" className='p-2 border border-gray-500 outline-blue-500 w-[90%] my-2 rounded shadow-xl' {...register("phoneNumber")} />
                        </div>
                    </div>
                    <button className='bg-blue-500 my-5 text-white font-medium p-2 w-[95%] shadow-xl rounded active:bg-blue-600'>Sign-Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup




// import React from 'react'

// const Signup = () => {
//     return (
//         <div>
//             <div>
//                 <img src="" alt="" />
//             </div>
//             <div>
//                 <form>
//                     <div>
//                         <div>
//                             <label>Name</label>
//                             <input type="text" />
//                         </div>
//                         <div>
//                             <label>Email</label>
//                             <input type="email" />
//                         </div>
//                         <div>
//                             <label>Password</label>
//                             <input type="password" />
//                         </div>
//                         <div>
//                             <label>Phone Number</label>
//                             <input type="number" />
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup
