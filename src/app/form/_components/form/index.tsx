"use client";

import { increment } from "./action";

// next.jsのサーバーアクションを確認してみましょう
// useActionStateを使ってcountを表示してみましょう
export function From() {
  return (
    <form action={increment}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      {/* <p>{count}</p> */}
    </form>
  );
}
