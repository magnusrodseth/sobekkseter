"use client";

import ErrorDisplay from "@/components/ErrorDisplay";

const ErrorPage = () => {
  return (
    <ErrorDisplay
      title="Oisann!"
      description="En feil oppsto ved henting av data."
      buttonText="Prøv igjen"
      redirectHref="/"
    />
  );
};

export default ErrorPage;
