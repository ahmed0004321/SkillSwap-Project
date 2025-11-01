import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-base-300 text-base-content py-10">
      <div className="max-w-[1340px] mx-auto px-4 grid gap-8 sm:grid-flow-col">

        {/* Skills */}
        <nav>
          <h6 className="footer-title">Skills</h6>
          <a className="link link-hover">Offer a Skill</a>
          <a className="link link-hover">Learn a Skill</a>
          <a className="link link-hover">Trade Skills</a>
          <a className="link link-hover">Workshops</a>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
        </nav>

        {/* Social */}
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4 mt-2">
            <a aria-label="Twitter">Twitter Icon</a>
            <a aria-label="YouTube">YouTube Icon</a>
            <a aria-label="Facebook">Facebook Icon</a>
          </div>
        </nav>

      </div>
    </footer>
  );
};

export default Footer;
