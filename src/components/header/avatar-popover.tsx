import { Popover, PopoverTrigger, PopoverContent, Avatar, Button } from "@nextui-org/react";
import * as actions from '@/actions'
import { type User } from "next-auth";

function AvatarPopover({ user }: { user: User }) {
    return <Popover placement="left">
        <PopoverTrigger>
            <Avatar src={user.image || ''} alt={user.name || 'User Avatar'} />
        </PopoverTrigger>
        <PopoverContent>
            <div className='p-4'>
                <form action={actions.signOut}>
                    <Button type="submit" color="secondary" variant="bordered">Sign Out</Button>
                </form>
            </div>
        </PopoverContent></Popover>
}

export default AvatarPopover;

