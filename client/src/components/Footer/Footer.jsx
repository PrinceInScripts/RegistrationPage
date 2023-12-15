import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaHashtag } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-4 flex items-center justify-center">
  <div className="flex flex-col md:flex-row items-center justify-between md:gap-10">
    <div className="mb-4 md:mb-0 md:ml-4 flex items-center justify-center md:justify-start">
      <FaHashtag size={40} className="transform -rotate-20" />
      <p className="ml-2 text-sm">Copyright © 2023 - All rights reserved</p>
    </div>
    <div className="flex items-center mt-4 md:mt-0 md:ml-auto md:justify-end">
      <a className="mr-4"><BsTwitter size={20} /></a>
      <a className="mr-4"><BsLinkedin size={20} /></a>
      <a className="mr-4"><BsInstagram size={20} /></a>
      <a><BsFacebook size={20} /></a>
    </div>
  </div>
</footer>
  );
}

export default Footer;