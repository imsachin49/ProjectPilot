import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const MainProfile = () => {
  return (
    <div className="relative bg-gradient-to-tr from-indigo-800 via-violet-950 to-blue-600 px-12 py-6 rounded-sm flex justify-between items-start">
      <div className="h-full self-center pr-4">
        <img
          className="w-32 h-32 object-cover rounded-full"
          src="https://media.istockphoto.com/id/1204374053/photo/profile-side-view-portrait-of-his-he-nice-attractive-skilled-focused-serious-guy-writing.jpg?s=612x612&w=0&k=20&c=ohF7qYstx9E6eJXpcQUtxFJCx9jjRBHilXcFehoOGyU="
          alt=""
        />
      </div>
      <div className="max-w-[85%]">
        <div className="flex items-center">
          <h2 className="font-semibold text-2xl">Gyanendra</h2>
          <p className="mt-2 ml-4 text-gray-400">@noobmaster432</p>
        </div>
        <p className="mt-2 font-normal italic">
          I'm a Full stack web developer and competitive programmer with a
          passion for technology and a love of tinkering. A milophile with a
          fascination for all things mechanical and a drive to learn and grow.
        </p>
        <div className="flex items-center mt-6">
          <BsGithub className="text-2xl mx-2 hover:text-slate-200 cursor-pointer hover:scale-110 transition ease-in-out" />
          <BsLinkedin className="text-2xl mx-2 hover:text-slate-200 cursor-pointer hover:scale-110 transition ease-in-out" />
          <BsTwitter className="text-2xl mx-2 hover:text-slate-200 cursor-pointer hover:scale-110 transition ease-in-out" />
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
