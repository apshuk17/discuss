'use server';
import { z } from 'zod';
import { auth } from '@/auth';

type CreateTopicFormState = {
    errors: {
        name?: string[];
        description?: string[];
        _form?: string[];
    }
}

const createTopicSchema = z.object({
    name: z.string().min(3).max(255).regex(/^[a-z-]+$/, {
        message: 'Topic name must be in lowercase and contain only letters and hyphens'
    }),
    description: z.string().min(10),
});


export async function createTopic(formState: CreateTopicFormState, formData: FormData): Promise<CreateTopicFormState> {
    const result = createTopicSchema.safeParse({
        name: formData.get('name'),
        description: formData.get('description'),
    });

    if (!result.success) {
        console.log(result.error.flatten().fieldErrors);
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    const session = await auth();

    if (!session || !session.user) {
        return {
            errors: {
                _form: ['You must be signed in to do this']
            }
        }
    }

    return {
        errors: {}
    }


    // TODO: revalidate the homepage

}

