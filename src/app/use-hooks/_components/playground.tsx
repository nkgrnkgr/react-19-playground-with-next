"use client";

import { useState } from "react";
import type { Todo } from "../page";

// use の hooks を使ってみましょう
// サーバー側で use hooks を使ってみましょう
// この記事を一緒に読みましょう
// https://nextjs.org/docs/app/building-your-application/upgrading/single-page-applications
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
