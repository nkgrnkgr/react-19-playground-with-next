import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/use-hooks">use</Link>
        </li>
        <li>
          <Link href="/counter">counter</Link>
        </li>
        <li>
          <Link href="/use-optimistic">use optimistic</Link>
        </li>
        <li>
          <Link href="/form">form</Link>
        </li>
      </ul>
    </div>
  );
}
