import "./globals.css";

export const metadata = {
  title: "Trimsel",
  description: "AI Development Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div id="app-root" suppressHydrationWarning>
          {children}
        </div>
      </body>
    </html>
  );
}
