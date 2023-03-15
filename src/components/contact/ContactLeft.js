import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ali VahidiMehr</h3>
        <p className="text-lg font-normal text-gray-400">
          Mathematician & Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-gray-400 ">2000avm2000@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base text-gray-400 uppercase font-titleFont mb-4">Fill this form to contact me:</h2>
      </div>
    </div>
  );
}

export default ContactLeft