import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useEffect } from "react";
import globalStyles from "~/styles/global.css?url";
import "./tailwind.css";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" },
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" },
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" },
  { rel: "stylesheet", href: globalStyles },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];
export function Layout({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    const initWow = () => {
      if (typeof window.WOW !== "undefined") {
        const wow = new window.WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: true
        });
        wow.init();
        console.log("WOW initialized");
      } else {
        console.log("WOW is not defined");
      }
    };

    // Load WOW.js if it doesn't exist
    if (typeof window !== "undefined") {
      if (!document.querySelector('script[src*="wow.min.js"]')) {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js";
        script.async = true; // Changed to synchronous loading
        script.onload = initWow;
        document.body.appendChild(script);
      } else {
        // If script already exists, just initialize
        initWow();
      }
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      
        <main>{children}</main>
     
        <ScrollRestoration />
        <Scripts />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}