'use client'

import React from 'react'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SheetClose } from '@/components/ui/sheet'

const NavLinks = ({ isMobileNav = false } : { isMobileNav? :boolean }) => {
  const pathname = usePathname()
  const userId = 1
  return <>
    {sidebarLinks.map((link) => {
      const isActive =
          (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route
      if (link.route === '/profile') {
        if (userId) link.route = `${link.route}/${userId}}`
        else return null
      }

      const LinkComponent = (
          <Link href={link.route} key={link.label} className={cn(isActive ? 'primary-gradient rounded-lg text-light-900' : 'text-dark300_light900', 'flex items-center justify-start gap-4 bg-transparent p-4')}>
            <Image
                src={link.imgURL}
                alt={link.label}
                width={23}
                height={23}
                className={cn({ 'invert-colors': !isActive })}
            />
            <p className={cn(
              isActive ? 'base-bold' : 'base-medium', !isMobileNav && 'max-lg:hidden'
            )}>{link.label}</p>
          </Link>
      )
      return isMobileNav
        ? (
          <SheetClose asChild key={link.route}>{LinkComponent}</SheetClose>
          )
        : (
          <React.Fragment key={link.route}>{LinkComponent}</React.Fragment>
          )
    }
    )}
  </>
}
export default NavLinks
