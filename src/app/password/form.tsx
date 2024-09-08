'use client'
import { signIn } from '@/actions/auth'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { toast, Toaster } from 'sonner'

function PasswordPage() {
    const [password, setPassword] = useState(['', '', '', ''])
    const [state, action] = useFormState(signIn, null)
    const router = useRouter()
    const [remember, setRemember] = useState(false)

    useEffect(() => {
        if (state?.error) {
            toast.error(state.error)
        }
        if (state?.success) {
            router.push('/')
        }
    }, [state, router])

    const handlePasswordChange = (index: number, value: string) => {
        const newPassword = [...password]
        newPassword[index] = value.replace(/\D/g, '').slice(0, 1)
        setPassword(newPassword)

        // Move focus to next input
        if (value && index < 3) {
            const nextInput = document.getElementById(`password-${index + 1}`)
            nextInput?.focus()
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !password[index] && index > 0) {
            const prevInput = document.getElementById(`password-${index - 1}`) as HTMLInputElement
            prevInput?.focus()
            prevInput.value = ''
            const newPassword = [...password]
            newPassword[index - 1] = ''
            setPassword(newPassword)
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const fullPassword = password.join('')
        if (fullPassword.length === 4) {
            const formData = new FormData()
            formData.append('pwd', fullPassword)
            formData.append('remember', remember.toString())
            action(formData)
        } else {
            toast.error('Password must be 4 digits')
        }
    }

    return (
        <>
            <div className='w-full flex flex-col items-center justify-center mt-auto'>
                <div className='relative mb-5'>

                    <Image src='/knocard-password-page.png' alt='logo' quality={100} width={250} height={250}
                        className=''
                    />
                    <p className='absolute bottom-0 right-0'>overview</p>
                </div>
                <form onSubmit={handleSubmit} className='p-10 w-96  bg-blue-50 rounded-xl'>
                    <div className='w-full h-full flex items-center justify-center flex-col gap-4'>
                        <div className='flex gap-2'>
                            {[0, 1, 2, 3].map((index) => (
                                <input
                                    key={index}
                                    id={`password-${index}`}
                                    name={`password-${index}`}
                                    type="text"
                                    inputMode="numeric"
                                    pattern="\d"
                                    maxLength={1}
                                    value={password[index]}
                                    onChange={(e) => handlePasswordChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className='p-4 bg-white rounded-xl w-16 h-16 text-center text-3xl text-blue-500 placeholder-blue-300  flex items-center justify-center'
                                    required
                                    autoFocus={index === 0}
                                    placeholder="*"
                                />
                            ))}
                        </div>
                        <div className='flex  gap-2 w-full pl-4 items-center'>
                            <input type="checkbox" name="remember" id="remember"
                                className='w-4 h-4 rounded-md'
                                checked={remember}
                                onChange={() => setRemember(!remember)}
                            />
                            <label htmlFor="remember"
                            >Remember me</label>
                        </div>
                        <input

                            type="hidden"
                            name="pwd"
                            value={password.join('')}
                        />
                        <SubmitButton />
                    </div>
                </form>
            </div>
            <Toaster position='top-center' />
        </>
    )
}

export default PasswordPage

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button type='submit' className='p-4 rounded-xl w-full bg-blue-800 text-white hover:bg-blue-700'>
            <span>{pending ? 'loading...' : 'Sign In'}</span>
        </button>
    )
}
