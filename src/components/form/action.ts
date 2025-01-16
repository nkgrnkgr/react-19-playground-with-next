"use server";

let count = 0;
export async function increment() {
  await fetchData();
  count++;
  console.log(count);
  return count;
}

const fetchData = async (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve();
    }, 2000);
  });
};
