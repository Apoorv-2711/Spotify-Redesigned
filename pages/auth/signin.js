
import Loader from '@/components/Loader';
import { getProviders, signIn ,useSession } from 'next-auth/react';
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Signin({ providers }) {
    const { data: session } = useSession();
    const router = useRouter()

    useEffect(() => {
        if (session) {
            router.push('/');
        }
    }, [session]);

    if (session) return <Loader />;

    return (
        <div className='bg-black h-screen flex flex-col items-center pt-40 space-y-8'>
            <Head>
                <title>Login - Spotify</title>
                {/* spotify favicon online here*/}
                <link rel="icon" href="https://media.discordapp.net/attachments/898544585167482891/900083852658225172/image0.png?width=619&height=637" />
            </Head>
            <Image
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                height={250}
                width={600}
                className="animate-pulse"
            />
            {Object.values(providers).map((provider) => (
                <div key={provider.id}>
                    <button
                        className='text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146]'
                        onClick={() => signIn(provider.id)}
                    >
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Signin

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}