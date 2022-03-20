import { signIn, useSession } from 'next-auth/client'
import { setCookie } from 'nookies'
import Router from 'next/router'
import { useState, useContext } from 'react'
import { useCallback } from 'react'
import UserContext from '../context/UserContext'


export default function LoginForm({ providers }: any) {
    const [session] = useSession()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const constxt = useContext(UserContext)

    const fetchRequest = useCallback(async (email, password) => {
        const loginInfo = {
            identifier: email,
            password: password,
        }

        console.log(loginInfo)
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'User-Agent': '*',
            },
            body: JSON.stringify(loginInfo),
        })
        const loginResponse = await res.json()
        console.log(loginResponse)

        if (res.ok) {
            setCookie(null, 'jwt', loginResponse.jwt, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            localStorage.setItem('email user local auth', loginResponse.user.email)

            Router.push('/')
            constxt.setValue({ ...constxt.value, loginInfo })
        } else {
            const ErrorMessage = 'I dati inseriti non son validi'
            return {
                props: {
                    ErrorMessage: await ErrorMessage,
                },
            }
        }
    }, [])

    return (
        <>
            <div className="flex h-screen flex-col justify-center bg-beige-400 px-4 py-6">
                <div className=" sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="rounded-xl bg-beige-100 py-8 px-[1.9rem] shadow-lg  sm:py-10">
                        <form className="" method="POST">
                            <div className="">
                                <label htmlFor="email" className="text-medium block font-medium text-beige-900">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        className="sm:text-medium block w-full appearance-none rounded-lg border-0 px-2  py-2 shadow-lg outline-0  outline-transparent"
                                    />
                                </div>
                            </div>
                            <div className="pb-4 pt-2">
                                <label htmlFor="password" className="text-medium block font-medium text-beige-900">
                                    Password
                                </label>
                                <div className="mt-1 outline-0 outline-transparent">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        className="sm:text-medium block w-full appearance-none rounded-lg  border-0 px-2  py-2 shadow-lg outline-0  outline-transparent"
                                    />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <button
                                    type="button"
                                    onClick={() => fetchRequest(email, password)}
                                    className="text-medium transiction easy-in-out inline-flex  w-full justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg duration-200 hover:bg-beige-600"
                                >
                                    Accedi
                                </button>
                            </div>
                        </form>
                        <div className="mt-4">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center border-beige-700">
                                    <div className="w-full border-t border-beige-700" />
                                </div>
                                <div className="text-medium relative flex justify-center">
                                    <span className="bg-beige-100 px-2 text-beige-900">Oppure continua con</span>
                                </div>
                            </div>
                            <div className="mt-5 grid grid-cols-2 gap-2">
                                {providers &&
                                    Object.values(providers).map((providers) => (
                                        <div key={(providers as any).name}>
                                            {(() => {
                                                if ((providers as any).name == 'Google') {
                                                    return (
                                                        <button
                                                            className="text-medium transiction easy-in-out inline-flex  w-full justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg duration-200 hover:bg-beige-600"
                                                            onClick={() => {
                                                                signIn((providers as any).id)
                                                            }}
                                                        >
                                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                                                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                                                </svg>
                                                            </svg>
                                                        </button>
                                                    )
                                                } else if ((providers as any).name == 'Facebook') {
                                                    return (
                                                        <button
                                                            className="text-medium transiction easy-in-out inline-flex  w-full justify-center rounded-lg bg-beige-500 py-2 px-4 font-medium text-beige-50 shadow-lg duration-200 hover:bg-beige-600"
                                                            onClick={() => {
                                                                signIn((providers as any).id)
                                                            }}
                                                        >
                                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                                                </svg>
                                                            </svg>
                                                        </button>
                                                    )
                                                }
                                            })()}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
