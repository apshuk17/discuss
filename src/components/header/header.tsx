import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Button, Avatar, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { auth } from '@/auth'
import * as actions from '@/actions'
import AvatarPopover from './avatar-popover';



export default async function Header() {
    const session = await auth();
    const user = session?.user;

    let authContent: React.ReactNode;

    authContent = user ? <AvatarPopover user={user} /> : <>
        <NavbarItem>
            <form action={actions.signIn}>
                <Button type="submit" color="primary" variant="bordered">Github Sign In</Button>
            </form>
        </NavbarItem>
        {/* <NavbarItem>
            <form action={actions.signIn}>
                <Button type="submit" color="primary" variant="flat">Sign Up</Button>
            </form>
        </NavbarItem> */}
    </>;

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
                {authContent}
            </NavbarContent>
        </Navbar>
    )
}

