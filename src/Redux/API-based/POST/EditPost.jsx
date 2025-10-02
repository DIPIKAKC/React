import { Button, Form, Input, Textarea } from '@heroui/react'
import { Formik } from 'formik'
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useGetSinglePostQuery, useUpdatePostMutation } from './postApi';
import { useNavigate, useParams } from 'react-router';

const valSchema = Yup.object({
    title: Yup.string().required(),
    detail: Yup.string().required(),
    author: Yup.string().required(),
    image: Yup.string().url().required()
})

export default function EditPost() {
    const { id } = useParams();

    // Hooks must always be called in the same order otherwise it shows error when refreshed page
    const { data: post, isLoading } = useGetSinglePostQuery(id);
    const [updatePost] = useUpdatePostMutation();
    const nav = useNavigate();
    
    // Conditional rendering for the form
    if (isLoading) return <p>Loading...</p>;
    if (!post) return <p>Post not found.</p>;
    
    return (
        <div className='px-4 py-8'>
            <Formik
                initialValues={{
                    title: post.title,
                    author: post.author,
                    detail: post.detail,
                    image: post.image,
                }}
                validationSchema={valSchema}

                onSubmit={async (val) => {
                    try {
                        await updatePost({
                            id,
                            data: val
                        }).unwrap();
                        toast.success("Post updated successfully")
                        nav(-1);
                    } catch (err) {
                        console.error("Update failed", err);
                        toast.error(err)
                    }
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form
                        onSubmit={handleSubmit}
                        className='w-200 m-auto px-5 py-8 rounded-xl space-y-3 shadow-[0_0_10px_rgba(0,0,0,0.1)]
'>
                        <h1 className='font-semibold text-xl text-pink-300'>Add a new post</h1>
                        <div className='w-full'>
                            <Input
                                onChange={handleChange}
                                isRequired
                                value={values.title}
                                label='Title'
                                labelPlacement='outside'
                                name='title'
                                placeholder='Title'
                                type='text'
                            />
                            {touched.title && errors.title && <p className="text-red-500">{errors.detail}</p>}
                        </div>
                        <div className="w-full">
                            <Textarea
                                className="w-full"
                                onChange={handleChange}
                                value={values.detail}
                                label="Detail"
                                labelPlacement="outside"
                                name="detail"
                                placeholder="Enter Detail"
                                type="text"
                            />
                            {touched.detail && errors.detail && <p className="text-red-500">{errors.detail}</p>}
                        </div>

                        <div className="w-full">
                            <Input
                                className="w-full"
                                onChange={handleChange}
                                value={values.author}
                                label="Author"
                                labelPlacement="outside"
                                name="author"
                                placeholder="Enter Author"

                                type="text"
                            />
                            {touched.author && errors.author && <p className="text-red-500">{errors.title}</p>}
                        </div>

                        <div className="w-full">
                            <Input
                                className="w-full"
                                onChange={handleChange}
                                value={values.image}
                                label="Image"
                                labelPlacement="outside"
                                name="image"
                                placeholder="Enter Image"
                                type="text"

                            />
                            {touched.image && errors.image && <p className="text-red-500">{errors.title}</p>}
                        </div>

                        <div className=' flex justify-end w-full'>
                            <Button type="submit" className='bg-pink-300 text-white px-8'>Update Post</Button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    )
}
