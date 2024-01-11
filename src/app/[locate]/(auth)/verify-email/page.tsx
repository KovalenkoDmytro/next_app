'use client'

import {useAuth} from '@/Helpers/Auth'
import { useState } from 'react'

const Page = () => {
    const { logout, resendEmailVerification } = useAuth({
        middleware: 'auth',
        redirectIfAuthenticated: '/',
    })

    const [status, setStatus] = useState(null)

    return (
        <>
            <div className="mb-4 text-sm text-gray-600">
                Thanks for signing up! Before getting started, could you verify
                verify your email address by clicking on the link we just
                emailed to you? If you didnot receive the email, we will gladly
                gladly send you another.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    A new verification link has been sent to the email address
                    address you provided during registration.
                </div>
            )}

            <div className="mt-4 flex items-center justify-between">
                <button onClick={() => resendEmailVerification()}>
                    Resend Verification Email
                </button>

                <button
                    type="button"
                    className="underline text-sm text-gray-600 hover:text-gray-900"
                    onClick={logout}>
                    Logout
                </button>
            </div>
        </>
    )
}

export default Page
