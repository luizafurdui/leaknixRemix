import { MetaFunction, ActionFunction, json } from "@remix-run/node";
import { Form, useActionData, useNavigation, useNavigate, useSubmit } from "@remix-run/react";
import { useEffect, useRef } from "react";
import MobileMenu from "../components/MobileMenu";
import CheckLeaks from "../components/CheckLeaks";
import LeakNixWorks from "../components/LeakNixWorks";
import LeakNixReport from "../components/LeakNixReport";
import LeakNixFeatures from "../components/LeakNixFeatures";
import PricingSection from "../components/PricingSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Define API response type
interface CheckResponse {
  success: boolean;
  leaked?: boolean;
  message?: string;
  email?: string; 
}

export const meta: MetaFunction = () => [
  { title: "LeakNix - Protect your digital identity" },
  { name: "description", content: "Check if your email, username, or phone number has been compromised in any known data breach." },
];

// Action function handles form submission
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");

  if (!email || typeof email !== "string") {
    return json<CheckResponse>({ 
      success: false, 
      message: "Email is required" 
    });
  }

  try {
    // Simulate API call (replace with actual check)
    const isLeaked = Math.random() < 0.5;

    return json<CheckResponse>({ 
      success: true, 
      leaked: isLeaked,
      message: "Check completed successfully",
       email: email // Return the email back so we can use it in redirection
    });
  } catch (error) {
    console.error("Error checking leak status:", error);
    return json<CheckResponse>({ 
      success: false, 
      message: "Internal server error" 
    });
  }
};

// Modified Banner component to handle form submission
function BannerWithForm() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";
  const emailRef = useRef<HTMLInputElement>(null);

  // Handle navigation after successful form submission
  useEffect(() => {
    if (actionData?.success && actionData.leaked !== undefined && actionData.email) {
      navigate(`/result?email=${actionData.email}&leaked=${actionData.leaked}`);
    }
  }, [actionData, navigate]);

  // Optional: Add wow.js effect if you were using it before
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("wow.js")
        .then((module) => new module.default().init())
        .catch(console.error);
    }
  }, []);

  return (
    <div className="banner-area position-relative">
      <div className="container">
        <div className="banner-content text-center">

          <h1 className="mb-3 wow fadeInUp">Protect your digital identity with LeakNix</h1>
          <p className="p-lg wow fadeInUp">
            Easily check if your email, username, or phone number has <br className="d-none d-sm-block" />
            been compromised in any known data breach.
          </p>

          {/* Remix Form handles submission */}
          <Form method="post" className="mt-4">
            <input
              ref={emailRef}
              className="p-lg me-3 wow fadeInUp"
              type="email"
              name="email"
              placeholder="Enter email address"
              required
            />
            <button 
              type="submit" 
              className="check-btn check-btn2 wow fadeInUp" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Checking..." : "Check now"}
            </button>
          </Form>

          {actionData && !actionData.success && (
            <p className="text-danger mt-2">{actionData.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Main index component with the modified Banner
export default function Index() {
  return (
    <main className="main-area">
      <article>
        <section className="header-banner-bg position-relative">
          <img className="banner-texture-image" src="/images/texture.png" alt="image" />
          <img className="banner-ellipse-image" src="/images/banner-ellipse.png" alt="image" />

          <Header/>
          <BannerWithForm /> {/* Using the new Banner component */}
        </section>

        <MobileMenu />
        <CheckLeaks />
        <LeakNixWorks />
        <LeakNixReport />
        <LeakNixFeatures />
        <PricingSection />
        <Testimonials />
        <FAQ />
        <Footer/>
     
      </article>
    </main>
  );
}