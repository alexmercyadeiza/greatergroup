import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Greater Group</title>
      </Head>

      <div className="space-y-20 bg-black p-6 md:p-20">
        <Header />
        <div className="grid md:grid-cols-2">
          <div className="space-y-10 place-self-center text-white md:space-y-16">
            <div className="space-y-4">
              <div className="text-5xl font-semibold md:text-7xl md:leading-tight">
                We <span className="text-gg_orange">Redefine</span>{" "}
                Possibilities
              </div>
              <div className="text-xl md:w-2/3">
                Forging strategic investments that help businesses flourish.
              </div>
            </div>

            <div className="bg-gg_orange inline-flex cursor-pointer items-center space-x-3 rounded-xl px-5 py-3 text-black">
              <div
                className="text-lg font-medium cursor-pointer"
                onClick={() => router.push("/about")}
              >
                Learn more
              </div>
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
              className="h-[15rem] rounded-xl bg-contain bg-no-repeat bg-center md:h-[30rem]"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/damms5yog/image/upload/v1695644376/gg/Frame_172_qy11nk.png')`,
              }}
            ></div>
          </div>
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

      <div className="mx-auto grid gap-20 p-6 md:w-3/5 md:grid-cols-2 md:p-0">
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
            <div
              onClick={() => router.push("/about")}
              className="text-gg_orange border-gg_orange inline-flex cursor-pointer border-b"
            >
              Learn more
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Testimonials --> */}
      <div className="py-10">
        <div className="mx-auto space-y-5 p-10 md:w-2/3">
          <div className="text-center text-3xl font-semibold">
            Don&rsquo;t just take our
            <span className="text-gg_orange"> word</span> for it
          </div>
          <div className="text-center md:text-lg">
            Our customers talk about how our services have helped them.
          </div>
        </div>

        {/* <!-- Social Icons--> */}
        <div className="space-y pt-10 grayscale">
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

        <div className="mx-auto grid space-y-5 p-10 md:w-2/3">
          <div className="border-gg_orange grid h-28 w-28 place-items-center place-self-center rounded-full border-2">
            <img
              className="w-12 grayscale"
              src="https://res.cloudinary.com/damms5yog/image/upload/v1695253293/gg/SPAR_Vertical_Logo-removebg-preview_1_f6d7pt.png"
              alt=""
            />
          </div>
          <div className="grid space-y-3 text-center">
            <div className="text-xl font-semibold">Pramod</div>
            <div className="text-gray-500">Spar</div>
            <div className="mx-auto flex items-center space-x-3 text-4xl text-yellow-300">
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
          <div className="flex items-center space-x-4 md:text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 fill-current text-white"
              viewBox="0 -960 960 960"
            >
              <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
            </svg>
            <a href="tel:+23481122993143" className="font-medium block">
              +234 8112 299 3143
            </a>
          </div>

          <div className="flex items-center space-x-4 md:text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 fill-current text-white"
              viewBox="0 -960 960 960"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
            <a
              href="maito:hello@greatergroupng.com"
              className="font-medium block"
            >
              {" "}
              hello@greatergroupng.com{" "}
            </a>
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

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
