import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [subMenu, setSubMenu] = useState(-1);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = (menuIndex) => {
    setMenuOpen(true);
    setSubMenu(menuIndex);
  };

  const handleCloseMenu = (menuIndex) => {
    setMenuOpen(false);
    setSubMenu(menuIndex);
  };

  return (
    <header className="container text-black w-4/5 mx-auto py-4 flex items-center justify-between">
      <NavLink to="/">
        <img className="w-44" src="images/taxpire-logo.svg" />
      </NavLink>
      <nav>
        <ul className="flex items-center justify-center text-base font-medium">
          <li className="relative group px-3 py-2 cursor-pointer hover:text-tp-sky-blue">
            <button className="flex items-center">
              <p>File Taxes</p>{" "}
              <MdKeyboardArrowDown
                size={22}
                className="group-hover:rotate-180"
              />
            </button>
            <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-max transform">
              <div className="relative top-6 p-6 bg-white border-1 rounded-xl shadow-xl w-full">
                <div className="relative z-10">
                  <div>
                    <ul className="text-lg">
                      <li className="flex items-center p-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600">
                        <img
                          className="w-10 mr-4"
                          src="images/icons/tax-icon.svg"
                        />
                        <NavLink to="/pricing">
                          {" "}
                          ITR
                          <p className="text-gray-600 font-normal text-sm">
                            File ITR with expert assistance
                          </p>
                        </NavLink>
                      </li>

                      <li className="flex items-center mt-4 p-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600">
                        <img
                          className="w-10 mr-4 object-cover"
                          src="images/icons/gst-icon.svg"
                        />
                        <NavLink to="/gstpricing/gstregistration">
                          {" "}
                          GST
                          <p className="text-gray-600 font-normal text-sm">
                            Error free GST filing
                          </p>
                        </NavLink>
                      </li>

                      <li className="flex items-center mt-4 p-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600">
                        <img
                          className="w-10 mr-4"
                          src="images/icons/tds-icon.svg"
                        />
                        <NavLink to="/tdspricing/tds-on-salary-payments">
                          {" "}
                          TDS
                          <p className="text-gray-600 font-normal text-sm">
                            e-TDS filing for businesses
                          </p>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li
            onMouseLeave={() => handleCloseMenu()}
            className="relative group px-3 py-2 cursor-pointer hover:text-tp-sky-blue"
          >
            <button className="flex items-center">
              <p>Business Setup</p>{" "}
              <MdKeyboardArrowDown
                size={22}
                className="group-hover:rotate-180"
              />
            </button>
            <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-max transform">
              <div className="relative top-6 border-1 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="relative z-10">
                  <div
                    className={`grid ${
                      menuOpen ? "grid-cols-2" : "grid-cols-1"
                    } gap-6`}
                  >
                    <div>
                      <ul className="text-lg">
                        <li
                          onMouseEnter={() => handleMenu(0)}
                          className="flex items-center p-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600"
                        >
                          <img
                            className="w-10 mr-4"
                            src="images/icons/business-icon.svg"
                          />
                          <NavLink to="businesspricing/private-limited-company">
                            Business Registration
                            <p className="text-gray-600 font-normal text-sm">
                              Register your dream startup
                            </p>
                          </NavLink>
                        </li>

                        <li
                          onMouseEnter={() => handleMenu(1)}
                          className="flex items-center mt-4 p-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600"
                        >
                          <img
                            className="w-10 mr-4"
                            src="images/icons/license-icon.svg"
                          />
                          <a href="#">
                            {" "}
                            Licenses and Registrations
                            <p className="text-gray-600 font-normal text-sm">
                              Get necessary licenses online
                            </p>
                          </a>
                        </li>

                        <li
                          onMouseEnter={() => handleMenu(2)}
                          className="flex items-center mt-4 p-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600"
                        >
                          <img
                            className="w-10 mr-4"
                            src="images/icons/international-icon.svg"
                          />
                          <a href="#">
                            {" "}
                            International Business Setup
                            <p className="text-gray-600 font-normal text-sm">
                              Setup your business abroad
                            </p>
                          </a>
                        </li>

                        <li
                          onMouseEnter={() => handleMenu(3)}
                          className="flex items-center mt-4 p-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600"
                        >
                          <img
                            className="w-10 mr-4"
                            src="images/icons/web-icon.svg"
                          />
                          <a href="#">
                            {" "}
                            Web Development
                            <p className="text-gray-600 font-normal text-sm">
                              Web solutions for your business
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {menuOpen && (
                      <div>
                        {subMenu === 0 && (
                          <div className="text-lg">
                            <p className="uppercase tracking-wider text-gray-500 font-semibold text-base border-b-1 py-2">
                              Business Registration
                            </p>
                            <ul className="text-base mt-2">
                              <li>
                                <NavLink
                                  to="businesspricing/private-limited-company"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {" "}
                                  Private Limited Company
                                </NavLink>
                              </li>

                              <li>
                                <NavLink
                                  to="businesspricing/public-limited-company"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {" "}
                                  Public Limited Company
                                </NavLink>
                              </li>

                              <li>
                                <NavLink
                                  to="businesspricing/limited-liability-partnership-(llp)"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {" "}
                                  Limited Liability Partnership
                                </NavLink>
                              </li>

                              <li>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {" "}
                                  One Person Company
                                </a>
                              </li>

                              <li>
                                <NavLink
                                  to="businesspricing/proprietorship"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {" "}
                                  Sole Proprietorship
                                </NavLink>
                              </li>

                              <li>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {" "}
                                  Section 8 Company
                                </a>
                              </li>

                              <li>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {" "}
                                  Partnership Firm
                                </a>
                              </li>
                            </ul>
                          </div>
                        )}

                        {subMenu === 1 && (
                          <div className="text-lg">
                            <p className="uppercase tracking-wider text-gray-500 font-semibold text-base border-b-1 py-2">
                              Licenses and Registrations
                            </p>
                            <ul className="text-base mt-2">
                              <li>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {" "}
                                  Digital Signature Certificate
                                </a>
                              </li>

                              <li>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {" "}
                                  Udyam Registration
                                </a>
                              </li>

                              <li>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {" "}
                                  MSME Registration
                                </a>
                              </li>

                              <li>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {" "}
                                  Trademark Registration
                                </a>
                              </li>
                            </ul>
                          </div>
                        )}

                        {subMenu === 2 && (
                          <div className="text-lg">
                            <p className="uppercase tracking-wider text-gray-500 font-semibold text-base border-b-1 py-2">
                              International Business Setup
                            </p>
                            <ul className="text-base mt-2">
                              <li>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {" "}
                                  UAE Company Incorporation
                                </a>
                              </li>
                            </ul>
                          </div>
                        )}

                        {subMenu === 3 && (
                          <div className="text-lg">
                            <p className="uppercase tracking-wider text-gray-500 font-semibold text-base border-b-1 py-2">
                              Web Development
                            </p>
                            <ul className="text-base mt-2">
                              <li>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  {" "}
                                  Web/E-Commerce Website Development
                                </a>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="relative group px-3 py-2 cursor-pointer hover:text-tp-sky-blue">
            <button className="flex items-center">
              <p>Company</p>{" "}
              <MdKeyboardArrowDown
                size={22}
                className="group-hover:rotate-180"
              />
            </button>
            <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-max transform">
              <div className="relative top-6 p-6 border-1 bg-white rounded-xl shadow-xl w-full">
                <div className="relative z-10">
                  <div>
                    <ul className="text-lg">
                      <li className="flex items-center p-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600">
                        <img
                          className="w-10 mr-4"
                          src="images/icons/about-icon.svg"
                        />
                        <NavLink to="/about">
                          {" "}
                          About Us
                          <p className="text-gray-600 font-normal text-sm">
                            Learn how we’re different and meet our team
                          </p>
                        </NavLink>
                      </li>

                      <li className="flex items-center p-2 mt-4 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600">
                        <img
                          className="w-10 mr-4"
                          src="images/icons/carrer-icon.svg"
                        />
                        <NavLink to="https://recruit.finpire.in">
                          {" "}
                          Carrers
                          <p className="text-gray-600 font-normal text-sm">
                            We’re hiring! Come join our growing team
                          </p>
                        </NavLink>
                      </li>

                      <li className="flex items-center p-2 mt-4 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600">
                        <img
                          className="w-10 mr-4"
                          src="images/icons/partner-icon.svg"
                        />
                        <a href="#">
                          {" "}
                          Partner With Us
                          <p className="text-gray-600 font-normal text-sm">
                            Maximize your revenue and client value
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="relative group px-3 py-2 cursor-pointer hover:text-tp-sky-blue">
            <button className="flex items-center">
              <p>Resources</p>{" "}
              <MdKeyboardArrowDown
                size={22}
                className="group-hover:rotate-180"
              />
            </button>
            <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-max transform">
              <div className="relative top-6 border-1 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="relative z-10">
                  <div>
                    <ul className="text-lg">
                      <li className="flex items-center p-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600">
                        <img
                          className="w-10 mr-4"
                          src="images/icons/blogs-icon.svg"
                        />
                        <NavLink to="/blogs">
                          {" "}
                          Blogs
                          <p className="text-gray-600 font-normal text-sm">
                            Read latest news, customer success stories
                          </p>
                        </NavLink>
                      </li>

                      <li className="flex items-center p-2 mt-4 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600">
                        <img
                          className="w-10 mr-4"
                          src="images/icons/support-icon.svg"
                        />
                        <NavLink to="/support">
                          {" "}
                          Support
                          <p className="text-gray-600 font-normal text-sm">
                            Raise a query
                          </p>
                        </NavLink>
                      </li>

                      <li className="flex items-center p-2 mt-4 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-bold hover:text-indigo-600">
                        <img
                          className="w-10 mr-4"
                          src="images/icons/knowledge-icon.svg"
                        />
                        <NavLink to="https://support.taxpire.in/portal/en/kb">
                          {" "}
                          Knowledge Center
                          <p className="text-gray-600 font-normal text-sm">
                            Enhance your knowledge with us
                          </p>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex items-center">
          <li>
            <NavLink
              to="https://subscriptions.finpire.in/portal/finpire/login"
              className="rounded-full px-3 py-2 font-medium bg-white bg-opacity-10 flex items-center group"
            >
              Sign in
            </NavLink>
          </li>

          <li>
            <a
              href="#"
              className="ml-4 bg-tp-sky-blue text-base text-white px-6 py-3 font-medium rounded-full mr-8 transition-all hover:bg-tp-blue hover:ease-in-out hover:duration-500"
            >
              Start your business
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
