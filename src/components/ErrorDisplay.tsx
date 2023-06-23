import Link from "next/link";
import { Button } from "./ui/button";
import { H1, H2, H3 } from "./ui/typography";

type ErrorDisplayProps = {
  title: string;
  description: string;
  buttonText: string;
  redirectHref: string;
};

const ErrorDisplay = ({
  title,
  description,
  buttonText,
  redirectHref,
}: ErrorDisplayProps) => {
  return (
    <div className="mt-16 flex h-screen w-screen flex-col items-center justify-start space-y-8">
      <H1>{title}</H1>

      <H3>{description}</H3>

      <Link href={redirectHref}>
        <Button className="mt-4" variant="default">
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default ErrorDisplay;
