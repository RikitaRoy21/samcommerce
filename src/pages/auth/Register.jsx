import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
      <div class="max-h-screen">
            <section class="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
                <div class="bg-gray-100 p-5 flex rounded-2xl flex-row flex-row-reverse shadow-lg max-w-3xl">
                    <div class="md:w-1/2 px-5 pl-10">
                        <h2 class="text-2xl font-bold text-[#002D74]">Register</h2>
                        <p class="text-sm mt-4 text-[#002D74]">If you don't have an account, please Register</p>
                        <form class="mt-6" action="#" method="POST">
                            <div>
                                <label class="block text-gray-700">Email Address</label>
                                <input type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>

                            <div class="mt-4">
                                <label class="block text-gray-700">Password</label>
                                <input type="password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required />
                            </div>
                            <div class="mt-4">
                                <label class="block text-gray-700">Password</label>
                                <input type="password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required />
                            </div>


                            <button type="submit" class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Register</button>
                        </form>

                       

                        <div class="text-sm flex justify-between items-center mt-3">
                            <p>If you already have an account...</p>
                            <Link to="/login" class="py-2 px-5 ml-3 bg-blue-400  border rounded-xl hover:scale-110 duration-300 border-blue-400  ">Login</Link>
                        </div>
                    </div>

                    <div class="w-1/2 md:block hidden ">
                        <img src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" class="rounded-2xl" alt="page img" />
                    </div>

                </div>
            </section>
        </div>
  )
}

export default Register