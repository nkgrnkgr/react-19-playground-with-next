import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div>
          <Link href="/">Home</Link>
        </div>
      </body>
    </html>
  );
}
