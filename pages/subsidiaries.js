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

        <div className="mx-auto md:w-3/4 px-6 text-center">
          <div className="space-y-10 place-self-center text-white md:space-y-16">
            <div className="space-y-4">
              <div className="opacity-50">OUR SUBSIDIARIES</div>
              <div className="text-4xl font-semibold md:text-5xl md:leading-tight">
                Embracing <span className="text-gg_orange">versatility</span> as
                our hallmark
              </div>
              <div className="md:text-xl">
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
        </div>
      </div>

      <div className="mx-auto md:w-3/4 p-6 md:p-0 md:py-20">
        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-6">
            <img
              src="https://res.cloudinary.com/damms5yog/image/upload/v1695606518/gg/Rectangle_32_sjd6vr.svg"
              alt=""
            />
            <div className="text-2xl font-semibold">
              Greater Washington Logistics (GWX)
            </div>
            <div>
              GWX stands as a distinguished consumer-oriented supply chain
              management entity, seamlessly operating as a 2nd, 3rd, and 4th
              party intermediary. Our core expertise encompasses a comprehensive
              suite of services, including courier delivery, haulage, logistics,
              air cargo operations, service quality audit, third-party
              verification, and precise customs clearing and handling.
            </div>
            <div className="text-gg_orange flex items-center space-x-1 underline">
              <a href="https://www.greaterwashingtonng.com/">View website</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src="https://res.cloudinary.com/damms5yog/image/upload/v1695651248/gg/FastGas_Logo-removebg-preview_3_kww0w9.svg"
              alt=""
            />
            <div className="text-2xl font-semibold">Fast Gas</div>
            <div>
              FastGas stands as Nigeria's premier online gas vendor, renowned
              for swift and efficient service. Our commitment extends to
              delivering a complete gas solution right to your doorstep within
              30 minutes or less. This ensures uninterrupted culinary
              experiences, allowing you to focus on your cooking endeavours
              without delay.
            </div>
            <div className="text-gg_orange flex items-center space-x-1 underline">
              <a href="http://fastgas.ng/">View website</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src="https://res.cloudinary.com/damms5yog/image/upload/v1695651389/gg/defcon_aidujh.svg"
              alt=""
            />
            <div className="text-2xl font-semibold">DefCon Systems Limited</div>
            <div>
              DefCon Systems, in strategic partnership with the National
              Identity Management Commission, leads a targeted diaspora
              enrollment effort. This initiative is designed to encompass
              Nigerians residing abroad, seamlessly integrating them into the
              National Identity Database. By doing so, they can secure their
              National Identification Numbers (NIN) and access comprehensive
              identification services.
            </div>
            <div className="text-gg_orange flex items-center space-x-1 underline">
              <a href="https://nimc.gov.ng/diaspora/">View website</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src="https://res.cloudinary.com/damms5yog/image/upload/v1695651447/gg/greater-ws_ebnxej.svg"
              alt=""
            />
            <div className="text-2xl font-semibold">
              Greater Washington Real Estate
            </div>
            <div>
              Greater Washington Real Estate stands as a paragon of property
              excellence. As our name suggests, we navigate the realm of real
              estate with prowess and insight. Leveraging our deep-rooted
              industry knowledge, we shape exceptional living and commercial
              spaces. Our commitment to quality and innovation drives us to
              redefine the landscape of possibilities within real estate.
            </div>
            <div className="text-gg_orange flex items-center space-x-1 underline">
              <a href="https://www.greaterwashingtonng.com/">View website</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src="https://res.cloudinary.com/damms5yog/image/upload/v1695651447/gg/greater-ws_ebnxej.svg"
              alt=""
            />
            <div className="text-2xl font-semibold">Greater Washington CSR</div>
            <div>
              Greater Washington CSR is a distinguished NGO dedicated to
              pioneering corporate social responsibility. With an unwavering
              commitment to fostering positive societal impact, we collaborate
              with businesses to catalyse meaningful change. Through strategic
              initiatives and community partnerships, we shape a better
              tomorrow, where corporate success aligns seamlessly with social
              progress.
            </div>
            <div className="text-gg_orange flex items-center space-x-1 underline">
              <a href="https://www.greaterwashingtonng.com/">View website</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
