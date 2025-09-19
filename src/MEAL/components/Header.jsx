import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
          <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                <Link color="foreground" href="#">
                    Category
                </Link>
                </NavbarItem>
                <NavbarItem isActive>
                <Link aria-current="page" href="#">
                    Meals
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link color="foreground" href="#">
                    Info
                </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                <Button as={Link} color="primary" href="#" variant="flat">
                    Sign Up
                </Button>
                </NavbarItem>
            </NavbarContent>
            </Navbar>
    </div>
  )
}
