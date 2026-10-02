"use client"
import { authClient } from '@/lib/auth-client';
import { FaGithub, FaGoogle } from 'react-icons/fa'

export default function Rightsidebar() {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data, 'google')
  };
  const handleGitHubSignIn = async () => {
      const data = await authClient.signIn.social({
        provider: "github"
    })
  }
  
  return (
    <div>
      <h1 className='text-lg font-bold '>LogIn With</h1>
      <div className=''>
        <button
          onClick={handleGoogleSignIn}
          className='flex gap-2 justify-center items-center btn text-blue-400 mt-5 mb-2'><FaGoogle></FaGoogle> LogIn With Google</button>
        <button
          onClick={handleGitHubSignIn}
          className='flex gap-2 justify-center items-center btn '><FaGithub></FaGithub> LogIn With Google</button>
    </div>
    </div>
  )
}
