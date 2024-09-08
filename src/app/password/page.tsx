import { Toaster } from 'sonner'
import PasswordForm from './form'
import { isLoggedIn } from '@/actions/auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'

async function page() {
    const isLogged = await isLoggedIn()

    if (isLogged) {
        return redirect('/')
    }

    return (
        <>
            <div className='w-screen h-screen flex'>
                <div className='w-1/2 h-screen flex items-center justify-center relative blur-sm'>
                    <Image src='/home.png'
                        className='object-cover'
                        quality={100}
                        priority
                        alt='home' fill />
                </div>
                <div className='md:w-1/2 w-full h-full flex flex-col items-center justify-center'>
                    <PasswordForm />
                    <div className='mt-auto mb-10'>
                        <p>powered by </p>
                        <p className='font-bold text-xl'>POP Presentation</p>
                    </div>
                </div>
            </div >
            <Toaster position='top-center' />
        </>
    )
}

export default page