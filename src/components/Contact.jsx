import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const serviceId = import.meta.env.VITE_API_YOUR_SERVICE_ID;
  const templateId = import.meta.env.VITE_API_YOUR_TEMPLATE_ID;
  const userId = import.meta.env.VITE_API_YOUR_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: userId,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Message sent successfully!")
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Something went wrong try again!")
        },
      );
    };
  // [#333143]


  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full flex flex-col items-center justify-around gap-2 max-sm:gap-1 px-4 py-4"
      action="#"
    >
      <ToastContainer />
      <h1 className="uppercase text-xl font-bold text-textColor">
        Contact Me
      </h1>
      <div className="flex flex-col w-full justify-around items-center">
        <div className="flex flex-col w-full text-xl mb-4 gap-2">
          <label htmlFor="name" className="text-[15px] text-textColor">
            Name
          </label>
          <input
            className=" w-full text-textColor bg-[#181818] border border-[#333143] text-[15px] max-sm:text-xs px-4  py-1 outline-none rounded-full"
            type="text"
            id="name"
            name="user_name"
            required
          />
        </div>
        <div className="flex flex-col w-full text-xl mb-4 gap-2 ">
          <label htmlFor="email" className="text-[15px] text-textColor">
            Email
          </label>
          <input
            className=" w-full text-textColor bg-[#181818] border border-[#333143] text-[15px] max-sm:text-xs px-4  py-1 outline-none rounded-full"
            type="email"
            id="email"
            name="user_email"
            required
          />
        </div>
      </div>
      <div className="flex flex-col mb-4 text-xl w-full gap-2">
        <label htmlFor="message" className="text-[15px] text-textColor">
          Message
        </label>
        <textarea
          className="rounded-xl text-textColor bg-[#181818] border border-[#333143] outline-none text-[15px] max-sm:text-xs px-2 py-2"
          rows={"5"}
          name="message"
          id="message"
        ></textarea>
      </div>
      {/* <button className="w-full cursor-pointer bg-activeColor text-actionColor hover:text-actionColor border border-activeColor hover:border-actionColor px-4 py-2 rounded-sm">
        Submit
      </button> */}
      <button className="button-86" type="submit">Send</button>
    </form>
  );
};

export default Contact;
