/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { Fragment, Key, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HeartIcon, MenuAlt2Icon, PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'
import { PencilIcon, PlusSmIcon as PlusSmIconSolid, SearchIcon } from '@heroicons/react/solid'
import Layout from '../../components/admin/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'
import { CntFile, File } from 'types/Image'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const userNavigation = [
    { name: 'Your profile', href: '/' },
    { name: 'Sign out', href: '/' },
]
const files: File[] = [
    {
        name: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        current: true,
    },
    {
        name: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        current: true,
    },
]

const currentFile: CntFile[] = [
    {
        id: 'ccsdv9v0sdvv9ds0vb9dsv',
        name: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        dimensions: '4032 x 3024',
        resolution: '72 x 72',
    },

    {
        id: 'ascasasascqcw21ec',
        name: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        dimensions: '4032 x 3024',
        resolution: '72 x 72',
    },
]

export default function Page(session: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log('🚀 ~ file: prodotti.tsx ~ line 71 ~ Page ~ session', session)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <Layout>
                <div className="flex h-full">
                    {/* Content area */}
                    <div className="flex flex-1 flex-col overflow-hidden">
                        <header className="w-full">
                            <div className="relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
                                <button
                                    type="button"
                                    className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-beige-500 md:hidden"
                                    onClick={() => setMobileMenuOpen(true)}
                                >
                                    <span className="sr-only">Open sidebar</span>
                                    <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                                </button>
                                <div className="flex flex-1 justify-between px-4 sm:px-6">
                                    <div className="flex flex-1">
                                        <form className="flex w-full md:ml-0" action="#" method="GET">
                                            <label htmlFor="desktop-search-field" className="sr-only">
                                                Search all files
                                            </label>
                                            <label htmlFor="mobile-search-field" className="sr-only">
                                                Search all files
                                            </label>
                                            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                                    <SearchIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                                </div>
                                                <input
                                                    name="mobile-search-field"
                                                    id="mobile-search-field"
                                                    className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:hidden"
                                                    placeholder="Search"
                                                    type="search"
                                                />
                                                <input
                                                    name="desktop-search-field"
                                                    id="desktop-search-field"
                                                    className="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:block"
                                                    placeholder="Search all files"
                                                    type="search"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative flex-shrink-0">
                                            <div>
                                                <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-beige-500 focus:ring-offset-2">
                                                    <span className="sr-only">Open user menu</span>
                                                    <Image
                                                        className="h-8 w-8 rounded-full"
                                                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                                        alt=""
                                                        layout="fill"
                                                    />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {userNavigation.map((item) => (
                                                        <Menu.Item key={item.name}>
                                                            {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
                                                            {({ active }: any) => (
                                                                <Link href={item.href} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                                    {item.name}
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>

                                        <button
                                            type="button"
                                            className="flex items-center justify-center rounded-full bg-beige-600 p-1 text-white hover:bg-beige-700 focus:outline-none focus:ring-2 focus:ring-beige-500 focus:ring-offset-2"
                                        >
                                            <PlusSmIconOutline className="h-6 w-6" aria-hidden="true" />
                                            <span className="sr-only">Add file</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </header>

                        {/* Main content */}
                        <div className="flex flex-1 items-stretch overflow-hidden">
                            <main className="flex-1 overflow-y-auto">
                                <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
                                    {/* Gallery */}
                                    <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
                                        <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                            {files.map((file) => (
                                                <li key={file.name} className="relative">
                                                    <div
                                                        className={classNames(
                                                            file.current
                                                                ? 'ring-2 ring-beige-500 ring-offset-2'
                                                                : 'focus-within:ring-2 focus-within:ring-beige-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                                                            'group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100'
                                                        )}
                                                    >
                                                        <Image
                                                            layout="fill"
                                                            src={file.source}
                                                            alt=""
                                                            className={classNames(file.current ? '' : 'group-hover:opacity-75', 'pointer-events-none object-cover')}
                                                        />
                                                        <button type="button" className="absolute inset-0 focus:outline-none">
                                                            <span className="sr-only">View details for {file.name}</span>
                                                        </button>
                                                    </div>
                                                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.name}</p>
                                                    <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                </div>
                            </main>

                            {/* Details sidebar */}
                            <aside className="hidden w-96 overflow-y-auto border-l border-gray-200 bg-white p-8 lg:block">
                                <div className="space-y-6 pb-16">
                                    {currentFile.map((info) => (
                                        <div key={info.id}>
                                            <div className="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
                                                <Image layout="fill" src={info.source} alt="" className="object-cover" />
                                            </div>
                                            <div className="mt-4 flex items-start justify-between">
                                                <div>
                                                    <h2 className="text-lg font-medium text-gray-900">
                                                        <span className="sr-only">Details for </span>
                                                        {info.name}
                                                    </h2>
                                                    <p className="text-sm font-medium text-gray-500">{info.size}</p>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-beige-500"
                                                >
                                                    <HeartIcon className="h-6 w-6" aria-hidden="true" />
                                                    <span className="sr-only">Favorite</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <div>
                                        <h3 className="font-medium text-gray-900">Information</h3>
                                        <dl className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                                            {currentFile.map((info) => (
                                                <div key={info.id} className="flex justify-between py-3 text-sm font-medium">
                                                    <dt className="text-gray-500">{info.id}</dt>
                                                    <dd className="text-gray-900">{info.dimensions}</dd>
                                                    <dd className="text-gray-900">{info.resolution}</dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">Description</h3>
                                        <div className="mt-2 flex items-center justify-between">
                                            <p className="text-sm italic text-gray-500">Add a description to this image.</p>
                                            <button
                                                type="button"
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-beige-500"
                                            >
                                                <PencilIcon className="h-5 w-5" aria-hidden="true" />
                                                <span className="sr-only">Add description</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <button
                                            type="button"
                                            className="ml-3 flex-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-beige-500 focus:ring-offset-2"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions)
    console.log('🚀 ~ file: prodotti.tsx ~ line 259 ~ getServerSideProps ~ session', session)

    if (!session || session.user.role != 'ADMIN') {
        return { redirect: { permanent: false, destination: '/' } }
    }

    return {
        props: { session: session },
    }
}
