import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma as db } from '@/db';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
    throw new Error('Missing GITHUB OAuth credentials');
}

export const { handlers: { GET, POST }, auth, signOut, signIn } = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        GithubProvider({
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        // Usually not needed, here we are fixing a bug in next-auth
        async session({ session, user }) {
            session.user = user;
            return session;
        },
    },
});
