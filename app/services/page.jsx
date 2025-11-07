import Script from "next/script";
import ServicesPage from "./ServicesPage";

export const metadata = {
  title: "HP - Professional Printer Download Driver & Setup Solutions",
  description:
    "Expert printer services including installation, troubleshooting, maintenance, and 24/7 technical assistance for all printer brands.",
  icons: {
    icon: "/hplogo.png",
  },
};

export default function Page() {
  return (
    <>
      

      <ServicesPage />
    </>
  );
}

