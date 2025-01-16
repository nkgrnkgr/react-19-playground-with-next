"use client";

import { useActionState } from "react";
import { increment } from "./action";

export function From() {
  const [count, runIncrement, isPending] = useActionState(increment, 0);
  return (
    <form action={runIncrement}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input disabled={isPending} type="submit" value="Submit" />
      <p>{count}</p>
    </form>
  );
}
