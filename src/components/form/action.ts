"use server";

// formDataにアクセスしてデータが取得されることを確認してみましょう
// console.logを出してどこにlogが出力されるか確認しましょう
// countをサーバーで管理して見ましょう（in memory）
export async function increment(formData: FormData) {
  await fetchData();
  //   return 0;
}

const fetchData = async (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve();
    }, 2000);
  });
};
