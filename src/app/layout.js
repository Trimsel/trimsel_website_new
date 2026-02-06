import "./globals.css";


export const metadata = {
  title: "Trimsel",
  description: "Trimsel Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
