import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Menu,
  User,
  Heart,
  Home,
  LogOut,
  List,
  ListCheckIcon,
  Plus,
  PlusCircle,
  Album,
  Book,
  ClipboardList,
  BedDouble,
  Cross,
  CrossIcon,
  X,
  CircleUserRound,
  UserCircle,
  Briefcase,
  CalendarCheck,
  LayoutDashboard,
} from "lucide-react";
import { useContext } from "react";
import AppContext from "../context/AuthContext.jsx";
import BecomeHostModal from "./BecomeHostModal.jsx";
import { useEffect } from "react";
import useWishlist from "../hooks/useWishlist.js";

export const Header = () => {
  const { token, user, setToken, setUser } = useContext(AppContext);

  const { wishlist } = useWishlist(token);
  console.log(wishlist);
  // const { getWishlist } = useWishlist();
  // const [showHostModal, setShowHostModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!location.trim()) return;
    navigate(`/all-listings?location=${encodeURIComponent(location.trim())}`);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
      const menuButton = document.querySelector(".mobile-menu-button");
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    navigate("/");
    setShowUserMenu(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* <BecomeHostModal
        isOpen={showHostModal}
        onClose={() => setShowHostModal(false)}
        onBecomeHost={async () => {
          setShowHostModal(false);
        }}
      /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-red-500" />
            <span className="text-xl font-bold text-gray-900">StayFindz</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          {/* <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                onClick={handleSearch}
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Search destinations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50"
              />
            </div>
          </div> */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Search destinations ,Stays and places"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-50"
              />
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <div
                  className="relative cursor-pointer group"
                  onClick={() => navigate("/wishlist")}
                >
                  {/* Heart Icon with smoother animation */}
                  <Heart className="h-6 w-6 text-gray-600 group-hover:text-red-500 transition-all duration-300 ease-in-out transform group-hover:scale-110" />

                  {/* Enhanced Count Badge */}
                  {wishlist && wishlist.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold flex items-center justify-center h-5 w-5 rounded-full shadow-md group-hover:animate-pulse">
                      {wishlist.length > 9 ? "9+" : wishlist.length}
                    </span>
                  )}

                  {/* Optional tooltip */}
                  {/* <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    My Wishlist
                  </div> */}
                </div>

                {user.role == "user" ? (
                  <Link
                    to="/becomehost"
                    // onClick={handleClick}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm  hover:bg-gray-100 focus:ring-gray-500  inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none"
                  >
                    Become a Host
                  </Link>
                ) : (
                  <Link
                    to="/host/create-listing"
                    className="flex items-center space-x-1 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors"
                  >
                    <PlusCircle className="h-4 w-4" />
                    <span>Add Listing</span>
                  </Link>
                )}
                {/* ) : (
                  <Link
                    to="/"
                    onClick={() => setShowHostModal(true)}
                    // onClick={handleClick}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm  hover:bg-gray-100 focus:ring-gray-500  inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none"
                  >
                    Become a Host
                  </Link>
                )} */}

                {user.role == "host" && (
                  <Link
                    to="/host/dashboard"
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm hover:bg-gray-100 focus:ring-gray-500  inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none"
                  >
                    Host Dashboard
                  </Link>
                )}

                <div className="relative " ref={dropdownRef}>
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center hover:cursor-pointer space-x-2 text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span>{user.name}</span>
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <User className="inline h-4 w-4 mr-2" />
                        Profile
                      </Link>
                      {user.role == "host" && (
                        <Link
                          to="/host/guest-booking"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <BedDouble className="inline h-4 w-4 mr-2" />
                          Guest Bookings
                        </Link>
                      )}

                      <Link
                        to="/bookings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <ClipboardList className="inline h-4 w-4 mr-2" />
                        My Trips
                      </Link>

                      <Link
                        to="/wishlist"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <Heart className="inline h-4 w-4 mr-2" />
                        Wishlist
                      </Link>
                      <hr className="my-1 border-0.5 border-gray-200" />
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <LogOut className="inline h-4 w-4 mr-2" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ">
                    Log in
                  </button>
                </Link>
                <Link to="/register">
                  <button className=" px-4 py-2 text-sm  bg-primary text-white  hover:bg-primary-hover inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ">
                    Sign up
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div>
            {" "}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 mobile-menu-button"
            >
              {showMobileMenu ? (
                <X className="w-6 h-6 transition-transform duration-200 hover:rotate-90" />
              ) : (
                <CircleUserRound className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* {showMobileMenu && (
          <div
            className="md:hidden border-t border-gray-100 py-4"
            ref={mobileMenuRef}
          >
            <div className="space-y-3">
          
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  onClick={() => navigate("/all-listings")}
                  type="text"
                  placeholder="Search destinations ,Stays and places"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {user ? (
                <div className="flex flex-col items-center">
                  <Link
                    to="/profile"
                    className="block text-gray-600 hover:text-gray-900 py-2 text-sm font-medium"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Profile
                  </Link>
                  {user.role == "host" && (
                    <>
                      <Link
                        to="/host/dashboard"
                        className="block text-gray-600 hover:text-gray-900 py-2 text-sm font-medium"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Host Dashboard
                      </Link>

                      <Link
                        to="/host/guest-booking"
                        className="block text-gray-600 hover:text-gray-900 py-2 text-sm font-medium"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Guest Bookings
                      </Link>
                    </>
                  )}

                  <Link
                    to="/bookings"
                    className="block text-gray-600 hover:text-gray-900 py-2 text-sm font-medium"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    My Trips
                  </Link>

                  <Link
                    to="/wishlist"
                    className="block text-gray-600 hover:text-gray-900 py-2 text-sm font-medium"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Wishlist
                  </Link>
                  <Link to="/" onClick={() => setShowMobileMenu(false)}>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left text-gray-600 hover:text-gray-900 py-2 text-sm font-medium"
                    >
                      Logout
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link to="/login">
                    <button
                      onClick={() => setShowMobileMenu(false)}
                      className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 "
                    >
                      Log in
                    </button>
                  </Link>
                  <Link to="/register">
                    <button
                      onClick={() => setShowMobileMenu(false)}
                      className=" px-4 py-2 text-sm  bg-primary text-white  hover:bg-primary-hover inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 "
                    >
                      Sign up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )} */}
        {showMobileMenu && (
          <div
            className="md:hidden border-t border-gray-200 py-3 bg-white"
            ref={mobileMenuRef}
          >
            <div className="space-y-3 px-3">
              {/* Mobile search - compact but still usable */}
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  onClick={() => navigate("/all-listings")}
                  type="text"
                  placeholder="Search destinations..."
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                />
              </div>

              {user ? (
                <div className="flex flex-col space-y-2">
                  {/* Profile section */}
                  <Link
                    to="/profile"
                    className="flex items-center px-2 py-1.5 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <User className="h-4 w-4 text-gray-700 mr-2" />
                    <span className="text-gray-900 text-sm font-medium">
                      Profile
                    </span>
                  </Link>

                  {user.role == "host" && (
                    <div className="space-y-1">
                      <Link
                        to="/host/dashboard"
                        className="flex items-center px-2 py-1.5 rounded-md hover:bg-gray-50 text-gray-700 text-sm"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Host Dashboard
                      </Link>
                      <Link
                        to="/host/guest-booking"
                        className="flex items-center px-2 py-1.5 rounded-md hover:bg-gray-50 text-gray-700 text-sm"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        <BedDouble className="h-4 w-4 mr-2" />
                        Guest Requests
                      </Link>
                    </div>
                  )}

                  <Link
                    to="/bookings"
                    className="flex items-center px-2 py-1.5 rounded-md hover:bg-gray-50 text-gray-700 text-sm"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <ClipboardList className="h-4 w-4 mr-2" />
                    My Trips
                  </Link>

                  <Link
                    to="/wishlist"
                    className="flex items-center px-2 py-1.5 rounded-md hover:bg-gray-50 text-gray-700 text-sm"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Wishlist
                  </Link>

                  <button
                    onClick={() => {
                      handleLogout();
                      setShowMobileMenu(false);
                    }}
                    className="flex items-center px-2 py-1.5 rounded-md hover:bg-gray-50 text-gray-700 text-sm mt-2"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex space-x-2 pt-1">
                  <Link
                    to="/login"
                    className="flex-1"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <button className="w-full px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md border border-gray-200 transition-colors">
                      Log in
                    </button>
                  </Link>
                  <Link
                    to="/register"
                    className="flex-1"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <button className="w-full px-3 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-md transition-colors">
                      Sign up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
