"use client";

import { startTransition, useActionState, useRef } from "react";

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
  // useOptimistic を使ってみましょう

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

export function OptimisticForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [{ messages }, runAction, isPending] = useActionState<
    {
        messages: string[];
    },
    { type: "SUBMIT", value: string },
  >(async (prev, payload) => {
    if (payload.type === "SUBMIT") {
      await fetchData();
      const newState = {
        messages: [...prev.messages, payload.value],
      }
      return newState
    }
    return prev;
  }, {
    messages: [],
  });

  const formAction = async (formData: FormData) => {
    formRef.current?.reset();
    const message = formData.get("message");
    if (message) {
      runAction({ type: "SUBMIT", value: message as string });
    }
  };

  return (
    <form action={formAction} ref={formRef}>
      <input name="message" type="text" /> {isPending && "Sending..."}
      <button type="submit">Submit</button>
      <ul>
        {messages.map((message, index) => (
          <li key={`${message}`}>{message}</li>
        ))}
      </ul>
    </form>
  );
}
