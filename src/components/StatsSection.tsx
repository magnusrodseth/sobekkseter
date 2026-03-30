"use client";

import type Conditions from "@/types/conditions";
import DailyStats from "./stats/DailyStats";
import MonthlyStats from "./stats/MonthlyStats";
import YearlyStats from "./stats/YearlyStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardHeader, CardTitle } from "./ui/card";

interface StatsSectionProps {
  conditions: Conditions;
}

const StatsSection: React.FC<StatsSectionProps> = ({ conditions }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistikk</CardTitle>
      </CardHeader>
      <div className="px-4 pb-4">
        {/* Mobile + medium: tabs */}
        <div className="lg:hidden">
          <Tabs defaultValue="daily">
            <TabsList className="w-full">
              <TabsTrigger value="daily" className="flex-1">
                Daglig
              </TabsTrigger>
              <TabsTrigger value="monthly" className="flex-1">
                Månedlig
              </TabsTrigger>
              <TabsTrigger value="yearly" className="flex-1">
                Årlig
              </TabsTrigger>
            </TabsList>
            <TabsContent value="daily">
              <DailyStats conditions={conditions} />
            </TabsContent>
            <TabsContent value="monthly">
              <MonthlyStats conditions={conditions} />
            </TabsContent>
            <TabsContent value="yearly">
              <YearlyStats conditions={conditions} />
            </TabsContent>
          </Tabs>
        </div>

        {/* Large desktop: 3 columns */}
        <div className="hidden gap-3 lg:grid lg:grid-cols-3">
          <DailyStats conditions={conditions} />
          <MonthlyStats conditions={conditions} />
          <YearlyStats conditions={conditions} />
        </div>
      </div>
    </Card>
  );
};

export default StatsSection;
