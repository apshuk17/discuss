import { type Post } from '@prisma/client';
import { prisma as db } from '@/db';

export type PostWithData = (Post & {
    topic: { slug: string },
    user: { name: string | null },
    _count: { comments: number },
})

// export type PostWithData = Awaited<ReturnType<typeof fetchPostsByTopicSlug>>[number]

export function fetchPostsByTopicSlug(slug: string): Promise<PostWithData[]> {
    return db.post.findMany({
        where: { topic: { slug } },
        include: {
            topic: { select: { slug: true } },
            user: { select: { name: true } },
            _count: { select: { comments: true } },
        }
    })
}

export async function fetchTopPosts(): Promise<PostWithData[]> {
    return db.post.findMany({
        orderBy: [
            {
                comments: {
                    _count: "desc"
                }
            }
        ],
        include: {
            topic: { select: { slug: true } },
            user: { select: { name: true, image: true } },
            _count: { select: { comments: true } }
        },
        take: 5
    })
}