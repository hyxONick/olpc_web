"use client";

import { useSession } from "next-auth/react";
import { AustraliaMap } from "./_components/map";
import { useState } from "react";

const DashBoardPage = () => {
  const session = useSession();
  const [state, setState] = useState<string>("");

  return (
    <div>
      <p>{state}</p>
      <AustraliaMap onSelectState={setState} selectedState={state} />
    </div>
  );
};

export default DashBoardPage;
