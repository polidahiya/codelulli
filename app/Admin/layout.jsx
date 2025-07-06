import Verification from "@/app/Verifytoken";
import { notFound } from "next/navigation";

export default async function RootLayout({ children }) {
  const { verified } = await Verification();
  if (!verified) return notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
