import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Subsidiaries - Greater Group</title>
      </Head>

      {/* Header */}
      <div className="space-y-20 bg-black p-6 md:p-20">
        <Header />

        <div className="mx-auto md:w-3/4 px-6 md:px-0 space-y-10 text-center">
          <div className="space-y-10 place-self-center text-white md:space-y-16">
            <div className="space-y-4">
              <div className="opacity-50">CAREERS AT THE GREATER GROUP</div>
              <div className="text-4xl font-semibold md:text-5xl md:leading-tight">
                Join our team and <span className="text-gg_orange">shape</span>{" "}
                the future
              </div>
              <div className="md:text-xl">
                At Greater Group, we believe that the heart of any successful
                venture lies in its people. We are more than a company; we are a
                collective force fueled by innovation, dedication, and a shared
                vision.
              </div>
            </div>
          </div>

          <a
            href="#positions"
            className="bg-gg_orange inline-flex cursor-pointer items-center space-x-3 rounded-xl px-5 py-3 text-black"
          >
            <div className="text-lg font-medium capitalize">
              see open positions
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 -rotate-90 transform fill-current"
              viewBox="0 -960 960 960"
            >
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <img
          src="https://res.cloudinary.com/damms5yog/image/upload/v1695607029/gg/Rectangle_32_ctlvch.png"
          alt=""
        />
      </div>

      <div className="py-10">
        <div className="mx-auto space-y-5 p-10 md:w-2/3">
          <div className="text-center text-3xl font-semibold">
            Why <span className="text-gg_orange">work</span> with us?
          </div>
          <div className="text-center md:text-lg">
            ...because we foster an environment where creativity thrives, ideas
            are valued, and growth is limitless.
          </div>
          <a
            href="#positions"
            className="text-gg_orange mx-auto flex w-1/2 items-center justify-center space-x-2 font-medium capitalize"
          >
            <div>see open positions</div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-auto grid gap-20 p-6 md:w-3/5 md:grid-cols-2 md:p-0">
        <div className="space-y-5 rounded-md border-2 p-6 shadow-sm">
          <div className="inline-flex rounded-full bg-[#F1F3F5] p-4">
            <img
              src="https://res.cloudinary.com/damms5yog/image/upload/v1695607338/gg/Screen_Shot_2023-08-31_at_08.11.08_1_xfrbpy.svg"
              alt=""
            />
          </div>
          <div className="text-xl font-semibold">
            We offer <span className="text-gg_orange">more</span> than just jobs
          </div>
          <div>
            We offer careers. With mentorship, learning opportunities, and a
            supportive community, we empower our employees to shape their
            professional paths and achieve their full potential.
          </div>
        </div>

        <div className="space-y-5 rounded-md border-2 p-6 shadow-sm">
          <div className="inline-flex rounded-full bg-[#F1F3F5] p-4">
            <img
              src="https://res.cloudinary.com/damms5yog/image/upload/v1695607338/gg/growth_plant_icon_1_mqsmvw.svg"
              alt=""
            />
          </div>
          <div className="text-xl font-semibold">
            <span className="text-gg_orange">Endless</span> growth possibilities
          </div>
          <div>
            As we make strides in reshaping industries and driving progress, we
            understand that our team is at the forefront of our success. You
            will embark on a journey that is rich in possibilities.
          </div>
        </div>
      </div>

      <div className="py-10" id="positions">
        <div className="mx-auto space-y-5 p-10 md:w-2/3">
          <div className="text-center text-3xl font-semibold capitalize">
            our <span className="text-gg_orange">open</span> positions
          </div>

          <div className="text-center opacity-50">No open positions.</div>
          {/* <div className="mx-auto flex md:w-3/4 items-center justify-between rounded-xl border p-4">
            <div>
              <div className="font-medium">Customer Support Officer</div>
              <div className="opacity-50">Full Time</div>
            </div>

            <a href="#" className="text-gg_orange flex items-center space-x-2 font-medium">
              <div>Apply</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </a>
          </div> */}
        </div>
      </div>

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
