"use client";

import { useState } from "react";
import type { Todo } from "../page";

export function UsePlayground({ todo }: { todo: Todo }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <pre>{JSON.stringify(todo, null, 2)}</pre>
      <button type="button" onClick={() => setCount(count + 1)}>
        count: {count}
      </button>
    </div>
  );
}
