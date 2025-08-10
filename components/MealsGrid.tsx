import MealItem from "./MealsItem";

export type MealsType = {
  id?: string;
  title: string;
  slug: string;
  image: string;
  instructions?: string;
  summary: string;
  creator: string;
  creator_email?: string;
};
type MealsGridProps = {
  meals: MealsType[];
};

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className="w-[90%] max-w-[90rem] grid [grid-template-columns:repeat(auto-fill,minmax(20rem,1fr))] gap-20 my-8 mx-auto list-none p-0">
      {meals.map((meals, idx) => (
        <li key={idx}>
          <MealItem
            title={meals.title}
            slug={meals.slug}
            creator={meals.creator}
            image={meals.image}
            summary={meals.summary}
          />
        </li>
      ))}
    </ul>
  );
}
