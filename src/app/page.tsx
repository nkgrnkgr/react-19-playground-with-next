import Link from "next/link";
// import { Optimistic, OptimisticForm } from "../components/optimistic";
// import { From } from "@/components/form";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* <From /> */}
      {/* <Optimistic />
      <hr />
      <OptimisticForm /> */}
      <Link href="/use-hooks">use hooks</Link>
    </div>
  );
}
