import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raju Ahammed — Aspiring AI/ML Engineer",
  description:
    "Portfolio of Raju Ahammed, a Computer Science and Engineering student specializing in Machine Learning, Deep Learning, Data Science, and AI-powered applications. Based in Dhaka, Bangladesh.",
  keywords: [
    "Raju Ahammed",
    "AI Engineer",
    "ML Engineer",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Computer Vision",
    "Python Developer",
    "Portfolio",
  ],
  authors: [{ name: "Raju Ahammed" }],
  openGraph: {
    title: "Raju Ahammed — Aspiring AI/ML Engineer",
    description:
      "Building intelligent systems through data-driven engineering. Explore my projects in machine learning, data science, and AI applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raju Ahammed — Aspiring AI/ML Engineer",
    description:
      "Building intelligent systems through data-driven engineering. Explore my projects in machine learning, data science, and AI applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
