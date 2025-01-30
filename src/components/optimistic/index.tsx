"use client";

import { startTransition, useActionState } from "react";

// 0-10までのランダムな数値を返す関数
const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 11);
};

// 非同期データ取得関数
const fetchData = async (): Promise<{
  count: number;
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        count: getRandomNumber(),
      });
    }, 2000);
  });
};

export function Optimistic() {
  const [count, runAction, isPending] = useActionState<
    number,
    { type: "INCREMENT" }
  >(async (prev, payload) => {
    if (payload.type === "INCREMENT") {
      await fetchData();
      return prev + 1;
    }
    return prev;
  }, 0);

  const handleClick = () => {
    startTransition(() => {
      runAction({ type: "INCREMENT" });
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={handleClick} disabled={isPending}>
        Increment
      </button>
    </div>
  );
}
