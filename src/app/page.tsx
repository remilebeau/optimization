"use client";
import OptimizationForm from "@/components/OptimizationForm";
import OptimizationInstructions from "@/components/OptimizationInstructions";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-4 p-4">
      <OptimizationInstructions />
      <OptimizationForm />
    </main>
  );
}
