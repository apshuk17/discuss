import { Input, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import HeaderAuth from './header-auth';



export default function Header() {
    return (
        <Navbar className='shadow mb-6'>
            <NavbarBrand>
                <NavbarItem>
                    <Link href="/" className='font-bold'>Discuss</Link>
                </NavbarItem>
            </NavbarBrand>
            <NavbarContent justify='center'>
                <NavbarItem>
                    <Input />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify='end'>
                <HeaderAuth />
            </NavbarContent>
        </Navbar>
    )
}

