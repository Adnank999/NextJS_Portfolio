"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Contact = () => {

  const notify = () => toast("Thank you!Recieved your message");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   

  

    emailjs
      .sendForm(
        "service_zsvnm8s",
        "template_hdz8dfl",
        form.current,
        "Xl898hXMJBnoFcmHf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="xs:ml-8 md:mb-20 ml-40 bg-black  ">
      <div className="lg:py-2 px-4 sm:px-8 md:px-20 lg:px-20 xl:px-32 h-screen mr-6 max-w-full md:max-w-screen-md border-cyan-500/50 border-solid border-2 rounded-lg">
        <h2 className="mb-4 mt-6 text-2xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let me know how can I help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            />
          </div>
          <input
            type="submit"
            value="  Send
            message"
            onClick={notify}
            className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black border-cyan-500/50 border-solid border-2 hover:shadow-md hover:shadow-purple-600 dark:focus:ring-blue-800"
          
          />


            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
     

          <Link href="/"></Link>
        </form>
      </div>
    </section>
  );
};

export default Contact;
