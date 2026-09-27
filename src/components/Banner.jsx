import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className=" container mx-auto px-4 py-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#15171c]">

        <div className="grid grid-cols-1 items-center lg:grid-cols-2">

          {/* Content */}
          <div className="px-6 py-12 sm:px-10 lg:px-16 lg:py-16">

            <p className="mb-5 text-sm font-bold tracking-widest text-lime-400">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6.5xl">
              TRAIN WITH INTENT.
              <br />
              LOG EVERY SET.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-6 text-gray-400 sm:text-base lg:text-lg lg:leading-7">
              Fitlog is a dark, no-nonsense gym companion: pick a lift,
              lock it into today&apos;s plan, and watch the week&apos;s work add up.
            </p>
            <a
              href="#library"
              className="mt-7 inline-block rounded-lg bg-lime-400 px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-lime-300 sm:px-7 sm:py-4"
            >
              Browse Workouts
            </a>
            <section id="library">
              
            </section>

          </div>

          {/* Image */}
          <div className="flex items-center justify-center px-6 pb-8 lg:px-0 lg:pb-0">

            <Image
              src="/assets/banner.png"
              alt="Workout illustration"
              width={500}
              height={500}
              priority
              className="w-56 object-contain sm:w-72 md:w-80 lg:w-[450px]"
            />

          </div>

        </div>
      </div>
    </section >
  );
};

export default Banner;