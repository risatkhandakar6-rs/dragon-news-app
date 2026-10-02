"use client"
import { useForm} from "react-hook-form"
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


export default function LogInPage() {
  const [isShowPass,setIsShowPass]=useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit =async (datas) => {
     const { data: res, error } = await authClient.signIn.email({
        
        email: datas.email,
        password: datas.password,
        callbackURL: "/",
      });
  }
  
  return (
    
    <div className='flex mx-auto justify-center items-center max-h-[80vh] container h-screen '>
      <form onSubmit={handleSubmit(onSubmit)}>
         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-15 ">
  <h1 className="fieldset-legend  mx-auto font-bold text-lg">Login Your Account</h1>

  <label className="label">Email</label>
          <input
            type="email"
            className="input "
            placeholder="Email"
            {...register('email', { required: "Email is Required" })} />
          {errors.email && <p>{errors.email.message}</p>}
       

          
            <label className="label">Password</label>
          <div className="relative">
            <input type={isShowPass ? 'text' : 'password'} className="input" placeholder="Password" {...register('password', { required: "Email is Required" })} />
              <span className="absolute right-2 top-4 cursor-pointer"  onClick={()=>setIsShowPass(!isShowPass)}>{isShowPass ? <FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}</span>
</div>
          {errors.password && <p>{errors.password.message}</p>} 
         

          <button className="btn btn-neutral mt-4">Login</button>
          <p className="text-center">Don't Have An Accout? <Link className="text-red-400" href={'register'}>Register</Link></p>
  
      </fieldset>
     </form>
  
    </div>
  )
}
