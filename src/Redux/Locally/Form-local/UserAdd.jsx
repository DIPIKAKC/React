import { Button, Checkbox, Form, Input, Radio, RadioGroup, Select, SelectItem, Textarea, } from "@heroui/react"
import { Formik } from "formik"
import * as Yup from 'yup';
import { setUser } from "./userSlice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const habits = ['sing', 'dance', 'paint', 'swim'];
const countries = [
    { key: "nepal", label: "nepal" },
    { key: "india", label: "india" },
    { key: "china", label: "china" },
];
const valSchema = Yup.object({
    username: Yup.string().min(5).max(20).required('username required'),
    email: Yup.string().email().required(),
    habits: Yup.array().min(1).required(),
    gender: Yup.string().required(),
    country: Yup.string().required(),
    description: Yup.string().required()

})
export default function UserAdd() {
    const dispatch = useDispatch(); //hook to call setuser function/state from useslice || for state=>use selector
    const nav = useNavigate();
    return (
        <div>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    habits: [],
                    gender: '',
                    country: '',
                    description: ''
                }}

                onSubmit={(val,{resetForm}) => {
                    dispatch(setUser(val)) //val:object=>initial values, yo line le chai useslice ko 'users' ma gayera data save gardincha
                    console.log(val)
                    nav(-1);
                }}

                validationSchema={valSchema}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (

                    <Form onSubmit={handleSubmit}>
                        <Input
                            value={values.username}
                            onChange={handleChange}
                            label='username'
                            name='username'
                            placeholder='enter your username'
                            type='text'
                        />
                        {errors.username && touched.username && <p className="text-red-500">{errors.username}</p>}
                        <Input
                            value={values.email}
                            onChange={handleChange}
                            label='email'
                            name='email'
                            placeholder='enter your email'
                            type='email'
                        />

                        <h1 className="text-lg">Select your habits</h1>
                        <div className="flex gap-4">
                            {habits.map((habit, i) => {
                                return <Checkbox
                                    key={i}
                                    onChange={handleChange}
                                    value={habit} name="habits">
                                    {habit}
                                </Checkbox>
                            })}
                        </div>

                        <div>
                            <RadioGroup onChange={handleChange} name="gender" label="Select your Gender">
                                <Radio value="male">male</Radio>
                                <Radio value="female">female</Radio>
                                <Radio value="other">other</Radio>
                            </RadioGroup>
                        </div>

                        <div>
                            <Select
                                name="country"
                                onChange={handleChange}
                                className="max-w-xs"
                                label="country"
                                placeholder="Select your country"
                            >
                                {countries.map((country) => (
                                    <SelectItem key={country.key}>{country.label}</SelectItem>
                                ))}
                            </Select>
                        </div>

                        <Textarea
                            onChange={handleChange}
                            name="description"
                            placeholder="enter your description" />

                        <Button type='submit'>Submit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
