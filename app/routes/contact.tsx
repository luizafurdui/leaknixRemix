import { useEffect } from "react";
import { json, type ActionFunction } from "@remix-run/node";
import { useActionData, Form } from "@remix-run/react";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

// ✅ Definim tipul pentru răspunsul acțiunii
type ActionData = {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
    form?: string;
  };
};

// ✅ Funcția `action` cu tipare corecte
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  // Extragem și verificăm datele
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const subject = formData.get("subject") as string | null;
  const message = formData.get("message") as string | null;

  // ✅ Validăm datele
  const errors: ActionData["errors"] = {};
  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "Email is required";
  if (!message) errors.message = "Message is required";

  if (Object.keys(errors).length > 0) {
    return json({ errors, success: false });
  }

  try {
    // Simulăm o trimitere reușită
    return json({
      success: true,
      message: "Your message has been sent successfully! We'll contact you soon.",
    });
  } catch (error) {
    return json({
      success: false,
      errors: { form: "An error occurred when sending the message. Please try again." },
    });
  }
};

// ✅ Componenta Contact
export default function Contact() {
  const actionData = useActionData<ActionData>(); // Definim tipul corect pentru `useActionData()`

  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <div className="bg-dark-midnight-blue-100 min-h-screen flex flex-col">
      <Header />
      <MobileMenu />

      {/* Contact Form Section */}
      <div className="flex flex-col items-center justify-center flex-grow p-20">
        <div className="bg-[var(--dark-charcoal)] shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-[var(--sky-blue)] text-center mb-6">
            Contact LeakNix
          </h1>

          {/* ✅ Afișare mesaj de succes */}
          {actionData?.success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              {actionData.message}
            </div>
          )}

          {/* ✅ Afișare erori generale */}
          {actionData?.errors?.form && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {actionData.errors.form}
            </div>
          )}

          <Form method="post" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  actionData?.errors?.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {actionData?.errors?.name && (
                <p className="text-red-500 text-xs mt-1">{actionData.errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  actionData?.errors?.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {actionData?.errors?.email && (
                <p className="text-red-500 text-xs mt-1">{actionData.errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Data Breach Report</option>
                <option>Privacy Concerns</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  actionData?.errors?.message ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>
              {actionData?.errors?.message && (
                <p className="text-red-500 text-xs mt-1">{actionData.errors.message}</p>
              )}
            </div>

            <button type="submit" className="w-full bg-[var(--sky-blue)] text-white py-2 rounded-md">
              Send Message
            </button>
          </Form>

          <div className="mt-6 text-center text-sm text-[var(--sky-blue)]">
            <p>Support Hours: Mon-Fri, 9am-5pm EST</p>
            <p>Email: support@leaknix.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
