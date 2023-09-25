import { useRouter } from "next/router";


export default function Header() {
  const router = useRouter();

  // const menu = document.querySelector(".group");

  // menu.addEventListener("mouseover", () => {
  //   menu.classList.add("group-hover");
  // });

  // menu.addEventListener("mouseout", () => {
  //   menu.classList.remove("group-hover");
  // });
  
  return (
    // <div className="grid grid-cols-2">
    //   <img
    //     className="w-56"
    //     src="https://res.cloudinary.com/damms5yog/image/upload/v1695260368/gg/gg-logo_xrs4kk.svg"
    //     alt=""
    //   />

    //   <div className="hidden items-center space-x-24 justify-self-end font-medium text-white md:flex">
    //     <div>Home</div>
    //     <div className="flex items-center space-x-2">
    //       <div className="cursor-pointer">Company</div>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="mt-1 w-6 -rotate-90 transform fill-current text-white"
    //         viewBox="0 -960 960 960"
    //       >
    //         <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
    //       </svg>
    //     </div>
    //     <div>Contact</div>
    //   </div>
    // </div>

    <div class="grid grid-cols-2">
      <img
        onClick={() => router.push('/')}
        class="w-56"
        src="https://res.cloudinary.com/damms5yog/image/upload/v1695260368/gg/gg-logo_xrs4kk.svg"
        alt=""
      />

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
              <div onClick={() => router.push("/about")} class="cursor-pointer">
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
  );
}
