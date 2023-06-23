import ErrorDisplay from "@/components/ErrorDisplay";

const NotFoundPage = () => {
  return (
    <ErrorDisplay
      title="Oisann!"
      description="Denne siden finnes ikke."
      buttonText="Gå tilbake"
      redirectHref="/"
    />
  );
};

export default NotFoundPage;
