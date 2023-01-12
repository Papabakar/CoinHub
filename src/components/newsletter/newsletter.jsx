import React, { useState } from "react";
import addEmailSubscriber from "../../backend/functions/emails/addEmail";
import { checkIfEmailIsValid } from "../../backend/functions/emails/checkEmailIsValid";
import './newsletter.style.scss'

const BlogNewsletter = () => {
  const [email, setEmail] = useState("");
  const [emailState, setEmailState] = useState("");


  return (
    <section className="bg-orangeBg" id="news">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>

            <div className="items-center mx-auto mb-1.5 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <p className={`ml-2 ${emailState === "Invalid Email" ? "text-red-500" : "text-green-500"} mb-0.5 mx-auto text-start text-xs xl:text-sm max-w-2xl font-light sm:text-lg `}>
                    {emailState && '*'}{emailState}
                  </p>
                <div className="relative">
                  <input
                    className="block rounded-2xl p-3 w-full text-sm text-white border border-gray-300 focus:border-primary-500 bg-card-bg dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                   

                  <button
                    // type="submit"
                    className="primary scale-[80%] absolute -right-1 top-1/2 -translate-y-1/2"
                    onClick={async () => {
                      //check if email is valid
                      if (checkIfEmailIsValid(email)) {
                        setEmailState("Adding Email")
                        await addEmailSubscriber({ email: email });
                        setEmailState("Congratulations, you are now subscribed!")
                      } else {
                        setEmailState("Invalid Email")
                      }
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="mx-auto flex justify-center items-center text-center max-w-screen-sm text-sm text-gray-500 newsletter-form-FooterMenu dark:text-gray-300">
              We promise not to spam your inbox with junk!
            </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;
