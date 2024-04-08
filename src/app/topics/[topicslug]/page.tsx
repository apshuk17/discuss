import PostCreateForm from "@/components/posts/post-create-form";

type TopicShowPageProps = {
    params: {
        topicslug: string;
    }
}

export default function TopicShowPage({ params }: TopicShowPageProps) {
    const { topicslug } = params;
    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            <div className="col-span-3">
                <h1 className="text-2xl font-bold mb-2">
                    {topicslug}
                </h1>
            </div>

            <div>
                <PostCreateForm topicSlug={topicslug} />
            </div>
        </div>
    );
}

