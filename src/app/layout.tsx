import type { Metadata } from "next";
import Footer from "../shared/components/footer";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Next.js App using App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
