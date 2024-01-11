import axios from '@/lib/axios'
import { useContext, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { GlobalContext } from '@/Hooks/providers/Context'
import toShowNotification from '@/lib/notification'

export const useAuth = ({ middleware, redirectIfAuthenticated }: { middleware: string, redirectIfAuthenticated: string }) => {
    const router = useRouter()
    const params = useParams()

    const { user, setUser } = useContext<GlobalContext>(GlobalContext);

    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const register = async ({ ...props }) => {
        await csrf()

        axios
            .post('/register', props)
            .then(response => {
                setUser(response.data.user)
                toShowNotification({
                    type: 'success',
                    message: response.data.message,
                })
                router.push(redirectIfAuthenticated)
            })
            .catch(error => {
                toShowNotification({
                    type: 'error',
                    message: error.response.data.message,
                })
            })
    }
    const login = async ({ ...props }) => {
        await csrf()
        axios
            .post('/login', props)
            .then(response => {
                setUser(response.data.user)
                toShowNotification({
                    type: 'success',
                    message: response.data.message,
                })
                router.push(redirectIfAuthenticated)
            })
            .catch(error => {
                toShowNotification({
                    type: 'error',
                    message: error.response.data.message,
                })
            })
    }
    const logout = async () => {

        await axios
            .post('/logout')
            .then(response => {
                toShowNotification({
                    type: 'success',
                    message: response.data.message,
                })
                setUser({id: 0, name: '', email :''})
                router.push(redirectIfAuthenticated)
            })
            .catch(error => {
                toShowNotification({
                    type: 'error',
                    message: error.response.data.message,
                })
            })


    }
    const resendEmailVerification = () => {
        axios
            .post('/email/verification-notification')
            .then(response => console.log(response.data.status))
    }
    // const { data: user2, error, mutate } = useSWR('/api/user', () =>
    //     axios
    //         .get('/api/user')
    //         .then(res => res.data)
    //         .catch(error => {
    //             if (error.response.status !== 409) throw error

    //             router.push('/verify-email')
    //         }),
    // )







    // const forgotPassword = async ({ email } : {email : string}) => {
    //     await csrf()

    //     axios
    //         .post('/forgot-password', { email })
    //         .then(response => console.log(response.data.status))
    //         .catch(error => {
    //             if (error.response.status !== 422) throw error
    //         })
    // }

    // const resetPassword = async ({...props }) => {
    //     await csrf()

    //     axios
    //         .post('/reset-password', { token: params.token, ...props })
    //         .then(response =>
    //             router.push('/login?reset=' + btoa(response.data.status)),
    //         )
    //         .catch(error => {
    //             if (error.response.status !== 422) throw error

    //         })
    // }





    // useEffect(() => {
    //     if (middleware === 'guest' && redirectIfAuthenticated && user)
    //         router.push(redirectIfAuthenticated)
    //     if (
    //         window.location.pathname === '/verify-email' &&
    //         user?.email_verified_at
    //     )
    //         router.push(redirectIfAuthenticated)
    //     if (middleware === 'auth' && error) logout()
    // }, [user, error])

    return {
        user,
        register,
        login,
        // forgotPassword,
        // resetPassword,
        resendEmailVerification,
        logout,
    }
}
