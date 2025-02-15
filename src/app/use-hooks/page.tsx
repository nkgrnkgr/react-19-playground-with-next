import { UsePlayground } from "./_components/playground";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchTodo = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data as Todo;
};

export default async function UseHooksPage() {
  const todo = await fetchTodo();
  return (
    <div>
      <h1>use hooks</h1>
      <UsePlayground todo={todo} />
    </div>
  );
}
