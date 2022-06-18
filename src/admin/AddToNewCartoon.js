import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { AddtonewCartoons, db } from "../config/firebase";
import { getDoc, doc, onSnapshot } from "firebase/firestore";
// import Cartoon from "../components/Cartoon";
import Newcartoonservices from "../services/Newcartoonservices";
const initialValues = {
  description: "",
  details: "",
  imageURL: "",
  name: "",
  // ratings: [],
  seasons: "",
};
const onSubmit = async (values) => {
  try {
    await Newcartoonservices.addNewCartoon(values);
    console.log("successfully added");
  } catch (error) {
    console.log(error);
  }
};
const AddToNewCartoon = () => {
  const [cartoon, setCartoons] = useState();
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  const getCartoons = async () => {
    const cartoons = await Newcartoonservices.getAllNewCartoon();

    setCartoons(cartoons.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(cartoon, "kfk");
  };
  useEffect(() => {
    getCartoons();
  }, []);
  // useEffect(() => {
  //   const name = formik.values.name;
  //   const docSnap = onSnapshot(
  //     doc(db, "New cartoons", `${cartoon.name}`),
  //     (doc) => {
  //       console.log(doc);
  //     }
  //   );
  // }, [formik.values.name]);

  console.log("yeah", formik.values);
  return (
    <div>
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <form onSubmit={formik.handleSubmit}>
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <input
                type="text"
                class="form-control
                     block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="description"
                aria-describedby="emailHelp123"
                placeholder="desc"
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="text"
                class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Name of Cartoon"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
          </div>
          <div class="form-group mb-6">
            <input
              type="text"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput125"
              placeholder="details of CArtoon"
              name="details"
              onChange={formik.handleChange}
              value={formik.values.details}
            />
          </div>
          <div class="form-group mb-6">
            <input
              type="text"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput126"
              placeholder="imageUrl"
              name="imageURL"
              onChange={formik.handleChange}
              value={formik.values.imageURL}
            />
          </div>
          <div class="form-group mb-6">
            <input
              type="text"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="season"
              placeholder="Season"
              name="seasons"
              onChange={formik.handleChange}
              value={formik.values.seasons}
            />
          </div>
          <div class="form-group form-check flex  items-center justify-center text-center mb-6">
            <input
              type="checkbox"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck25"
              checked
            />
            <input
              type="checkbox"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck25"
              checked
            />
            <input
              type="checkbox"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck25"
              checked
            />
            <input
              type="checkbox"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck25"
              checked
            />
            <input
              type="checkbox"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck25"
              checked
            />
          </div>
          <button
            type="submit"
            class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Sign up
          </button>
        </form>
        <h1></h1>
      </div>
    </div>
  );
};

export default AddToNewCartoon;
