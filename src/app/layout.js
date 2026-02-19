import "./globals.css";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Trimsel",
  description: "AI Development Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="app-root">
          <PageTransition>
            {children}
          </PageTransition>
        </div>
      </body>
    </html>
  );
}
