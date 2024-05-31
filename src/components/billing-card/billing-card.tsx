import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { pricingCards } from "@/constants/landig-page";
import Link from "next/link";
import { Check } from "lucide-react";

type pricingCardProps = {
  title: string;
  description: string;
  price: string;
  duration: string;
  highlight: string;
  features: string[];
  priceId: string;
};

export function BillingCard(props: pricingCardProps) {
  const { title, features, price } = props;
  return (
    <Card
      className={cn("w-[300px] flex flex-col justify-between", {
        "border-2 border-orange": title === "Ultimate",
      })}
    >
      <CardHeader>
        <CardTitle className="text-orange">{title}</CardTitle>
        <CardDescription>
          {pricingCards.find((price) => price.title === title)?.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span className="text-4xl font-bold">{price}</span>
        <span>/ month</span>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div>
          {features.map((feature) => (
            <div className="flex gap-2" key={feature}>
              <Check />
              <p className="font-semibold">{feature}</p>
            </div>
          ))}
        </div>
        <Link
          className="bg-[#f3d299] dark:bg-orange border-orange border-2 p-2 w-full text-center font-bold rounded-md"
          href={`/dashboard?plan=${title}`}
        >
          Get Started
        </Link>
      </CardFooter>
    </Card>
  );
}
