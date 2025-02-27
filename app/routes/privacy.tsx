import { useEffect } from "react";
import { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "LeakNix Privacy Policy" },
    { name: "description", content: "Privacy Policy for LeakNix - Learn how we protect your personal information" },
  ];
};

export default function Privacy() {
  // Inițializează WOW.js
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy for LeakNix</h1>
        <p className="text-sm text-neutral-color mb-4 text-center">Last Updated: February 2025</p>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p>LeakNix is a security-focused web application that helps users check if their credentials have been exposed in data breaches. Your privacy is important to us, and we are committed to protecting your personal information.</p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
          <ul>
            <li><strong>User Input Data:</strong> Email addresses, usernames, or phone numbers entered by users for breach checks.</li>
            <li><strong>Payment Information:</strong> Processed securely via <strong>Stripe</strong>. We do not store payment details.</li>
            <li><strong>Log Data:</strong> We may collect logs for debugging and security purposes.</li>
            <li><strong>Cookies & Analytics:</strong> Used to improve the user experience.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
          <ul>
            <li>To check for credential breaches via the <strong>LeakCheck API</strong>.</li>
            <li>To process payments securely via <strong>Stripe</strong>.</li>
            <li>To enhance security and prevent fraud.</li>
            <li>To provide customer support.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">4. Data Storage & Security</h2>
          <ul>
            <li>We <strong>do not store</strong> email addresses, usernames, or phone numbers beyond the duration of a scan.</li>
            <li>Sensitive API requests are <strong>encrypted</strong> and processed securely.</li>
            <li>Payment transactions are handled by <strong>Stripe</strong>, which is PCI-compliant for security.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">5. Third-Party Services</h2>
          <p>We integrate with:</p>
          <ul>
            <li><strong>LeakCheck API</strong> – Retrieves data breach reports.</li>
            <li><strong>Stripe</strong> – Processes payments securely.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">6. Your Rights & Choices</h2>
          <ul>
            <li>You can choose <strong>not to provide personal data</strong>, but this may limit functionality.</li>
            <li>You can request <strong>deletion of any stored personal information</strong>.</li>
            <li>You can opt out of non-essential cookies via browser settings.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">7. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time, and any significant changes will be communicated via the app.</p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">8. Contact Information</h2>
          <p>If you have any questions, contact us at: <strong>support@leaknix.com</strong></p>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}