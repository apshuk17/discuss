'use client'
import * as actions from '@/actions';
import { Button, NavbarItem } from '@nextui-org/react';
import AvatarPopover from './avatar-popover';

import { useSession } from "next-auth/react";

function HeaderAuth() {
    const { data: session, status } = useSession();
    const user = session?.user;

    let authContent: React.ReactNode;

    if (status === 'loading') {
        authContent = null;
    } else if (user) {
        authContent = <AvatarPopover user={user} />
    } else {
        authContent = <NavbarItem>
            <form action={actions.signIn}>
                <Button type="submit" color="primary" variant="bordered">Github Sign In</Button>
            </form>
        </NavbarItem>
    }



    return authContent;
}

export default HeaderAuth;


