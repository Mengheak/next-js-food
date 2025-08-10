export default function MealsDetailsPage({
  params,
}: {
  params: { mealsId: string };
}) {
  return <main>This is {params.mealsId} page</main>;
}
