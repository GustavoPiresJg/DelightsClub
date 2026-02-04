import "./globals.css";

export const metadata = {
  title: "Zero Delights Club",
  description: "Healthy and delicious recipes without sugar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
