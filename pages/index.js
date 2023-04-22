import { Dashboard } from '@/components/Dashboard'
import Loader from '@/components/Loader'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'




export default function Home() {
  const router = useRouter()
  const {status, data: session} = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/auth/signin')
    },
    
  });

  if (status === 'loading') {
    return <Loader/>;
  }


  return (
    <div className=''>
      <Head>
        <title>Spotify - Dashboard</title>
        {/* spotify favicon online here*/}
        <link rel="icon" href="https://media.discordapp.net/attachments/898544585167482891/900083852658225172/image0.png?width=619&height=637" />
      </Head>
      <main className="">
        <Dashboard />
      </main>
    </div>
  )
}
