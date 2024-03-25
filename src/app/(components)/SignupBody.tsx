"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupBody() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log(data)
    axios.post('/api/registerApi', data)
    .then(() => setData({first_name:'',last_name:'', email:'',password:''}))
    .then(() => toast.success('Registration is successful! Proceed to login🎉'))
    .catch(() => toast.error('Something went wrong😔!'))
 }


  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen border border-red-800 bg-cover"
        style={{ backgroundImage: 'url("./medics1.jpg")' }}
      >
        <div className="w-full sm:max-w-sm p-4 bg-light-grey rounded-lg bg-opacity-35">
          <h2 className="text-2xl font-bold text-white text-center">
            Create your account!
          </h2>

          <form className="mt-4 space-y-6" onSubmit={registerUser}>
            <div className=" p-2">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium leading-6 text-white"
              >
                First Name
              </label>

              <div className="mt-1">
                <input
                  placeholder=" e.g. John"
                  id="first_name"
                  name="first_name"
                  type="text"
                  value={data.first_name}
                  onChange={(e) => setData({ ...data, first_name: e.target.value })}
                  required
                  className="h-6 block w-full rounded-sm border-gray-300 shadow-sm placeholder-gray-400 sm:text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
              </div>
            </div>

            <div className=" p-2">
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-white"
              >
                Last Name
              </label>

              <div className="mt-1">
                <input
                  placeholder=" e.g. Doe"
                  id="last_name"
                  name="last_name"
                  type="last_name"
                  value={data.last_name}
                  onChange={(e) => setData({ ...data, last_name: e.target.value })}
                  required
                  className="h-6 block w-full rounded-sm border-gray-300 shadow-sm placeholder-gray-400 sm:text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
              </div>
            </div>

            <div className="p-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>

              <div className="mt-1">
                <input
                  placeholder=" e.g. johndoe@gmail.com"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  required
                  className="h-6 block w-full rounded-sm border-gray-300 shadow-sm placeholder-gray-400 sm:text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
              </div>
            </div>

            <div className="p-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Password
              </label>

              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  className="h-6 block w-full rounded-sm border-gray-300 shadow-sm placeholder-gray-400 sm:text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className=" transition-transform transform-gpu hover:translate-y-1  w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-brand-blue"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
