import { useFormik } from "formik";
import React from "react";
const initialValues = {
  username: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("User", values);
};
const validate = (values) => {
  let errors = {};
  if (!values.username) {
    errors.username = "This is required";
  }
  if (!values.email) {
    errors.email = "This is required";
  }
  if (!values.channel) {
    errors.channel = "This is required";
  }
  return errors;
};
const Formik = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("formik values", formik.errors);
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <p className="text-red-500 text-xs italic">
              {formik.errors.username}
            </p>
          ) : null}
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            class="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
          ) : null}
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="channel"
          >
            Channel
          </label>
          <input
            class="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="channel"
            type="text"
            name="channel"
            placeholder="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
          {formik.touched.channel && formik.errors.channel ? (
            <p className="text-red-500 text-xs italic">
              {formik.errors.channel}
            </p>
          ) : null}
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formik;
