import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/Cookie/CookieBanner";
import AdsComponent from "@/components/AdsComponent";

const siteUrl:any = process.env.NEXT_PUBLIC_DOMAIN_URL;
const ga_id:any= process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "sqlpey",
    template: `%s | sqlpey`,
  },
  description: "Let's Explore SQL and Database.",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <GoogleAnalytics GA_MEASUREMENT_ID={ga_id}/>
        <Navbar />
        {/* Padding for Navbar */}
        <AdsComponent />

        <div className="pb-20 mt-28">{children}</div>
        <CookieBanner />
        <AdsComponent />

        <Footer />
      </body>
    </html>
  );
}
