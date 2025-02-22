import type { OptimalSolution } from "@/types/OptimalSolution";
type Props = {
  optimalSolution: OptimalSolution;
};

export default function OptimizationResults({ optimalSolution }: Props) {
  return (
    <section className="flex flex-col gap-4 rounded-xl border p-4 text-center font-bold italic">
      <p className="text-center font-bold text-green-500 sm:text-xl">
        Minimum staff required:{" "}
        {optimalSolution.minStaff.toLocaleString("en-US")}
      </p>
      <ul className="flex flex-col items-center justify-evenly gap-4 sm:flex-row sm:text-xl">
        {/* DECISION VARIABLES LIST */}
        <ul className="flex flex-col text-green-500">
          <li>X1 = {optimalSolution.x1}</li>
          <li>X2 = {optimalSolution.x2}</li>
          <li>X3 = {optimalSolution.x3}</li>
          <li>X4 = {optimalSolution.x4}</li>
          <li>X5 = {optimalSolution.x5}</li>
          <li>X6 = {optimalSolution.x6}</li>
          <li>X7 = {optimalSolution.x7}</li>
        </ul>
        {/* CONSTRAINTS LIST */}
        <ul className="flex flex-col text-blue-500">
          <li>
            Monday: {optimalSolution.monAva} &ge;{" "}
            <var className="text-red-500">{optimalSolution.monReq}</var>
          </li>
          <li>
            Tuesday: {optimalSolution.tueAva} &ge;
            <var className="text-red-500"> {optimalSolution.tueReq}</var>
          </li>
          <li>
            Wednesday: {optimalSolution.wedAva} &ge;
            <var className="text-red-500"> {optimalSolution.wedReq}</var>
          </li>
          <li>
            Thursday: {optimalSolution.thuAva} &ge;
            <var className="text-red-500"> {optimalSolution.thuReq}</var>
          </li>
          <li>
            Friday: {optimalSolution.friAva} &ge;
            <var className="text-red-500"> {optimalSolution.friReq}</var>
          </li>
          <li>
            Saturday: {optimalSolution.satAva} &ge;
            <var className="text-red-500"> {optimalSolution.satReq}</var>
          </li>
          <li>
            Sunday: {optimalSolution.sunAva} &ge;
            <var className="text-red-500"> {optimalSolution.sunReq}</var>
          </li>
        </ul>
        {/* SLACK LIST */}
        <ul className="flex flex-col text-blue-500">
          <li>Mon Slack: {optimalSolution.monSlack}</li>
          <li>Tue Slack: {optimalSolution.tueSlack}</li>
          <li>Wed Slack: {optimalSolution.wedSlack}</li>
          <li>Thu Slack: {optimalSolution.thuSlack}</li>
          <li>Fri Slack: {optimalSolution.friSlack}</li>
          <li>Sat Slack: {optimalSolution.satSlack}</li>
          <li>Sun Slack: {optimalSolution.sunSlack}</li>
          <li>Total Slack: {optimalSolution.totalSlack}</li>
        </ul>
      </ul>
    </section>
  );
}
