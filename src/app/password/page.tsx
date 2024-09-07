import { Toaster } from 'sonner'
import PasswordForm from './form'
import { isLoggedIn } from '@/actions/auth'
import { redirect } from 'next/navigation'

async function PasswordPage() {
    const isLogged = await isLoggedIn()

    if (isLogged) {
        return redirect('/')
    }

    return (
        <>
            <div className='w-screen h-screen flex'>
                <div className='hidden md:block w-1/2 bg-blue-50'></div>
                <div className='md:w-1/2 w-full h-full flex items-center justify-center'>
                    <PasswordForm />
                </div>
            </div >
            <Toaster position='top-center' />
        </>
    )
}

export default PasswordPage