export default function OptimizationInstructions() {
  return (
    <section className="flex flex-col gap-4 text-center font-bold italic">
      {/* OBJECTIVE FUNCTION */}
      <h1 className="text-xl">Minimize:</h1>
      <var className="text-green-500">X1 + X2 + X3 + X4 + X5 + X6 + X7</var>
      <ul className="flex flex-col justify-evenly sm:flex-row sm:text-left">
        <ul className="flex flex-col text-green-500">
          <li>X1 = number of Mon to Fri staff</li>
          <li>X2 = number of Tue to Sat staff</li>
          <li>X3 = number of Wed to Sun staff</li>
          <li>X4 = number of Thu to Mon staff</li>
        </ul>
        <ul className="flex flex-col text-green-500">
          <li>X5 = number of Fri to Tue staff</li>
          <li>X6 = number of Sat to Wed staff</li>
          <li>X7 = number of Sun to Thu staff</li>
        </ul>
      </ul>
      {/* CONSTRAINTS */}
      <p className="">Subject to:</p>
      <ul className="flex flex-col justify-evenly sm:flex-row sm:text-left">
        {/* MAX VALUES OF DECISION VARIABLES */}
        <ul className="flex flex-col text-green-500">
          <li>X1, X2, X3, X4, X5, X6, X7 are integers</li>
          <li>
            <var className="text-green-500">0 &le; X1</var> &le;
            <var className="text-red-500"> X1Max</var>
          </li>
          <li>
            <var className="text-green-500">0 &le; X2</var> &le;
            <var className="text-red-500"> X2Max</var>
          </li>
          <li>
            <var className="text-green-500">0 &le; X3</var> &le;
            <var className="text-red-500"> X3Max</var>
          </li>
          <li>
            <var className="text-green-500">0 &le; X4</var> &le;
            <var className="text-red-500"> X4Max</var>
          </li>
          <li>
            <var className="text-green-500">0 &le; X5</var> &le;
            <var className="text-red-500"> X5Max</var>
          </li>
          <li>
            <var className="text-green-500">0 &le; X6</var> &le;
            <var className="text-red-500"> X6Max</var>
          </li>
          <li>
            <var className="text-green-500">0 &le; X7</var> &le;
            <var className="text-red-500"> X7Max</var>
          </li>
        </ul>
        {/* STAFF AVAILABILITY EACH DAY */}
        <ul className="flex flex-col text-blue-500">
          <li>
            Mon Available &ge;
            <var className="text-red-500"> Mon Required</var>
          </li>
          <li>
            Tue Available &ge;
            <var className="text-red-500"> Tue Required</var>
          </li>
          <li>
            Wed Available &ge;
            <var className="text-red-500"> Wed Required</var>
          </li>
          <li>
            Thu Available &ge;
            <var className="text-red-500"> Thu Required</var>
          </li>
          <li>
            Fri Available &ge;
            <var className="text-red-500"> Fri Required</var>
          </li>
          <li>
            Sat Available &ge;
            <var className="text-red-500"> Sat Required</var>
          </li>
          <li>
            Sun Available &ge;
            <var className="text-red-500"> Sun Required</var>
          </li>
        </ul>
      </ul>
      {/* LEGEND */}
      <ul className="mx-auto flex flex-col sm:flex-row sm:gap-12 sm:text-left">
        <li className="text-green-500">Decision Variable</li>
        <li className="text-blue-500">Constraint LHS</li>
        <li className="text-red-500">Constraint RHS</li>
      </ul>
      <p>
        Set the <span className="text-red-500">constraints</span> using the form
        below:
      </p>
    </section>
  );
}
