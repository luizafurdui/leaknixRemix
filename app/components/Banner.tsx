import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@remix-run/react";

// Define the expected response type
interface CheckResponse {
  success: boolean;
  leaked?: boolean;
  message?: string;
}

export default function Banner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("wow.js")
        .then((module) => new module.default().init())
        .catch(console.error);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json() as CheckResponse;
      setLoading(false);

      if (data.success) {
        navigate(`/result?email=${email}&leaked=${data.leaked}`);
      } else {
        setError(data.message || "Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("API call failed:", error);
      setLoading(false);
      setError("Network error. Please check your connection and try again.");
    }
  }

  return (
    <div className="banner-area position-relative" ref={bannerRef}>
      <div className="container">
        <div className="banner-content text-center">
          <h1 className="mb-3 wow fadeInUp">Protect your digital identity with LeakNix</h1>
          <p className="p-lg wow fadeInUp">
            Easily check if your email, username, or phone number has <br className="d-none d-sm-block" />
            been compromised in any known data breach.
          </p>

          {/* Form Inside Banner */}
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              className="p-lg me-3 wow fadeInUp"
              type="email"
              name="email"
              placeholder="Enter email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit" 
              className="check-btn check-btn2 wow fadeInUp" 
              disabled={loading}
            >
              {loading ? "Checking..." : "Check now"}
            </button>
          </form>

          {error && <div className="text-danger mt-2">{error}</div>}

          <div id="results" className="mt-4"></div>
        </div>
      </div>
    </div>
  );
}