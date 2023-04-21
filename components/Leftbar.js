import Image from "next/image";
import { Home, ChartBarIcon, ClockIcon, DotHorizontalIcon } from '@heroicons/react/solid'
import { RiCompassFill } from "react-icons/ri";
import { FaMicrophoneAlt } from "react-icons/fa";
import { HiChartBar, HiClock, HiDotsHorizontal, HiHome } from "react-icons/hi";


function Leftbar() {
  return (
    <section className="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8 ">
        <Image src="https://media.discordapp.net/attachments/898544585167482891/900083852658225172/image0.png?width=619&height=637" width={56} height={56} />
        
        <div className="flex flex-col space-y-8">
            
            <HiHome className="sidebarIcon text-white opacity-[0.85] text-2xl" />
            <RiCompassFill className="sidebarIcon text-2xl" />
            <FaMicrophoneAlt className="sidebarIcon text-2xl" />
            <HiChartBar className="sidebarIcon text-2xl" />
            <HiClock className="sidebarIcon text-2xl" />
            <HiDotsHorizontal className="sidebarIcon text-2xl" />
        </div>



    </section>
  )
}

export default Leftbar;
