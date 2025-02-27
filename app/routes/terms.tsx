import { useEffect } from "react";
import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "LeakNix - Terms of Service" },
    { name: "description", content: "Terms of Service for LeakNix - Rules and guidelines for using our platform" },
  ];
};

export default function Terms() {
  // Inițializează WOW.js
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <div className="text-[var(--white-colour)] font-sans">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-[var(--sky-blue)] mb-6 text-center">LeakNix Terms of Service</h1>
        <p className="text-[var(--neutral-color)] text-center mb-8">Last Updated: February 2025</p>
        
        <div className=" rounded-lg p-6 shadow-lg">
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-[var(--sky-blue)] mb-4">1. Acceptance of Terms</h2>
                <p>By accessing and using LeakNix ("Service"), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must discontinue use of the Service immediately.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-[var(--sky-blue)] mb-4">2. Description of Service</h2>
                <p>LeakNix is a cybersecurity platform that helps users identify leaked credentials and security vulnerabilities. The Service is provided "as is" without any guarantees regarding accuracy, completeness, or effectiveness.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-[var(--sky-blue)] mb-4">3. User Eligibility</h2>
                <ul className="list-disc pl-5">
                    <li>Be at least 18 years old or have legal permission from a parent or guardian.</li>
                    <li>Use the Service in compliance with applicable laws and regulations.</li>
                    <li>Not use the Service for illegal activities, including unauthorized security testing or hacking.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-[var(--sky-blue)] mb-4">4. Prohibited Activities</h2>
                <p>When using LeakNix, you agree <strong>not</strong> to:</p>
                <ul className="list-disc pl-5">
                    <li>Use the Service to gain unauthorized access to systems, networks, or accounts.</li>
                    <li>Engage in illegal, harmful, or malicious activities such as hacking, phishing, or data theft.</li>
                    <li>Reverse engineer, copy, or distribute any part of LeakNix without authorization.</li>
                    <li>Violate any applicable cybersecurity, privacy, or intellectual property laws.</li>
                </ul>
                <p className="mt-4">LeakNix reserves the right to suspend or terminate any account found in violation of these rules.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-[var(--sky-blue)] mb-4">5. Intellectual Property Rights</h2>
                <ul className="list-disc pl-5">
                    <li>All content, software, trademarks, logos, and branding associated with LeakNix are owned by LeakNix Inc. and are protected under copyright and intellectual property laws.</li>
                    <li>You may not reproduce, distribute, or modify any part of LeakNix without prior written consent.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-[var(--sky-blue)] mb-4">6. Privacy Policy</h2>
                <p>Your use of LeakNix is subject to our <Link to="/privacy" className="text-[var(--sky-blue)] hover:underline">Privacy Policy</Link>, which outlines how we collect, use, and protect user data.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-[var(--sky-blue)] mb-4">7. Disclaimer of Warranties</h2>
                <p>LeakNix is provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis. We do not guarantee that:</p>
                <ul className="list-disc pl-5">
                    <li>The Service will always be available or error-free.</li>
                    <li>Security vulnerabilities identified by LeakNix are 100% accurate or up to date.</li>
                    <li>Any recommendations provided will prevent cybersecurity threats.</li>
                </ul>
                <p className="mt-4">Users assume all risks related to the use of the Service.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-[var(--sky-blue)] mb-4">8. Limitation of Liability</h2>
                <p>LeakNix and its owners, employees, or affiliates shall not be liable for:</p>
                <ul className="list-disc pl-5">
                    <li>Any direct, indirect, incidental, or consequential damages arising from the use or inability to use the Service.</li>
                    <li>Unauthorized access to, loss of, or alterations to your data.</li>
                    <li>Any actions taken based on information provided by the Service.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-[var(--sky-blue)] mb-4">9. Account Termination</h2>
                <p>We reserve the right to terminate or suspend your access to LeakNix at any time if:</p>
                <ul className="list-disc pl-5">
                    <li>You violate these Terms.</li>
                    <li>You engage in fraudulent or illegal activities.</li>
                    <li>Required by law enforcement or regulatory authorities.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-[var(--sky-blue)] mb-4">10. Changes to Terms</h2>
                <p>LeakNix may update these Terms periodically. Users will be notified of significant changes via email or an in-app notification. Continued use of the Service after changes are made constitutes acceptance of the new Terms.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-[var(--sky-blue)] mb-4">11. Governing Law</h2>
                <p>These Terms shall be governed and interpreted in accordance with the laws of [Country/State], without regard to conflict of law principles.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-[var(--sky-blue)] mb-4">12. Contact Information</h2>
                <p>For any questions or concerns regarding these Terms, please contact us at: <a href="mailto:support@leaknix.com" className="text-[var(--sky-blue)] hover:underline">support@leaknix.com</a></p>
            </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}