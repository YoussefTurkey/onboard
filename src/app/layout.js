// importing Scss Files for styling
import "./globals.scss";
// importing Google-Fonts
import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata = {
  title: "YouTurkey11 | Portfolio",
  description: "All of turkes is beautifull",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
