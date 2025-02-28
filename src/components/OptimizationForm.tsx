"use client";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import optimization from "@/lib/optimization";
import OptimizationResults from "@/components/OptimizationResults";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { OptimalSolution } from "@/types/OptimalSolution";
import { Label } from "@/components/ui/label";

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

  const [isLoading, setIsLoading] = useState(false);
  const [optimalSolution, setOptimalSolution] = useState<OptimalSolution>();

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
    setOptimalSolution(data);
    setIsLoading(false);
  }

  return (
    <>
      {isLoading && <Loader />}
      {optimalSolution && (
        <OptimizationResults optimalSolution={optimalSolution} />
      )}
      {!isLoading && (
        <Form {...form}>
          <form className="flex flex-col justify-around gap-4 italic text-red-500 sm:flex-row">
            <section className="flex flex-col gap-4">
              <Label>Mon Required</Label>
              <FormField
                control={form.control}
                name="monReq"
                render={({ field }) => (
                  <FormControl>
                    <Input className="rounded-xl" {...field} />
                  </FormControl>
                )}
              />
              <Label>Tue Required</Label>
              <FormField
                control={form.control}
                name="tueReq"
                render={({ field }) => (
                  <FormControl>
                    <Input className="rounded-xl" {...field} />
                  </FormControl>
                )}
              />
              <Label>Wed Required</Label>
              <FormField
                control={form.control}
                name="wedReq"
                render={({ field }) => (
                  <FormControl>
                    <Input className="rounded-xl" {...field} />
                  </FormControl>
                )}
              />
              <Label>Thu Required</Label>
              <FormField
                control={form.control}
                name="thuReq"
                render={({ field }) => (
                  <FormControl>
                    <Input className="rounded-xl" {...field} />
                  </FormControl>
                )}
              />
              <Label>Fri Required</Label>
              <FormField
                control={form.control}
                name="friReq"
                render={({ field }) => (
                  <FormControl>
                    <Input className="rounded-xl" {...field} />
                  </FormControl>
                )}
              />
              <Label>Sat Required</Label>
              <FormField
                control={form.control}
                name="satReq"
                render={({ field }) => (
                  <FormControl>
                    <Input className="rounded-xl" {...field} />
                  </FormControl>
                )}
              />
              <Label>Sun Required</Label>
              <FormField
                control={form.control}
                name="sunReq"
                render={({ field }) => (
                  <FormControl>
                    <Input className="rounded-xl" {...field} />
                  </FormControl>
                )}
              />
            </section>
            <section className="flex flex-col gap-4">
              <Label>X1Max</Label>
              <FormField
                control={form.control}
                name="x1Max"
                render={({ field }) => (
                  <FormControl>
                    <Input className="rounded-xl" {...field} />
                  </FormControl>
                )}
              />
              <Label>X2Max</Label>
              <FormField
                control={form.control}
                name="x2Max"
                render={({ field }) => (
                  <FormControl>
                    <Input className="rounded-xl" {...field} />
                  </FormControl>
                )}
              />
              <Label>X3Max</Label>
              <FormField
                control={form.control}
                name="x3Max"
                render={({ field }) => (
                  <FormControl>
                    <Input className="rounded-xl" {...field} />
                  </FormControl>
                )}
              />
              <Label>X4Max</Label>
              <FormField
                control={form.control}
                name="x4Max"
                render={({ field }) => (
                  <FormControl>
                    <Input className="rounded-xl" {...field} />
                  </FormControl>
                )}
              />
              <Label>X5Max</Label>
              <FormField
                control={form.control}
                name="x5Max"
                render={({ field }) => (
                  <FormControl>
                    <Input className="rounded-xl" {...field} />
                  </FormControl>
                )}
              />
              <Label>X6Max</Label>
              <FormField
                control={form.control}
                name="x6Max"
                render={({ field }) => (
                  <FormControl>
                    <Input className="rounded-xl" {...field} />
                  </FormControl>
                )}
              />
              <Label>X7Max</Label>
              <FormField
                control={form.control}
                name="x7Max"
                render={({ field }) => (
                  <FormControl>
                    <Input className="rounded-xl" {...field} />
                  </FormControl>
                )}
              />
            </section>
          </form>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            className="rounded-xl"
            type="submit"
          >
            Minimize
          </Button>
        </Form>
      )}
    </>
  );
}
