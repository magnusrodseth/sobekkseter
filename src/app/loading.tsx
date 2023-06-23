import CardSkeleton from "@/components/CardSkeleton";

const RootLoading = () => {
  return (
    <div className="m-4 grid h-screen grid-cols-1 gap-4 md:grid-cols-4">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};

export default RootLoading;
