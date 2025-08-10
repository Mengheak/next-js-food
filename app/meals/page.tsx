import MealsGrid from "@/components/MealsGrid";
import { dummyMeals } from "@/initdb";
import Link from "next/link";

export default async function MealsPage() {
  return (
    <>
      <header
        className="
          mx-auto w-[92%] max-w-6xl
          text-[#ddd6cb]
          text-center md:text-left
          py-8 md:py-12
        "
      >
        <h1
          className="
            text-2xl sm:text-3xl md:text-4xl font-bold leading-tight
          "
        >
          Delicious meals, created{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            by you
          </span>
        </h1>

        <div className="mt-4 space-y-3 text-base sm:text-lg md:text-xl">
          <p>
            Choose your favourite recipe and cook it yourself. It is easy and
            fun!
          </p>
          <p>
            <Link
              href="/meals/share"
              className="
                inline-block mt-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg
                bg-gradient-to-r from-[#f9572a] to-[#ff9b05]
                text-white font-semibold no-underline
                hover:from-[#fd4715] hover:to-[#f9b241]
                focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#ff9b05]
              "
            >
              Share Your Favourite Recipe
            </Link>
          </p>
        </div>
      </header>

      <main className="mx-auto w-[92%] max-w-6xl">
        <MealsGrid meals={dummyMeals} />
      </main>
    </>
  );
}
