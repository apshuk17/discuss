import Link from 'next/link'
import paths from '@/paths';
import PostShow from '@/components/posts/post-show';
import CommentCreateForm from '@/components/comments/comment-create-form';
import { fetchCommentsByPostId } from '@/db/queries/comments';
import CommentList from '@/components/comments/comment-list';
import { Suspense } from 'react';
import PostShowLoading from '@/components/posts/post-show-loading';

type PostShowPageProps = {
  params: {
    topicslug: string;
    postId: string;
  }
}

export default function PostShowPage({ params }: PostShowPageProps) {
  const { topicslug, postId } = params;

  return (
    <div className="space-y-3">
      <Link className='underline decoration-solid' href={paths.topicShow(topicslug)}>
        {'< '}Back to {topicslug}
      </Link>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList fetchData={() => fetchCommentsByPostId(postId)} />
    </div>
  );
}


