//import Lottie from "lottie-web";
import { useEffect, useRef } from "react";

interface Breach {
  source: { name: string; breach_date: string };
  fields: string[];
  password?: string;
}

export default function BreachList({ breaches }: { breaches: Breach[] }) {
  const lottieContainer = useRef(null);

  // useEffect(() => {
  //   Lottie.loadAnimation({
  //     container: lottieContainer.current!,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     path: "/assets/lottie/breaches-found.json",
  //   });
  // }, []);

  return (
    <div>
      <div ref={lottieContainer} style={{ width: 120, height: 120, margin: "0 auto" }}></div>
      <h2 className="text-white">Breaches Found!</h2>
      <p>Your email was found in {breaches.length} data breaches:</p>
      <div className="breach-container">
        {breaches.map((breach, index) => (
          <div key={index} className="breach-card">
            <h3>{breach.source.name || "Unknown"}</h3>
            <p>
              <strong>Breach Date:</strong> {breach.source.breach_date || "Unknown"}
            </p>
            <p>
              <strong>Exposed Fields:</strong> {breach.fields.join(", ")}
            </p>
            <p>
              <strong>Password:</strong> {breach.password ? "******" : "Not available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
