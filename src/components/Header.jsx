import React, { useEffect, useRef, useState } from "react";
import { HStack, VStack } from "@chakra-ui/react";
import logo from "../images/Logos/logo_large(tiny).png";
import { Divide as Hamburger } from "hamburger-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import resume from "../assets/01Dagime_Resume.pdf";
import { Link } from "react-scroll";

const Header = () => {
  const [toggled, setToggled] = useState(false);
  const [navLinks, setLinks] = useState([
    {
      text: "About",
      href: "#About-section",
      active: false,
    },
    {
      text: "Projects",
      href: "#Projects-section",
      active: false,
    },
    {
      text: "Experience",
      href: "#Timeline-section",
      active: false,
    },
    {
      text: "Contact Me",
      href: "#contacts-section",
      active: false,
    },
  ]);
  const setOpen = () => {
    setToggled(!toggled);
  };

  const boxRef = useRef(null);
  const handleClick = (anchor) => {
    setToggled(false);
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

  useEffect(() => {
    let lastScrollPos = 0;
    function handleScroll() {
      const currentScorllPos = window.scrollY;
      if (currentScorllPos > lastScrollPos) {
        boxRef.current.style.transform = "translateY(-200px)";
      } else {
        boxRef.current.style.transform = "translateY(0)";
      }
      lastScrollPos = currentScorllPos;
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className="z-50 bg-white fixed ease-in-out duration-300 w-full  min-w-36 px-5 sm:px-5 md:px-16 lg:px:20 xl:px-48 "
    >
      <div className="m-auto flex max-w-screen-2xl content-between w-full py-5 items-center">
        <div className="w-1/2">
          <Link to="Landing-Section" smooth={true} duration={500}>
            <img
              className="w-40 cursor-pointer"
              src={logo}
              alt="log of Dagime Teshome"
              onClick={(e) => {
                e.preventDefault();
                setActive("Landing-section");
              }}
            ></img>
          </Link>
        </div>
        <div className="w-1/2">
          <nav className="hidden lg:flex lg:items-center gap-5 text-sm justify-end">
            <HStack spacing={8}>
              {navLinks.map((link, i) => {
                return (
                  <Link
                    to={link.href}
                    smooth={true}
                    duration={500}
                    className={`flex ${
                      link.active
                        ? "underline decoration-2 underline-offset-8 font-bold"
                        : ""
                    } items-center gap-1 hover:text-neutral-400 transition-all`}
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
              <a href={resume} target="blank">
                {" "}
                <button
                  className="rounded-xl p-4 font-semibold text-neutral-50 bg-neutral-950 transition duration-700 ease-in-out
              hover:-translate-y-1 hover:scale-110"
                >
                  Resume
                </button>
              </a>
            </HStack>
          </nav>
          <div className="flex w-full justify-end lg:hidden">
            <Sheet open={toggled} onOpenChange={setOpen}>
              <SheetTrigger>
                <Hamburger toggled={toggled} toggle={setOpen} />
              </SheetTrigger>
              <SheetContent side={"left"}>
                <div className="flex flex-col mt-6 justify-between">
                  <VStack spacing={8}>
                    {navLinks.map((link, i) => {
                      return (
                        <Link
                          to={link.href}
                          smooth={true}
                          duration={500}
                          className="flex items-center gap-1 hover:text-neutral-400 transition-all"
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
                    <a className="w-full" href={resume} target="blank">
                      {" "}
                      <button className="w-full rounded-xl p-4 font-semibold text-neutral-50 bg-neutral-950 mt-10 ">
                        Resume
                      </button>
                    </a>
                  </VStack>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
