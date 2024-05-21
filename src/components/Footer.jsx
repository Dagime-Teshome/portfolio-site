import React from "react";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../services/data";
import { Link } from "react-scroll";

const Footer = () => {
  const [navLinks, setLinks] = useState([
    {
      text: "About",
      href: "#About-section",
      active: false,
    },
    {
      text: "Time Line",
      href: "#Timeline-section",
      active: false,
    },
    {
      text: "Projects",
      href: "#Projects-section",
      active: false,
    },
    {
      text: "Contact Me",
      href: "#contacts-section",
      active: false,
    },
  ]);
  const handleClick = (anchor) => {
    let anc = anchor;
    const id = anc.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const setActive = (link) => {
    const newLink = [];
    navLinks.forEach((nLink) => {
      if (nLink.href === link) {
        newLink.push({
          text: nLink.text,
          href: nLink.href,
          active: true,
        });
      } else {
        newLink.push({
          text: nLink.text,
          href: nLink.href,
          active: false,
        });
      }
    });
    setLinks(newLink);
  };
  return (
    <Box backgroundColor="#18181b">
      <footer
        className="text-white flex flex-col justify-center items-center w-full p-16 gap-8 mx-auto max-w-md 
      overflow-hidden px-4 py-12 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <div className="flex  flex-wrap justify-center">
          {navLinks.map((link, i) => {
            return (
              <Link
                to="link.href"
                className="px-5 py-2"
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                  setActive(link.href);
                }}
                href={link.href}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
        <div>
          <div className="flex   space-x-5" key="index">
            {socials.map((social, i) => {
              return (
                <a
                  key={i}
                  href={social.url}
                  className="transition duration-700 ease-in-out
                hover:-translate-y-1 hover:scale-110"
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    size="2x"
                  ></FontAwesomeIcon>
                </a>
              );
            })}
          </div>
        </div>
        <p>Dagime • © 2023</p>
      </footer>
    </Box>
  );
};
export default Footer;
