import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from '@/lib/prisma'
import DetailsForm from "@/components/details-form";
import { Suspense } from "react";
import HeroSection from "@/components/home/header";
import { Card } from "@/components/home/card";

export interface Goal {
  header: string;
  description: string;
}

export interface SliderItem {
  terms: string[];
  title: string;
  subTitle: string;
}

export interface Entity {
  name: string;
  description: string;
}

export interface LandingData {
  id: number;
  header: string;
  headerDescription: string;
  tipSectionTitle: string;
  tipSectionDescription: string;
  goalSection: Goal[];
  featuresSection: string[];
  citiesSection: string[];
  sliderSection: SliderItem[];
  operatingEntitiesSection: Entity[];
}
export default async function Home() {
  const landingData = await (prisma.landing.findMany({
    where: {
      id: 1,
    }
  })).then((data) => {

    return data[0];

  })
  const goalSection: Goal[] = await JSON.parse(JSON.stringify(landingData.goalSection))
  const authIbj = await auth()
  const userObj = await currentUser()

  console.log("auth", authIbj);
  console.log("user", userObj);
  console.log("landingData", landingData);
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <HeroSection description={landingData.headerDescription}></HeroSection>
      <div className="grid grid-cols-10 mb-8 text-right">
        <div className="col-span-2 flex items-start justify-center">
          <div className="rounded-full py-2 px-3 bg-[#223636] text-white">
            نبذه عن البرنامج
          </div>
        </div>
        <div className="col-span-8">
          <h1 className="text-[#af6c2b] text-lg  font-bold leading-snug mb-2">{landingData.tipSectionTitle}</h1>
          <p>{landingData.tipSectionDescription}</p>
        </div>
      </div>
      <h1 className="text-lg  font-bold leading-snug  text-center mb-8">
        اهداف البرنامج
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-8">
        {landingData.goalSection && Array.isArray(landingData.goalSection) && goalSection.map((goal, index: number) => (
          <Card description={goal.description} header={goal.header} image={index === 0? '/assets/enter-workforce.svg' : index === 1? '/assets/performance-based-effort.svg' : '/assets/discovering-young-talents.svg'} key={index}></Card>

          // <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          //   <h2 className="text-lg font-semibold text-[#af6c2b] mb-2">{goal.header}</h2>
          //   <p>{goal.description}</p>
          // </div>
        ))}
      </div>
      <DetailsForm />
    </Suspense>

  );
}
