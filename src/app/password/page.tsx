
import { Toaster } from 'sonner'
import PasswordForm from './form'
async function PasswordPage() {

    return (
        <>
            <div className='w-screen h-screen flex items-center justify-center'>
                <PasswordForm />
            </div>
            <Toaster
                position='top-center'
            />
        </>
    )
}

export default PasswordPage