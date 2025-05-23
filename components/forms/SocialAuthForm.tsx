'use client'

import React from 'react'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { toast } from 'sonner'
import ROUTES from '@/constants/routes'

// Note: import from 'next-auth/react' for a client component and import from '@auth' for a server component. Setup Google oAuth at https://console.cloud.google.com/. Setup GitHub oAuth at https://github.com/settings/developers

const SocialAuthForm = () => {
  const buttonClass = 'background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5 cursor-pointer'

  const handleSignIn = async (provider: 'github' | 'google') => {
    try {
      await signIn(provider, {
        callbackURL: ROUTES.HOME,
        redirectTo: ROUTES.HOME
      })
    } catch (error) {
      console.error(error)
      toast.error(error instanceof Error ? error.message : 'An error occurred during sign-in')
    }
  }
  return (
        <div className={'mt-10 flex flex-wrap gap-2'}>
            <Button className={buttonClass} onClick={() => handleSignIn('github')}>
                <Image
                    src="/icons/github.svg"
                    alt="Github logo"
                    width={20}
                    height={20}
                    className={'invert-colors mr-2.5 object-contain'}
                />
                <span>Log in with GitHub</span>
            </Button>
            <Button className={buttonClass} onClick={() => handleSignIn('google')}>
                <Image
                    src="/icons/google.svg"
                    alt="Google logo"
                    width={20}
                    height={20}
                    className={'mr-2.5 object-contain'}
                />
                <span>Log in with Google</span>
            </Button>
        </div>
  )
}
export default SocialAuthForm
