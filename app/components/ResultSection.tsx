import { useEffect, useRef } from "react";

export default function ResultSection({ email, data, loading }: { email: string; data: any; loading: boolean }) {
  const lottieContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading && data?.found === 0) {
      console.log("✅ No leaks detected - Animation would play here!");
    }
  }, [loading, data]);

  if (loading) return <h2>Checking for breaches...</h2>;

  return (
    <div className="pricing-title text-center">
      {data?.found === 0 ? (
        <>
          <div ref={lottieContainer} style={{ width: 120, height: 120, margin: "0 auto", backgroundColor: "lightgray" }}>
            {/* Placeholder animation */}
          </div>
          <h2>No Leaks Detected!</h2>
          <p>
            Email <strong>{email}</strong> is safe. Stay ahead with our In-Depth Security Report for ongoing protection.
          </p>
        </>
      ) : null}
    </div>
  );
}
