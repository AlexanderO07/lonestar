import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Hero(props: {
  title: string;
  subtitle: string;
  credits?: React.ReactNode;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}) {
  return (
    <section className="hero space-y-6 py-32 md:py-48 lg:py-52 ">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="bigwords font-heading text-3xl sm:text-5xl lg:text-7xl">
          {props.title}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {props.subtitle}
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link 
            href={props.primaryCtaLink}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {props.primaryCtaText}
          </Link>

          <Link
            href={props.secondaryCtaLink}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            {props.secondaryCtaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
