import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";
import { linksData } from "./LinksData";

function MobileNav({ setMobileMenuOpen }) {
  const [subMenuStates, setSubMenuStates] = useState(Array(5).fill(false));
  const [superMenuStates, setSuperMenuStates] = useState(Array(4).fill(false));

  const toggleSubMenuAccordion = (index) => {
    const newSubMenuStates = [...subMenuStates];
    newSubMenuStates.forEach((_, i) => {
      if (i !== index) {
        newSubMenuStates[i] = false;
      }
    });
    newSubMenuStates[index] = !newSubMenuStates[index];
    setSubMenuStates(newSubMenuStates);

    const newSuperMenuStates = superMenuStates.map(() => false);
    setSuperMenuStates(newSuperMenuStates);
  };

  const toggleSuperMenuAccordion = (index) => {
    const newSuperMenuStates = [...superMenuStates];
    newSuperMenuStates.forEach((_, i) => {
      if (i !== index) {
        newSuperMenuStates[i] = false;
      }
    });
    newSuperMenuStates[index] = !newSuperMenuStates[index];
    setSuperMenuStates(newSuperMenuStates);
  };

  const scrollToTop = () => {
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className="xl:hidden block absolute left-0 top-20 w-full h-screen bg-white text-tp-black z-20"
    >
      <ul className="flex flex-col justify-center md:text-base py-3 text-sm w-4/5 mx-auto">
        {linksData.map((item, index) => {
          return (
            <li key={index} className="border-b-1 py-3">
              <div
                onClick={() => toggleSubMenuAccordion(index)}
                className="flex items-center justify-between py-3 cursor-pointer md:text-lg text-base font-semibold"
              >
                <p>{item.name}</p>{" "}
                <MdKeyboardArrowDown
                  size={24}
                  className={`${subMenuStates[index] && "rotate-180"}`}
                />
              </div>

              {subMenuStates[index] && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: { duration: 0.25 },
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="md:text-base text-sm md:py-3 py-1"
                >
                  {item.subMenus.map((subMenu, index) => {
                    return (
                      <li
                        key={index}
                        className="p-1"
                        onClick={() => toggleSuperMenuAccordion(index)}
                      >
                        <NavLink
                          to={subMenu.link}
                          onClick={scrollToTop}
                          className="flex items-center gap-2 text-gray-800 font-semibold md:p-3 p-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 hover:text-indigo-600"
                        >
                          <img
                            className="w-8"
                            src={`images/icons/${subMenu.icon}`}
                          />
                          <div>
                            {" "}
                            {subMenu.name}
                            <p className="text-gray-600 font-normal text-sm">
                              {subMenu.description}
                            </p>
                          </div>
                        </NavLink>

                        {subMenu.superSubMenu && superMenuStates[index] && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{
                              opacity: 0,
                              height: 0,
                              transition: { duration: 0.2 },
                            }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="md:text-base text-sm py-3"
                          >
                            {subMenu.superSubMenu.map((superSubMenu, index) => {
                              return (
                                <li
                                  key={index}
                                  className="text-gray-800 font-medium md:p-3 p-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 hover:text-indigo-600"
                                >
                                  <NavLink
                                    onClick={scrollToTop}
                                    to={superSubMenu.link}
                                  >
                                    {" "}
                                    {superSubMenu.name}
                                  </NavLink>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </li>
          );
        })}

        <div className="flex items-center justify-between mt-6">
          <li className="md:py-6 py-4">
            <NavLink
              to="https://subscriptions.finpire.in/portal/finpire/login"
              className="md:text-lg text-base py-2 font-semibold bg-white bg-opacity-10"
            >
              Sign in
            </NavLink>
          </li>

          <li className="mt-4">
            <a
              href="#"
              className="bg-tp-sky-blue md:text-lg text-base text-white px-6 py-3 font-medium rounded-full transition-all hover:bg-tp-blue hover:ease-in-out hover:duration-500"
            >
              Start your business
            </a>
          </li>
        </div>
      </ul>
    </motion.nav>
  );
}

export default MobileNav;
