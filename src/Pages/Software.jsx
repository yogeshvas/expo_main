import React from "react";
import Navbar_Software from "../Components/Software/Navbar-Software";
import Hero_Software from "../Components/Software/Hero-Software";
import SectionA from "../Components/Software/SectionA";
import { useState } from "react";
import SectionB from "../Components/Software/SectionB";
import {
  time_duration,
  monthPlan,
  quaterPlan,
  halfYearPlan,
  yearPlan,
  comparePlanMontlyFitness,
  comparePlanQuaterFitness,
  comparePlanHalfYearlyFitness,
  comparePlanYearlyFitness,
  comparePlanMontlyShop,
  comparePlanQuaterShop,
  comparePlanHalfYearlyShop,
  comparePlanYearlyShop,
  comparePlanMontlyRestaurant,
  comparePlanQuaterRestaurant,
  comparePlanHalfYearlyRestaurant,
  comparePlanYearlyRestaurant,
  defaultCurrentPlan,
  defaultCurrentComparePlanSector,
} from "../Components/Software/planData";
const Software = () => {
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [currentPlan, setCurrentPlan] = useState(defaultCurrentPlan);
  const [currentComparePlanSector, setCurrentComparePlanSector] = useState(
    defaultCurrentComparePlanSector
  );

  const handlePlanSelect = (index, duration) => {
    if (currentPlan === defaultCurrentPlan) {
      alert("Please select an option!");
    }

    console.log(index, duration);
    let d2Index = duration + "-" + index;
    console.log(d2Index);
    switch (d2Index) {
      case "1-0":
        setCurrentComparePlanSector(comparePlanMontlyShop);
        break;
      case "1-1":
        setCurrentComparePlanSector(comparePlanMontlyFitness);
        break;
      case "1-2":
        setCurrentComparePlanSector(comparePlanMontlyRestaurant);
        break;
      case "2-0":
        setCurrentComparePlanSector(comparePlanQuaterShop);
        break;
      case "2-1":
        setCurrentComparePlanSector(comparePlanQuaterFitness);
        break;
      case "2-2":
        setCurrentComparePlanSector(comparePlanQuaterRestaurant);
        break;
      case "3-0":
        setCurrentComparePlanSector(comparePlanHalfYearlyShop);
        break;
      case "3-1":
        setCurrentComparePlanSector(comparePlanHalfYearlyFitness);
        break;
      case "3-2":
        setCurrentComparePlanSector(comparePlanHalfYearlyRestaurant);
        break;
      case "4-0":
        setCurrentComparePlanSector(comparePlanYearlyShop);
        break;
      case "4-1":
        setCurrentComparePlanSector(comparePlanYearlyFitness);
        break;
      case "4-2":
        setCurrentComparePlanSector(comparePlanYearlyRestaurant);
        break;

      default:
        break;
    }
  };
  const handleDurationChange = (id) => {
    setSelectedDuration(id);
    switch (id) {
      case 1:
        setCurrentPlan(monthPlan);
        break;
      case 2:
        setCurrentPlan(quaterPlan);
        break;
      case 3:
        setCurrentPlan(halfYearPlan);
        break;
      case 4:
        setCurrentPlan(yearPlan);
        break;

      default:
        break;
    }
  };
  return (
    <div className="bg-secondary h-fit w-full flex flex-col items-center justify-center">
      <Navbar_Software />
      <Hero_Software />
      <SectionA
        time_duration={time_duration}
        selectedDuration={selectedDuration}
        setSelectedDuration={setSelectedDuration}
        handleDurationChange={handleDurationChange}
        currentPlan={currentPlan}
        handlePlanSelect={handlePlanSelect}
      />
      {currentComparePlanSector && (
        <SectionB currentComparePlanSector={currentComparePlanSector} />
      )}
    </div>
  );
};

export default Software;
