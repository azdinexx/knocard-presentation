'use client'
import { signIn } from '@/actions/auth'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { toast, Toaster } from 'sonner'

function PasswordPage() {

    const [state, action] = useFormState(signIn, null)
    const router = useRouter()

    useEffect(() => {
        if (state?.error) {
            toast.error(state.error)
        }
        if (state?.success) {
            toast.success('signed in')
            router.push('/')
        }

    }, [state, router])
    return (
        <>

            <div className='w-screen h-screen flex items-center justify-center'>
                <form action={action} className='p-10 w-96  bg-blue-50 rounded-xl'>
                    <div className='w-full h-full flex items-center justify-center flex-col gap-4'>
                        <label htmlFor="password" className='sr-only'>password</label>
                        <input id='password' name='password' type="password" className='  p-4 bg-white rounded-xl w-full'
                            placeholder='password'
                        />
                        <button type='submit' className='  p-4  rounded-xl w-full bg-blue-800 text-white hover:bg-blue-700'>
                            <span>submit</span>
                        </button>

                    </div>
                </form>
            </div>
            <Toaster
                position='top-center'
            />
        </>
    )
}

export default PasswordPage