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

        <div className="mx-auto grid md:grid-cols-2 gap-20 space-y-10">
          <div className="space-y-10 place-self-center text-white md:space-y-16">
            <div className="space-y-8">
              <div className="opacity-50">CONTACT US</div>
              <div className="text-4xl font-semibold md:text-5xl md:leading-tight">
                Need <span className="text-gg_orange">support?</span> Have a
                question? We&rsquo;re here to{" "}
                <span className="text-gg_orange">help.</span>
              </div>
              <div className="md:text-xl">
                Reach out to our team for support. We&rsquo;d be more than happy
                to answer your questions.
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-white p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-gg_orange h-6 w-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="text-xl">+234 8112 299 3143</div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-white p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-gg_orange h-6 w-6"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>

                  <div className="text-xl">hello@greatgroupng.com</div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-white p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-gg_orange h-6 w-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="text-xl">
                    51, Abibu Adetoro Street, Ajose Adeogun St, Victoria Island,
                    Lagos
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 rounded-xl bg-white md:p-10 p-6">
            <div className="text-gg_orange text-xl font-semibold">
              Send us a message
            </div>
            <div className="space-y-3">
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="Name"
              />

              <input
                type="text"
                className="mt-1 block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="Email"
              />

              <textarea
                className="mt-1 block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="Message"
                rows="8"
              ></textarea>
            </div>

            <div className="bg-gg_orange inline-flex w-full cursor-pointer justify-center space-x-3 rounded-xl py-3 text-white">
              <div className="text-lg font-medium capitalize">send message</div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
