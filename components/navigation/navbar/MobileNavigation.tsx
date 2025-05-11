import React from 'react'
import Image from 'next/image'
import {
  Sheet, SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import Link from 'next/link'
import ROUTES from '@/constants/routes'
import { Button } from '@/components/ui/button'

const MobileNavigation = () => {
  return (
      <Sheet>
          <SheetTrigger asChild>
              <Image
                  src={'/icons/hamburger.svg'}
                  width={23}
                  height={23}
                  alt="DevFlow Logo"
                  className={'invert-colors sm:hidden'}
              />
          </SheetTrigger>
          <SheetContent side={'left'} className={'background-light900_dark200 border-none p-5'}>
              <SheetTitle className={'hidden'}>Navigation</SheetTitle>
              <Link href={'/'} className={'flex items-center gap-1'}>
                  <Image
                      src={'/images/site-logo.svg'}
                      width={23}
                      height={23}
                      alt="DevFlow Logo"
                  />
                  <p className={'h2-bold font-space-grotesk text-dark-100 dark:text-light-900'}>
                      Dev<span className={'text-primary-500'}>Flow</span>
                  </p>
              </Link>
              <div className={'no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto'}>
                  <SheetClose asChild>
                      <section className={'flex flex-col h-full gap-6 pt-16'}>
                          <p>Nav Links</p>
                      </section>
                  </SheetClose>
                  <div className={'flex flex-col gap-3'}>
                      <SheetClose asChild>
                          <Link href={ROUTES.SIGN_IN}>
                              <Button
                                  className={'small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'}>
                                  <span className={'primary-text-gradient'}>Sign in</span>
                              </Button>
                          </Link>
                      </SheetClose>
                      <SheetClose asChild>
                          <Link href={ROUTES.SIGN_UP}>
                              <Button
                                  className={'small-medium btn-tertiary light-border-2 text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none'}>
                                  <span className={'primary-text-gradient'}>Sign up</span>
                              </Button>
                          </Link>
                      </SheetClose>
                  </div>
              </div>
          </SheetContent>
      </Sheet>
  )
}
export default MobileNavigation
