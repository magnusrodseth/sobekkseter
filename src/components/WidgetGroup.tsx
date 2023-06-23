import type { ReactNode } from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

interface WidgetGroupProps {
  label: string;
  className?: string;
  children: ReactNode;
}

const WidgetGroup = ({ label, className, children }: WidgetGroupProps) => {
  return (
    <Card className={cn(className, "p-2")}>
      <CardHeader>
        <CardTitle>{label}</CardTitle>
      </CardHeader>
      {children}
    </Card>
  );
};

export default WidgetGroup;
