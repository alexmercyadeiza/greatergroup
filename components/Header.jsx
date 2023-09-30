import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();

  // const menu = document.querySelector(".group");

  // menu.addEventListener("mouseover", () => {
  //   menu.classList.add("group-hover");
  // });

  // menu.addEventListener("mouseout", () => {
  //   menu.classList.remove("group-hover");
  // });

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileActive = "";
  const mobileInactive = "";

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // reset when component unmounts
    };
  }, [showMobileMenu]);

  return (
    <>
      {showMobileMenu && (
        <div className="fixed left-0 top-0 flex h-screen w-full flex-col justify-between bg-black text-white">
          <div>
            <div
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="grid place-items-end p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 cursor-pointer hover:opacity-50"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="grid space-y-4 p-6 font-medium uppercase tracking-widest">
              <div
                onClick={() => router.push("/")}
                className={
                  router.pathname == "/" ? mobileActive : mobileInactive
                }
              >
                Home
              </div>
              <div
                onClick={() => router.push("/about")}
                className={
                  router.pathname == "/about" ? mobileActive : mobileInactive
                }
              >
                About
              </div>
              <div
                onClick={() => router.push("/subsidiaries")}
                className={
                  router.pathname == "/subsidiaries"
                    ? mobileActive
                    : mobileInactive
                }
              >
                Subsidiaries
              </div>
              <div
                onClick={() => router.push("/career")}
                className={
                  router.pathname == "/career" ? mobileActive : mobileInactive
                }
              >
                Career
              </div>
              <div
                onClick={() => router.push("/contact")}
                className={
                  router.pathname == "/contact" ? mobileActive : mobileInactive
                }
              >
                Contact
              </div>
            </div>
          </div>

          <div className="mt-28 space-y-10 bg-gradient-to-r from-dark-blue to-blue-500 px-10 pb-10 pt-10 text-white">
            <div className="border-white border-opacity-30 space-y-6">
              <div className="text-xs">
                Greater Group 2023 &copy; All rights reserved.
              </div>
            </div>
          </div>
        </div>
      )}

      <div class="grid grid-cols-2">
        <img
          onClick={() => router.push("/")}
          class="w-56"
          src="https://res.cloudinary.com/damms5yog/image/upload/v1695260368/gg/gg-logo_xrs4kk.svg"
          alt=""
        />

        <div
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="md:hidden block justify-self-end place-self-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="text-white w-6 fill-current"
          >
            <path d="M120-680v-80h720v80H120Zm0 480v-80h720v80H120Zm0-240v-80h720v80H120Z" />
          </svg>
        </div>

        <div class="hidden items-center space-x-24 justify-self-end font-medium text-white md:flex">
          <div class="cursor-pointer" onClick={() => router.push("/")}>
            Home
          </div>
          <div class="relative flex items-center group space-x-2">
            <div class="cursor-pointer">Company</div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mt-1 w-6 -rotate-90 group-hover:rotate-0 transform fill-current text-white"
              viewBox="0 -960 960 960"
            >
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>

            <div class="absolute top-6 left-0 w-40 hidden group-hover:block rounded-md bg-white capitalize text-black">
              <div class="space-y-2 p-3 text-sm">
                <div
                  onClick={() => router.push("/about")}
                  class="cursor-pointer"
                >
                  about us
                </div>
                <div
                  onClick={() => router.push("/subsidiaries")}
                  class="cursor-pointer"
                >
                  our subsidiaries
                </div>
                <div
                  onClick={() => router.push("/career")}
                  class="cursor-pointer"
                >
                  careers
                </div>
              </div>
            </div>
          </div>

          <div class="cursor-pointer" onClick={() => router.push("/contact")}>
            Contact
          </div>
        </div>
      </div>
    </>
  );
}
