import Link from "next/link";
import Image from "next/image";

import { MealsType } from "./MealsGrid";

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: Omit<MealsType, "id">) {
  return (
    <article
      className={
        "flex flex-col rounded-lg justify-between h-full [box-shadow:0_0_12px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 ease-in-out text-[#ddd6cb] bg-gradient-to-r from-[#2c1e19] to-[#25200f]"
      }
    >
      <header>
        <div className={"relative h-[15rem]"}>
          <Image
            src={image}
            alt={title}
            fill
            className="relative object-cover"
          />
        </div>
        <div className={"pt-2 pr-4 pb-0 pl-4"}>
          <h2 className="m-0 text-[1.5rem]">{title}</h2>
          <p className="text-[0.75rem] text-[#cfa69b] italic">by {creator}</p>
        </div>
      </header>
      <div className={"flex flex-col justify-between h-full"}>
        <p className={"pl-[1rem] pt-[1rem] pr-0 pb-[1rem]"}>{summary}</p>
        <div className={"p-[1rem] text-right"}>
          <Link
            href={`/meals/${slug}`}
            className="inline-block mt-4 px-4 py-2 rounded-lg 
           bg-gradient-to-r from-[#f9572a] to-[#ff9b05] 
           text-white font-bold no-underline
           hover:from-[#fd4715] hover:to-[#f9b241]
           hover:[box-shadow:0_0_12px_rgba(242,100,18,0.8)]
           active:from-[#fd4715] active:to-[#f9b241]
           active:[box-shadow:0_0_12px_rgba(242,100,18,0.8)]"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
