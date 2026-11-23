import "./globals.css";

export const metadata = {
  title: "Akshat Bhatnagar | Creative Developer",
  description:
    "Akshat Bhatnagar builds modern web experiences, scalable applications, intelligent CRM solutions, and interactive digital products.",
  keywords: ["Akshat Bhatnagar", "Full Stack Developer", "Creative Developer", "React", "Next.js"],
  openGraph: {
    title: "Akshat Bhatnagar | Creative Developer",
    description: "Digital experiences shaped by code, curiosity, and craft.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
