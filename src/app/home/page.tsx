import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from '@/lib/prisma'
import DetailsForm from "@/components/details-form";
import { Suspense } from "react";
export default async function Home() {
  const landingData = await (prisma.landing.findMany({
    where: {
      id: 1,
    }
  })).then((data) => {
    if (data.length > 0) {
      return data[0];
    } else {
      return null;
    }
  })
  const authIbj = await auth()
  const userObj = await currentUser()

  console.log("auth", authIbj);
  console.log("user", userObj);
  console.log("landingData", landingData);
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <DetailsForm />
    </Suspense>

  );
}
