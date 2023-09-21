import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Greater Group</title>
      </Head>
      {/* <!-- Header --> */}
      <div className="space-y-20 bg-black p-6 md:p-20">
        <div className="grid grid-cols-2">
          <img
            className="w-56"
            src="https://res.cloudinary.com/damms5yog/image/upload/v1695260368/gg/gg-logo_xrs4kk.svg"
            alt=""
          />

          <div className="hidden items-center space-x-24 place-self-end font-medium text-white md:flex">
            <div>Home</div>
            <div className="flex items-center space-x-2">
              <div className="cursor-pointer">Company</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 w-6 -rotate-90 transform fill-current text-white"
                viewBox="0 -960 960 960"
              >
                <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
            </div>
            <div>Contact</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="space-y-10 place-self-center text-white md:space-y-16">
            <div className="space-y-4">
              <div className="text-6xl font-semibold md:text-7xl md:leading-tight">
                We <span className="text-gg_orange">Redefine</span>{" "}
                Possibilities
              </div>
              <div className="text-xl md:w-2/3">
                Forging strategic investments that help businesses flourish.
              </div>
            </div>

            <div className="bg-gg_orange inline-flex cursor-pointer items-center space-x-3 rounded-xl px-5 py-3 text-black">
              <div className="text-lg font-medium">Learn more</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 -rotate-90 transform fill-current"
                viewBox="0 -960 960 960"
              >
                <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
            </div>
          </div>

          <div className="pt-10 md:pt-0">
            <div
              className="h-[15rem] rounded-xl bg-cover bg-center md:h-[30rem]"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/damms5yog/image/upload/v1695252779/gg/Rectangle_21_lannrz.png')`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* <!-- Social Icons--> */}
      <div className="space-y bg-[#E5E5E5] py-10">
        <div className="mx-auto grid w-5/6 grid-cols-4 place-items-center gap-10">
          <img
            src="https://res.cloudinary.com/damms5yog/image/upload/v1695253270/gg/Yudala_logo-removebg-preview_1_mpb59r.png"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/damms5yog/image/upload/v1695253293/gg/SPAR_Vertical_Logo-removebg-preview_1_f6d7pt.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/damms5yog/image/upload/v1695253287/gg/Jumia_logo-removebg-preview_1_qrl8zy.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/damms5yog/image/upload/v1695253281/gg/first_bank_logo-removebg-preview_1_slgsmm.png"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/damms5yog/image/upload/v1695253263/gg/Polaris-Bank-Logo_1_ahzqud.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/damms5yog/image/upload/v1695253260/gg/MallForAfrica_logo-removebg-preview_1_vimu5u.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/damms5yog/image/upload/v1695253256/gg/shoprite_logo-removebg-preview_1_ftlcps.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/damms5yog/image/upload/v1695253254/gg/UBA_logo-removebg-preview_1_s2ryqa.png"
            alt=""
          />
        </div>
      </div>

      <div className="py-10">
        <div className="mx-auto space-y-5 p-10 md:w-2/3">
          <div className="text-center text-3xl font-semibold">
            What <span className="text-gg_orange">we</span> do
          </div>
          <div className="text-center md:text-lg">
            Our role goes beyond investment; we curate opportunities, cultivate
            potential, and incubate success. Under our resolute umbrella,
            ventures thrive, united by a shared vision of excellence. We are The
            Greater Group &mdash; a driving force in redefining possibilities.
          </div>
        </div>
      </div>

      <div className="mx-auto grid gap-6 p-6 md:w-4/5 md:grid-cols-3 md:p-0">
        <div className="space-y-5 rounded-md border-2 p-6 shadow-sm">
          <div className="inline-flex rounded-full bg-[#F1F3F5] p-4">
            <img
              src="https://res.cloudinary.com/damms5yog/image/upload/v1695257282/gg/logistics_icon_2_1_2_vmqeji.svg"
              alt=""
            />
          </div>
          <div className="text-xl font-semibold">Logistics</div>
          <div>
            A comprehensive suite of services, including courier delivery,
            haulage, logistics, air cargo operations.
          </div>
        </div>

        <div className="space-y-5 rounded-md border-2 p-6 shadow-sm">
          <div className="inline-flex rounded-full bg-[#F1F3F5] p-4">
            <img
              src="https://res.cloudinary.com/damms5yog/image/upload/v1695255338/gg/gas_cyclinder_icon_4_of0ypr.svg"
              alt=""
            />
          </div>
          <div className="text-xl font-semibold">Gas Delivery</div>
          <div>
            Our commitment extends to delivering a complete gas solution right
            to your doorstep within 30 minutes or less.
          </div>
        </div>

        <div className="space-y-5 rounded-md border-2 p-6 shadow-sm">
          <div className="inline-flex rounded-full bg-[#F1F3F5] p-4">
            <img
              src="https://res.cloudinary.com/damms5yog/image/upload/v1695257064/gg/real_estate_icon_2_ua3g7s.svg"
              alt=""
            />
          </div>
          <div className="text-xl font-semibold">Real Estate</div>
          <div>
            We navigate the realm of real estate with prowess and insight. We
            shape exceptional living and commercial spaces.
          </div>
        </div>

        <div className="space-y-5 rounded-md border-2 p-6 shadow-sm">
          <div className="inline-flex rounded-full bg-[#F1F3F5] p-4">
            <img
              src="https://res.cloudinary.com/damms5yog/image/upload/v1695257061/gg/Identity_icon_1_e22qij.svg"
              alt=""
            />
          </div>
          <div className="text-xl font-semibold">Identity Management</div>
          <div>
            A strategic partnership with the National Identity Management
            Commission, leads a targeted diaspora enrolment effort.
          </div>
        </div>

        <div className="space-y-5 rounded-md border-2 p-6 shadow-sm">
          <div className="inline-flex rounded-full bg-[#F1F3F5] p-4">
            <img
              src="https://res.cloudinary.com/damms5yog/image/upload/v1695257059/gg/Group_no5yst.svg"
              alt=""
            />
          </div>
          <div className="text-xl font-semibold">CSR</div>
          <div>
            With an unwavering commitment to fostering positive societal impact,
            we collaborate with businesses to catalyse meaningful change.
          </div>
        </div>
      </div>

      <div className="mt-20 bg-[#E5E5E5] py-8 md:py-16">
        <div className="mx-auto grid place-items-center gap-10 p-6 md:w-3/4 md:grid-cols-2 md:p-3">
          <img
            className="w-32 place-self-start md:w-60 md:place-self-center"
            src="https://res.cloudinary.com/damms5yog/image/upload/v1695257513/gg/plant-gg_do4kei.svg"
            alt=""
          />
          <div className="space-y-10">
            <div className="text-gg_orange text-4xl font-semibold">
              Grow, forge, nurture
            </div>
            <div className="md:text-xl">
              Under the resolute umbrella of The Greater Group, these portfolio
              companies thrive, united under a shared vision of excellence. Our
              role is not merely that of an investor, but a curator of
              opportunities, a cultivator of potential, and an incubator of
              success.
            </div>
            <div className="text-gg_orange border-gg_orange inline-flex cursor-pointer border-b">
              Learn more
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Testimonials --> */}
      <div className="py-10">
        <div className="mx-auto space-y-5 p-10 md:w-2/3">
          <div className="text-center text-3xl font-semibold">
            Don&rsquo;t just take our{" "}
            <span className="text-gg_orange">word</span> for it
          </div>
          <div className="text-center md:text-lg">
            Our customers talk about how our services have helped them.
          </div>
        </div>

        <div className="mx-auto grid space-y-5 p-10 md:w-2/3">
          <div className="border-gg_orange grid h-28 w-28 place-items-center place-self-center rounded-full border-2">
            <img
              className="w-12"
              src="https://res.cloudinary.com/damms5yog/image/upload/v1695253293/gg/SPAR_Vertical_Logo-removebg-preview_1_f6d7pt.png"
              alt=""
            />
          </div>
          <div className="text-center grid space-y-3">
            <div className="text-xl font-semibold">Pramod</div>
            <div className="text-gray-500">Spar</div>
            <div className="text-4xl text-yellow-300 flex items-center space-x-3 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m384-294 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122ZM233-80l93-304L80-560h304l96-320 96 320h304L634-384l93 304-247-188L233-80Zm247-369Z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m384-294 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122ZM233-80l93-304L80-560h304l96-320 96 320h304L634-384l93 304-247-188L233-80Zm247-369Z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m384-294 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122ZM233-80l93-304L80-560h304l96-320 96 320h304L634-384l93 304-247-188L233-80Zm247-369Z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m384-294 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122ZM233-80l93-304L80-560h304l96-320 96 320h304L634-384l93 304-247-188L233-80Zm247-369Z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m384-294 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122ZM233-80l93-304L80-560h304l96-320 96 320h304L634-384l93 304-247-188L233-80Zm247-369Z" />
              </svg>
            </div>
            <div>
              From the delivery of our small to medium and larger cargoes, our
              customers have been so satisfied with the promptness and care with
              which the cargoes are handled.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gg_orange mx-6 grid rounded-xl md:mx-auto md:mt-20 md:w-4/5 md:grid-cols-2">
        <div className="space-y-8 p-6 md:p-16">
          <div className="text-4xl font-semibold">
            How can <span className="text-white">we</span> help?
          </div>
          <div>
            Reach out to our team for support. We&rsquo;d be more than happy to
            answer your questions.
          </div>
          <div className="flex items-center space-x-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 fill-current text-white"
              viewBox="0 -960 960 960"
            >
              <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
            </svg>
            <a href="tel:+23481122993143" className="font-medium">
              +234 8112 299 3143
            </a>
          </div>

          <div className="flex items-center space-x-4 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 fill-current text-white"
              viewBox="0 -960 960 960"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
            <a href="#" className="font-medium"></a>
          </div>
        </div>

        <div
          className="h-[15rem] bg-cover bg-center bg-no-repeat md:-mt-16 md:h-[25rem] md:w-4/5 md:rounded-xl"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/damms5yog/image/upload/v1695259904/gg/support-img_hxcgls.png')`,
          }}
        >
          <img src="" alt="" />
        </div>
      </div>

      {/* <!-- Header --> */}
      <div className="mt-20 space-y-20 bg-black p-6 md:p-20">
        <div className="grid space-y-10 md:grid-cols-2 md:space-y-0">
          <div className="text-white">
            <img
              className="w-56"
              src="https://res.cloudinary.com/damms5yog/image/upload/v1695260368/gg/gg-logo_xrs4kk.svg"
              alt=""
            />
          </div>
          <div className="md:space-x-20s flex space-x-16 text-white md:place-self-end">
            <div className="space-y-3">
              <div className="text-xl font-medium">Quicklinks</div>
              <div>About</div>
              <div>Services</div>
              <div>Career</div>
            </div>

            <div className="space-y-3">
              <div className="text-xl font-medium">Contact</div>
              <div>08112993143</div>
              <div>#</div>
            </div>
          </div>
        </div>

        <div className="items-center justify-between space-y-5 md:flex md:space-y-0">
          <div className="text-xs text-white">
            &copy; Copyright 2023. The Greater Group
          </div>

          <div className="flex items-center space-x-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </div>
        </div>
      </div>
    </>
    //  <Image
    //             src="/vercel.svg"
    //             alt="Vercel Logo"
    //             classNameName="dark:invert"
    //             width={100}
    //             height={24}
    //             priority
    //           />
  );
}
