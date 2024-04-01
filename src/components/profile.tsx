'use client'

import { useSession } from 'next-auth/react'

export default function Profile() {
    const { data: session } = useSession()

    return session?.user ? <div>From client signed in: {JSON.stringify(session.user)}</div> : <div>From client signed out</div>

}

