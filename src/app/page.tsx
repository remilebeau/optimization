import OptimizationForm from "@/components/OptimizationForm";
import OptimizationInstructions from "@/components/OptimizationInstructions";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-4 p-8">
      <h1 className="text-center text-4xl font-bold">Staffing Optimization</h1>
      <OptimizationInstructions />
      <hr />
      <OptimizationForm />
    </main>
  );
}
