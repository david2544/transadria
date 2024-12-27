import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <Image
          src="/hero-home-page.webp"
          alt="Transadria trucks on the road"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-30"
        />
        <div className="relative container mx-auto px-4 py-24 sm:py-32">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Transadria: Your Trusted European Transport Partner Since 1994
          </h1>
          <h2 className="text-2xl sm:text-3xl mb-6">
            Dependable freight solutions for businesses across Europe
          </h2>
          <p className="text-lg mb-8 max-w-2xl">
            From our base in Romania, we&apos;ve delivered goods for thousands
            of customers throughout Europe. Our modern fleet and specialized
            expertise ensure that your cargo arrives safely and on time.
          </p>
          <Link
            href="/contact"
            className="bg-[#4a55cf] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#3a45bf] transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-[#4a55cf]">
                About Transadria
              </h2>
              <p className="text-lg">
                Established in 1994, Transadria has grown into one of
                Europe&apos;s most dependable transport companies. Over the
                years, we&apos;ve handled thousands of shipments, building
                strong relationships with businesses across the continent. Our
                commitment to reliability, safety, and customer satisfaction
                sets us apart.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <Image
                src="/truck-light.webp"
                width={720}
                height={959}
                alt="Transadria company logo"
                className="dark:hidden"
              />
              <Image
                src="/truck-dark.webp"
                width={720}
                height={959}
                alt="Transadria company logo"
                className="hidden dark:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#4a55cf]">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Normal Goods Transport",
                description:
                  "We handle the safe and timely transport of general freight using our modern fleet. Our professional drivers ensure each delivery meets the highest standards.",
                icon: "🚚",
              },
              {
                title: "Container Transport",
                description:
                  "Whether you need full container loads or less-than-container loads, Transadria offers secure container transport across Europe.",
                icon: "📦",
              },
              {
                title: "Oversized Goods Transport",
                description:
                  "For cargo that exceeds standard dimensions, our specialized trucks and experienced team guarantee the safe delivery of oversized loads.",
                icon: "🏗️",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#4a55cf]">
            Why Transadria?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Decades of Experience",
                description:
                  "Founded in 1994, our experience speaks for itself with thousands of successful deliveries.",
              },
              {
                title: "Modern Fleet",
                description:
                  "Our trucks are equipped with the latest technology, ensuring both safety and efficiency.",
              },
              {
                title: "Trusted by Thousands",
                description:
                  "We've built a reputation across Europe through consistent, reliable service.",
              },
              {
                title: "Tailored Solutions",
                description:
                  "We adapt to your specific requirements, no matter the size or type of cargo.",
              },
            ].map((reason, index) => (
              <div
                key={index}
                className="bg-white-100 dark:bg-gray-900 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#4a55cf] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transport Your Goods Across Europe?
          </h2>
          <p className="text-xl mb-8">
            Let us handle the logistics so you can focus on your business.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#4a55cf] px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
