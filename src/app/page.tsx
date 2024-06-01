import { BillingCard } from "@/components/billing-card/billing-card";
import Navar from "@/components/navabr";
import { Button } from "@/components/ui/button";
import { pricingCards } from "@/constants/landig-page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navar />
      <main>
        <section>
          <div className="flex items-center justify-center flex-col mt-[80px] gap-4">
            <span className="text-orange bg-orange/20 px-4  py-2 rounded-full text-sm">
              An AI powered sale assistant chatbot
            </span>
            <Image
              src="/images/corinna-ai-logo.png"
              width={500}
              height={100}
              alt="Logo"
              className="max-w-lg object-contain"
            />
            <p className="text-center maw-w-[500px] font-semibold">
              Your AI powered sales assistant! Embed Corinna AI into any website
              with just a snippet of code !
            </p>
            <Button className="bg-orange font-bold text-white  px-8">
              Start For Free
            </Button>
            <Image
              src="/images/iphonecorinna.png"
              width={400}
              height={100}
              alt="Logo"
              className="max-w-lg object-contain"
            />
          </div>
        </section>
        <section className="flex justify-center items-center flex-col gap-4 mt-10">
          <h2 className="text-4xl text-center">Choose what fits you right</h2>
          <p className="text-muted-foreground text-center max-w-lg">
            Our straight forward pricing plans are tailored to meet your needs.
            If you`&rsquo; not ready to commit you can get started for free
          </p>
          <div className="flex justify-center gap-4 flex-wrap mt-6">
            {pricingCards.map((price) => (
              <BillingCard key={price.title} {...price} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
