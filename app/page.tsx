import ImageSlideshow from "@/components/images/ImageSlideShow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex gap-3 my-12 mx-auto w-[90%] max-w-[75rem]">
        <div className="w-[40rem] h-[25rem]">
          <ImageSlideshow />
        </div>
        <div>
          <div className="text-[#ddd6cb] text-[1.5rem]">
            <h1 className="text-[2rem] tracking-widest uppercase bg-linear-to-b from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all around the world.</p>
          </div>
          <div className="text-[1.5rem] flex gap-[1rem]">
            <Link
              href={"/community"}
              className="nline-block mt-4 pl-0 pr-4 py-2 rounded-lg bg-transparent font-normal text-[#ff9b05] no-underline
           hover:bg-transparent hover:text-[#f9b241] active:bg-transparent active:text-[#f9b241]"
            >
              Join the Community
            </Link>
            <Link
              href={"/meals"}
              className="nline-block mt-4 px-4 py-2 rounded-lg font-normal text-[#ff9b05] no-underline
           bg-gradient-to-r from-[#f9572a] to-[#ff9b05] hover:text-[#f9b241] active:bg-transparent active:text-[#f9b241]"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] my-8 mx-auto text-center">
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] my-8 mx-auto text-center">
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
