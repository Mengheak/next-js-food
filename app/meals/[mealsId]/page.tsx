type MealsPageProps = { params: { mealsId: string } };

export default async function MealsDetailsPage({ params }: MealsPageProps) {
  return <main>This is {params.mealsId} page</main>;
}
