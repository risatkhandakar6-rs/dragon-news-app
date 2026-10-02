
import logo from "@/assets/logo.png"
import Image from 'next/image'
import { format } from 'date-fns'

export default function Header() {
  return (
    <div className="text-center py-10">
      <Image src={logo} width={400} height={200} alt='logo' className='mx-auto'></Image>
      <p className="pt-2">Journalism Without Fear or Favour</p>
      <p className="pt-1">{format(new Date(), "EEE,MMM dd,yyyy")}</p>
    </div>
  )
}
