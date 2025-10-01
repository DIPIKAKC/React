import { Formik } from "formik";
import { useLazySearchRecipeQuery } from "./recipeApi";
import toast from "react-hot-toast";
import { Form, Input } from "@heroui/react";


export default function SearchRecipe() {
    const [searchRecipe, { isLoading, error, data, isUninitialized }] = useLazySearchRecipeQuery();
    console.log(data);
    return (
        <div className="p-5">

            <Formik
                initialValues={{
                    search: ''
                }}
                onSubmit={async (val, { resetForm }) => {
                    try {
                        await searchRecipe(val.search)
                        resetForm();
                    } catch (err) {
                        toast.error(err.message)
                    }
                }}
            >
                {({ handleChange, values, errors, touched, handleSubmit, }) => (
                    <Form
                        onSubmit={handleSubmit}
                        className="max-w-[400px]">
                        <Input
                            value={values.search}
                            onChange={handleChange}
                            name="search"
                            placeholder="Search" />
                    </Form>
                )}
            </Formik>


            {isLoading && <h1>Loading</h1>}
            {data?.recipes?.length > 0 ? (
                data.recipes.map((recipe) => (
                    <div key={recipe.id}>
                        <h1>{recipe.name}</h1>
                        <img src={recipe.image} alt="" />
                    </div>
                ))
            ) : (
                !isLoading && !error && !data?.recipes?.length && !error && !isUninitialized && (
                    <h1>No recipes found</h1>
                )
            )}

        </div>
    )
}