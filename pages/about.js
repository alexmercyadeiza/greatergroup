import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Greater Group</title>
      </Head>

      {/* Header */}
      <div className="space-y-20 bg-black p-6 md:p-20">
        <Header />

        <div className="grid md:grid-cols-2">
          <div className="space-y-10 place-self-center text-white md:space-y-16">
            <div className="space-y-4">
              <div className="opacity-50">ABOUT US</div>
              <div className="text-4xl font-semibold md:text-5xl md:leading-tight">
                We forge strategic{" "}
                <span className="text-gg_orange">investments</span> that help
                businesses to flourish.
              </div>
              <div className="text-xl md:w-4/5">
                The Greater Group is not just a company; it is an architect of
                growth, a custodian of diverse portfolios, and a strategic nexus
                of investments. Our operations extend beyond industry confines
                as we strategically invest in and nurture a spectrum of
                businesses. We proudly function as the steward of a diversified
                portfolio, where each venture stands as a testament to our
                discerning investment acumen.
              </div>
            </div>
          </div>

          <div className="pt-10 md:pt-0">
            <div
              className="h-[15rem] rounded-xl bg-cover bg-center md:h-[20rem]"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/damms5yog/image/upload/v1695294147/gg/team_r7mr09.png')`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="mx-auto space-y-5 p-10 md:w-2/3">
          <div className="text-center text-3xl font-semibold">
            The <span className="text-gg_orange">Founder</span>
          </div>
          <div className="text-center">
            An accomplished international professional with a multifaceted
            background, I have driven success in the African banking sector
            through roles spanning business development, risk management,
            infrastructure financing, and sales. Currently, my focus lies in
            strategic business development and sales management.
          </div>

          <div className="text-center">
            Noteworthy specialties encompass core entrepreneurial acumen,
            logistics proficiency, and an esteemed reputation in retail banking.
            My prowess lies in adept relationship cultivation, astute
            opportunity identification, and a mastery of negotiation and credit
            management. My commitment to enduring success is exemplified through
            strategic client retention endeavours.
          </div>

          <div>
            <div className="text-center text-3xl font-semibold">
              Owolabi Awosan
            </div>
            <div className="text-center">Founder / CEO</div>
          </div>

          <div className="justify-between">
            <div className="text-center text-xl italic">
              Embarking on a journey through boardrooms and balance sheets, one
              global conquest at a time...
            </div>
            <svg
              clip-rule="evenodd"
              className="mx-auto w-16 opacity-30"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21.301 4c.411 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.738 4.129-4.308 4.129-3.24 0-4.83-2.547-4.83-5.307 0-5.98 6.834-10.693 8.468-10.693zm-10.833 0c.41 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.739 4.129-4.308 4.129-3.241 0-4.83-2.547-4.83-5.307 0-5.98 6.833-10.693 8.468-10.693z"
                fill-rule="nonzero"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* <!-- Social Icons--> */}
      <div className="space-y space-y-10 bg-gray-100 py-20">
        <div className="text-center text-3xl font-semibold capitalize">
          our <span className="text-gg_orange">subsidiaries</span>
        </div>

        <div className="mx-auto grid w-5/6 grid-cols-3 place-items-center gap-10">
          <img
            src="https://res.cloudinary.com/damms5yog/image/upload/v1695606068/gg/GWX_logo-removebg-preview_1_dfoqyw.svg"
            alt=""
          />

          <img
            src="https://res.cloudinary.com/damms5yog/image/upload/v1695606046/gg/FastGas_Logo-removebg-preview_3_cfsy8w.svg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/damms5yog/image/upload/v1695606047/gg/Frame_64_o3vy8h.svg"
            alt=""
          />
        </div>
      </div>

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
