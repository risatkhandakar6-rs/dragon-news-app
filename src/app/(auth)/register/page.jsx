"use client"
import { useForm} from "react-hook-form"

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegisterPage() {
  const [isShowPass,setIsShowPass]=useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = async (formData) => {
    const { data, email, password, name } = formData;
     const { data: res, error } = await authClient.signUp.email({
    name: name,
    email: email,
    password: password,
    callbackURL: "/",
  });
  console.log(res, error, 'this is auth')
  }


 
  return (
   <div className='flex mx-auto justify-center items-center max-h-[80vh] container h-screen '>
      <form onSubmit={handleSubmit(onSubmit)}>
         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-15 ">
          <h1 className="fieldset-legend  mx-auto font-bold text-lg">Register your account</h1>
          
            <label className="label">Name</label>
          <input type="name" className="input" placeholder="Name" {...register('name', { required: "Name is Required" })} />
          {errors.name && <p className="text-red-400">{errors.name.message}</p>}

  <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" {...register('email', { required: "Email is Required" })} />
          {errors.email && <p className="text-red-400">{errors.email.message}</p>}

  <label className="label">Password</label>
          <div className="relative">
            <input type={isShowPass? 'text':'password'} className="input" placeholder="Password" {...register('password', { required: "Email is Required" })} />
            <span className="absolute right-2 top-4 cursor-pointer" onClick={() => setIsShowPass(!isShowPass)}>{isShowPass? <FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}</span>
    </div>
          {errors.password && <p className="text-red-400">{errors.password.message}</p>} 

          <button className="btn btn-neutral mt-4">Register</button>
         
      </fieldset>
     </form>
  
    </div>
  )
  
}
