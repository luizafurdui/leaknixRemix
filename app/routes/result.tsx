import { useSearchParams, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import discover from "/images/icons/discover.svg";
import FA from "/images/icons/FA.svg";
import scut from "/images/icons/scut.svg";
import PricingSection from "../components/PricingSection";

export default function Result() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") || "";
  const leaked = searchParams.get("leaked") === "true";
  const cameFromPrecheck = searchParams.get("precheck") === "true";
  const navigate = useNavigate();
  const [lottieInstance, setLottieInstance] = useState<any>(null);

  useEffect(() => {
    if (!cameFromPrecheck) {
      navigate(`/precheck-scan?email=${encodeURIComponent(email)}`);
    }
  }, [cameFromPrecheck, email, navigate]);

  useEffect(() => {
    if (!email) return;

    const loadLottie = async () => {
      const lottie = (await import("lottie-web")).default;
      setLottieInstance(lottie);

      const animationContainer = document.getElementById("lottie-animation");
      if (animationContainer) {
        lottie.destroy();
        lottie.loadAnimation({
          container: animationContainer,
          renderer: "svg",
          loop: leaked,
          autoplay: true,
          path: leaked ? "/lottie/breaches-found.json" : "/lottie/checked.json",
        });
      }
    };

    loadLottie();
  }, [leaked, email]);

  return (
    <div className="results-page min-h-screen py-5 px-4">
      <Header />

      {!email ? (
        <div className="p-4 text-center">
          <h2 className="text-2xl font-bold text-gray-700">No email provided. Redirecting...</h2>
          <div className="mt-4">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="animate-pulse h-full bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div
            id="lottie-animation"
            className="mx-auto my-8"
            style={{ width: 120, height: 120 }}
          ></div>

          {leaked ? (
            <div className="p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-red-700 mb-4">
                Breaches found in {email}!
              </h2>
            </div>
          ) : (
            <div className="items-center text-center w-full">
              <h2 className="text-xl font-semibold">Good news! {email} is safe.</h2>
              <h1 className="gradientTitle text-xxl font-bold mb-10">
                Secure Any Data That is Sensitive
              </h1>

              <div className="flex justify-center items-center gap-3">
                {/* Card 1 */}
                <div className="p-6 text-center w-[260px] h-[380px] flex flex-col items-center">
                  <img
                    src={discover}
                    alt="Discover Logo"
                    className="w-[140px] h-[140px] object-contain mb-4"
                  />
                  <h1 className="text-lg font-bold mb-2 text-left">Discover Critical Risks</h1>
                  <p className="text-gray-700 text-left text-sm leading-tight">
                    A single leaked password can lead to financial disaster – hackers can drain your bank account,
                    make unauthorized transactions, and even take out loans in your name.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="rounded-lg p-6 text-center w-[260px] h-[380px] flex flex-col items-center">
                  <img
                    src={scut}
                    alt="Discover Logo"
                    className="w-[140px] h-[140px] object-contain mb-4"
                  />
                  <h1 className="text-lg font-bold mb-2 text-left">Better to Prevent Than Recover</h1>
                  <p className="text-gray-700 text-left text-sm leading-tight">
                    Your email is safe for now, but leaks happen every day—stay one step ahead with real-time alerts and total protection.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="p-6 text-center w-[260px] h-[380px] flex flex-col items-center">
                  <img
                    src={FA}
                    alt="Discover Logo"
                    className="w-[140px] h-[140px] object-contain mb-4"
                  />
                  <h1 className="text-lg font-bold mb-2 text-left">Enable Two-Factor Authentication</h1>
                  <p className="text-gray-700 text-left text-sm leading-tight">
                    Protect your accounts with an extra layer of security—even if hackers steal your password, they won’t get in without your approval.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <PricingSection />
      <Footer />
    </div>
  );
}
