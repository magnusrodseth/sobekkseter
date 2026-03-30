const tendencyMap: Record<string, string> = {
  "Falling Rapidly": "Synker raskt",
  "Falling Slowly": "Synker sakte",
  "Steady": "Stabilt",
  "Rising Slowly": "Stiger sakte",
  "Rising Rapidly": "Stiger raskt",
};

export default function translatePressureTendency(tendency: string): string {
  return tendencyMap[tendency] ?? tendency;
}
