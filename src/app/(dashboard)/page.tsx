'use client';

import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";

const DashBoardPage = () => {
  const session = useSession();
  console.log(session);
  
  return (
    <div>
      <Link href="/signin">
        <Button>sign in</Button>
      </Link>
    </div>
  );
};

export default DashBoardPage;
