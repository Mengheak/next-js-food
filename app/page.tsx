import ImageSlideshow from "@/components/images/ImageSlideShow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header
        className="
          mx-auto w-[92%] max-w-7xl
          py-8 md:py-12
          grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12
        "
      >
        <div className="w-full">
          <ImageSlideshow />
        </div>

        {/* Hero copy + CTAs */}
        <div className="text-[#ddd6cb]">
          <h1
            className="
              uppercase tracking-widest font-bold
              text-2xl sm:text-3xl md:text-4xl
              bg-gradient-to-b from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent
            "
          >
            NextLevel Food for NextLevel Foodies
          </h1>

          <p className="mt-3 text-base sm:text-lg md:text-xl">
            Taste & share food from all around the world.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-base sm:text-lg justify-center">
            <Link
              href="/community"
              className="
                inline-block px-3 py-2 rounded-lg no-underline
                font-medium text-[#ff9b05]
                hover:text-[#f9b241] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9b05]
              "
            >
              Join the Community
            </Link>

            <Link
              href="/meals"
              className="
                inline-block px-4 py-2 rounded-lg no-underline font-semibold
                text-white
                bg-gradient-to-r from-[#f9572a] to-[#ff9b05]
                hover:from-[#fd4715] hover:to-[#f9b241]
               focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9b05]
              "
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-[92%] max-w-4xl">
        <section className="flex flex-col text-[#ddd6cb] text-xl sm:text-2xl my-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">How it works</h2>
          <p className="mt-3 text-base sm:text-lg">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="mt-3 text-base sm:text-lg">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-xl sm:text-2xl my-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Why NextLevel Food?</h2>
          <p className="mt-3 text-base sm:text-lg">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="mt-3 text-base sm:text-lg">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
