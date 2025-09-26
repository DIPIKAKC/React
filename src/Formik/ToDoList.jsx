import { Button, Input } from "@heroui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((list) => list.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h1 className="font-bold text-3xl text-center mb-6 text-gray-700">
        ✅ To-Do List
      </h1>

      {/* Formik Input */}
      <Formik
        initialValues={{ todolist: "" }}
        onSubmit={(val, { resetForm }) => {
          if (val.todolist.trim() === "") return;
          setTodos((prev) => [
            ...prev,
            { todolist: val.todolist, id: uuidv4() },
          ]);
          resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Form
            onSubmit={handleSubmit}
            className="flex gap-3 items-center mb-6"
          >
            <Input
              variant="bordered"
              onChange={handleChange}
              label="Add a task"
              name="todolist"
              value={values.todolist}
              className="flex-1"
            />
            <Button type="submit" color="primary" className="px-5">
              Add
            </Button>
          </Form>
        )}
      </Formik>

      {/* Todo List */}
      <ul className="space-y-3">
        {todos.length === 0 ? (
          <p className="text-gray-400 text-center italic">
            No tasks yet. Add one above!
          </p>
        ) : (
          todos.map((list) => (
            <li
              key={list.id}
              className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              <span className="text-gray-700">{list.todolist}</span>
              <Button
                size="sm"
                color="danger"
                onPress={() => handleDelete(list.id)}
              >
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}