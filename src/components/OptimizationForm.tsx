import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import optimization from "@/lib/optimization";
import OptimizationResults from "@/components/OptimizationResults";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import OptimizationInstructions from "@/components/OptimizationInstructions";
import FieldWithLabel from "@/components/FieldWithLabel";
import { useState } from "react";
import type { OptimalSolution } from "@/types/OptimalSolution";

export default function OptimizationForm() {
  const formSchema = z.object({
    monReq: z.coerce.number().int().gte(0),
    tueReq: z.coerce.number().int().gte(0),
    wedReq: z.coerce.number().int().gte(0),
    thuReq: z.coerce.number().int().gte(0),
    friReq: z.coerce.number().int().gte(0),
    satReq: z.coerce.number().int().gte(0),
    sunReq: z.coerce.number().int().gte(0),
    x1Max: z.coerce.number().int().gte(0).or(z.literal("i")),
    x2Max: z.coerce.number().int().gte(0).or(z.literal("i")),
    x3Max: z.coerce.number().int().gte(0).or(z.literal("i")),
    x4Max: z.coerce.number().int().gte(0).or(z.literal("i")),
    x5Max: z.coerce.number().int().gte(0).or(z.literal("i")),
    x6Max: z.coerce.number().int().gte(0).or(z.literal("i")),
    x7Max: z.coerce.number().int().gte(0).or(z.literal("i")),
  });

  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [optimalSolution, setOptimalSolution] =
    useState<OptimalSolution | null>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const data = await optimization(
      values.monReq,
      values.tueReq,
      values.wedReq,
      values.thuReq,
      values.friReq,
      values.satReq,
      values.sunReq,
      values.x1Max,
      values.x2Max,
      values.x3Max,
      values.x4Max,
      values.x5Max,
      values.x6Max,
      values.x7Max,
    );
    if (!data) {
      setErrMsg(
        "No solution found. Please adjust the constraints and try again.",
      );
      setIsLoading(false);
      return;
    }

    setOptimalSolution(data);
    setErrMsg("");
    setIsLoading(false);
  }

  return (
    <>
      {isLoading && <Loader />}
      {errMsg && <p className="text-red-500">{errMsg}</p>}
      {optimalSolution && !errMsg && (
        <OptimizationResults optimalSolution={optimalSolution} />
      )}
      {!isLoading && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 sm:grid sm:grid-cols-2"
          >
            <FieldWithLabel
              label="Mon Staff Required"
              name="monReq"
              placeholder="Staff required every Monday"
            />
            <FieldWithLabel
              label="Tue Staff Required"
              name="tueReq"
              placeholder="Staff required every Tuesday"
            />
            <FieldWithLabel
              label="Wed Staff Required"
              name="wedReq"
              placeholder="Staff required every Wednesday"
            />
            <FieldWithLabel
              label="Thu Staff Required"
              name="thuReq"
              placeholder="Staff required every Thursday"
            />
            <FieldWithLabel
              label="Fri Staff Required"
              name="friReq"
              placeholder="Staff required every Friday"
            />
            <FieldWithLabel
              label="Sat Staff Required"
              name="satReq"
              placeholder="Staff required every Saturday"
            />
            <FieldWithLabel
              label="Sun Staff Required"
              name="sunReq"
              placeholder="Staff required every Sunday"
            />

            <FieldWithLabel
              label="X1Max"
              name="x1Max"
              placeholder="Enter 'i' for no limit"
            />
            <FieldWithLabel
              label="X2Max"
              name="x2Max"
              placeholder="Enter 'i' for no limit"
            />
            <FieldWithLabel
              label="X3Max"
              name="x3Max"
              placeholder="Enter 'i' for no limit"
            />
            <FieldWithLabel
              label="X4Max"
              name="x4Max"
              placeholder="Enter 'i' for no limit"
            />
            <FieldWithLabel
              label="X5Max"
              name="x5Max"
              placeholder="Enter 'i' for no limit"
            />
            <FieldWithLabel
              label="X6Max"
              name="x6Max"
              placeholder="Enter 'i' for no limit"
            />
            <FieldWithLabel
              label="X7Max"
              name="x7Max"
              placeholder="Enter 'i' for no limit"
            />

            <Button className="rounded-xl sm:col-span-2" type="submit">
              Minimize
            </Button>
          </form>
        </Form>
      )}
    </>
  );
}
