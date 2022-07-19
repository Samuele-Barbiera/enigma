import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { toast } from 'react-hot-toast'
import { Dialog, Transition } from '@headlessui/react'
import { SparklesIcon, MailOpenIcon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline'

const Confirm = ({ show = false, email = '' }) => (
  <Transition appear show={show} as={Fragment}>
    <div className="fixed inset-0 z-50">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-white" />
      </Transition.Child>

      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="flex h-full items-center justify-center p-8">
          <div className="transform overflow-hidden transition-all">
            <h3 className="text-center text-lg font-medium leading-6">
              <div className="flex flex-col items-center justify-center space-y-4">
                <MailOpenIcon className="h-12 w-12 shrink-0 text-teal-500" />
              </div>
              <p className="mt-2 text-2xl font-semibold">Confirm your email</p>
            </h3>

            <p className="mt-4 text-center text-lg">
              We have sed and email to <strong>{email ?? ''}</strong>.
              <br />
              Check your email and click on that confirmation link.
            </p>
          </div>
        </div>
      </Transition.Child>
    </div>
  </Transition>
)

const SigninPopupModal = ({ show = false, onClose = () => null }) => {
  const [disabled, setDisabled] = useState(false)
  const [showConfirm, setConfirm] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)

  const closeModal = () => {
    if (typeof onClose === 'function') {
      onClose()
    }
  }

  // Reset modal
  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        setDisabled(false)
        setConfirm(false)
        setShowSignIn(false)
      }, 200)
    }
  }, [show])

  useEffect(() => {
    toast.dismiss()
  }, [])

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={closeModal}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-75" />

        <div className="min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative my-8 inline-block w-full max-w-xl transform overflow-hidden bg-neutral text-left shadow-2xl transition-all sm:rounded-xl">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 shrink-0 rounded-md p-1 transition hover:bg-gray-100 focus:outline-none"
              >
                <XIcon className="h-5 w-5" />
              </button>

              <div className="py-12">
                <div className="px-4 sm:px-12">
                  <div className="flex justify-center">
                    <a className="flex items-center space-x-1">
                      <span className="text-2xl font-semibold tracking-wide text-gray-400">
                        <span className="text-3xl text-success">S</span>
                        upabase
                        <span className="text-3xl text-success">E</span>
                        commerce
                      </span>
                    </a>
                  </div>
                  <Dialog.Title as="h3" className="mt-6 text-center text-lg font-bold sm:text-2xl">
                    {showSignIn ? 'Welcome back!' : 'Create an account'}
                  </Dialog.Title>
                  {!showSignIn ? (
                    <Dialog.Description className="mt-2 text-center text-base text-gray-500">
                      This feature will be implemented in next series of article.
                    </Dialog.Description>
                  ) : null}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

SigninPopupModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
}

export default SigninPopupModal