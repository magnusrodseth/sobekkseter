"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { P } from "@/components/ui/typography";
import translateLastUpdated from "@/utils/translateLastUpdated";

interface WebcamDisplayProps {
  imageUrl: string;
  observationTime: string;
}

export function WebcamDisplay({
  imageUrl,
  observationTime,
}: WebcamDisplayProps) {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const refreshImage = useCallback(() => {
    setIsLoading(true);
    setHasError(false);
    setTimestamp(Date.now());
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  const cacheBustedUrl = imageUrl.includes("?")
    ? `${imageUrl}&t=${timestamp}`
    : `${imageUrl}?t=${timestamp}`;

  if (hasError) {
    return (
      <div className="bg-muted text-muted-foreground flex aspect-[4/3] w-full max-w-[640px] items-center justify-center rounded-md">
        <span className="text-sm">Kunne ikke laste bildet</span>
      </div>
    );
  }

  return (
    <Dialog onOpenChange={(open) => open && refreshImage()}>
      <DialogTrigger>
        <div className="flex h-auto w-full flex-col p-2">
          <div className="relative aspect-[4/3] w-full max-w-[640px]">
            {isLoading && <Skeleton className="absolute inset-0 rounded-md" />}
            <img
              src={cacheBustedUrl}
              alt="Web Camera Image"
              onLoad={handleLoad}
              onError={handleError}
              className={cn(
                "h-full w-full cursor-pointer rounded-md object-cover transition-opacity duration-300",
                isLoading ? "opacity-0" : "opacity-100",
              )}
            />
          </div>
          <P className="text-center italic">
            {translateLastUpdated(observationTime)}
          </P>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] sm:max-w-[80%]">
        <DialogTitle className="sr-only">Webkamera</DialogTitle>
        <AspectRatio ratio={4 / 3}>
          <img
            src={cacheBustedUrl}
            alt="Web Camera Image"
            className="h-full w-full rounded-md object-contain"
          />
        </AspectRatio>
        <DialogDescription className="flex items-center justify-center">
          {translateLastUpdated(observationTime)}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
