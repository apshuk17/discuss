import { Button } from "@nextui-org/react";
import * as actions from '@/actions'
import { auth } from '@/auth'
import Profile from '@/components/profile'

export default async function Home() {
  const session = await auth();
  const user = session?.user;

  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign in</Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>

      {user ? <p>{JSON.stringify(user)}</p> : <p>Signed Out</p>}

      <Profile />
    </div>
  );
}
