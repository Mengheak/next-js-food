"use client";

type MealsPageProps = Promise<{ mealsId: string }>;

export default async function MealsDetailsPage({
  params,
}: {
  params: MealsPageProps;
}) {
  const { mealsId } = await params;
  return <main>This is {mealsId} page</main>;
}
