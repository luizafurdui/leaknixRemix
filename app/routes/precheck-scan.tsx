import { useSearchParams, useNavigate } from "@remix-run/react";
import { useEffect } from "react";

export default function PrecheckScan() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      setTimeout(() => navigate("/"), 3000);
      return;
    }

    // Show Precheck Scan for 4 seconds, then redirect to results
    const timer = setTimeout(() => {
      navigate(`/result?email=${encodeURIComponent(email)}&precheck=true`);
    }, 7000);

    return () => clearTimeout(timer);
  }, [email, navigate]);

  return (
    <div className="precheck-scan-body min-h-screen flex flex-col justify-center items-center ">
      {/* Background Images */}
      <img className="absolute top-0 left-0 w-full h-full object-cover opacity-20" src="/images/texture.png" alt="Background" />

      {/* Precheck Scan Content */}
      <div className="text-center">
        <img src="/images/icons/Illustration.svg" alt="Scan Icon" className="w-24 h-24 mb-4" />
        <h3 className="text-xl font-bold text-white-800">Light precheck scan in progress...</h3>
        <p className="text-gray-600">Your email is being scanned currently.</p>

        {/* Loading Animation */}
        <div className="w-32 h-2 bg-gray-300 rounded-full overflow-hidden mt-4">
          <div className="animate-pulse h-full bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
