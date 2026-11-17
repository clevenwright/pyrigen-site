import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pyrigen",
  description: "Pyrigen builds agentic AI products that help people perform when it counts, and custom agentic AI solutions for companies.",
  verification: {
    google: "abc123XYZ_realcodehere",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pyrigen Incorporated",
    url: "https://pyrigen.com",
    email: "hello@pyrigen.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dallas",
      addressRegion: "TX",
      addressCountry: "US",
    },
    founder: {
      "@type": "Person",
      name: "Cleven Wright",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Pyrigen do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pyrigen builds agentic AI products that help people perform when it counts, and designs custom agentic AI solutions for companies.",
        },
      },
      {
        "@type": "Question",
        name: "Does Pyrigen build custom AI for companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Pyrigen designs and builds custom agentic AI solutions for teams that want results like our products deliver, inside their own business. Email hello@pyrigen.com to start a conversation.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Pyrigen located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pyrigen Incorporated is a Texas corporation headquartered in Dallas, Texas.",
        },
      },
      {
        "@type": "Question",
        name: "What does the name Pyrigen mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pyrigen combines pyr, the Greek root for fire, with gen, meaning to generate. The name describes the generative spark: the point where an idea catches and becomes something real.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Pyrigen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Email hello@pyrigen.com.",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}