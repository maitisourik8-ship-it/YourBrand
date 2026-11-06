
import { ArrowRight } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-gray-50 px-6 py-16 md:py-24"
    >

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-green-600">
            About Us
          </p>

          <h2 className="max-w-md text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
            Your Partner
            <br />
            in Progress
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-gray-600 md:text-base">
            We're committed to helping you
            achieve your goals with innovative
            solutions and dedicated support.
          </p>

          <button className="mt-6 flex items-center gap-2 rounded-full bg-green-800 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-green-700 hover:shadow-lg">
            Learn More
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -right-3 -top-5 h-48 w-48 rounded-full bg-lime-200 md:-right-5 md:-top-8 md:h-64 md:w-64">
          </div>

          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900"
            alt="Modern glass office building"
            className="relative z-10 h-64 w-full rounded-2xl object-cover shadow-md md:h-80"
          />
        </div>

      </div>
    </section>
  );
}

export default About;

