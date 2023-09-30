import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <div className="mt-20 space-y-20 bg-black p-6 md:p-20">
      <div className="grid space-y-10 md:grid-cols-2 md:space-y-0">
        <div className="text-white">
          <img
            className="w-56"
            src="https://res.cloudinary.com/damms5yog/image/upload/v1695260368/gg/gg-logo_xrs4kk.svg"
            alt=""
          />
        </div>

        <div className="md:space-x-20 md:flex md:space-x-16 space-y-10 md:space-y-0 text-white md:place-self-end">
          <div className="space-y-3">
            <div className="text-xl font-medium">Quicklinks</div>
            <div
              className="cursor-pointer"
              onClick={() => router.push("/about")}
            >
              About
            </div>
            <div
              className="cursor-pointer"
              onClick={() => router.push("/subsidiaries")}
            >
              Subsidiaries
            </div>
            <div
              className="cursor-pointer"
              onClick={() => router.push("/career")}
            >
              Career
            </div>
            <div
              className="cursor-pointer"
              onClick={() => router.push("/contact")}
            >
              Contact
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xl font-medium">Contact</div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white p-1 inline-flex rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 fill-current text-black"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                  </svg>
                </div>
                <a href="tel:08112993143" className="block">
                  08112993143
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-white p-1 inline-flex rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 fill-current text-black"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                  </svg>
                </div>
                <a href="mailto:hello@greatergroupng.com" className="block">
                  hello@greatergroupng.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-white p-1 inline-flex rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="w-4 fill-current text-black"
                  >
                    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                  </svg>
                </div>
                <a
                  href="https://maps.app.goo.gl/tRk513FY9wqQNwEg9"
                  className="block"
                >
                  52, Abibu Adetoro Street, Off Ajose Adeogun, Victoria Island,
                  Lagos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="items-center justify-between space-y-5 md:flex md:space-y-0">
        <div className="text-xs text-white">
          &copy; Copyright 2023. The Greater Group
        </div>

        <div className="flex items-center space-x-7">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/the.greatergroup/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/GreaterGroupGG"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/the-greater-group/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=61552028842326"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  );
}