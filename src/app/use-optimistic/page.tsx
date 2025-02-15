"use client";

import { Optimistic, OptimisticForm } from "./_components/optimistic";

export default function Page() {
  return (
    <div>
      <h1>Optimistic Updates Demo</h1>
      <section>
        <h2>Counter Example</h2>
        <Optimistic />
      </section>

      <section>
        <h2>Form Example</h2>
        <OptimisticForm />
      </section>
    </div>
  );
}
