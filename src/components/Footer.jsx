import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

import Button from "./Button";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white px-6 py-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col justify-between items-center">
            <div className="mb-6">
              <img
                src="/waba-connect.svg"
                alt="WABA Connect Logo"
                className="h-12 w-auto"
              />
            </div>
            <div className="flex space-x-4">
              <a href="#">
                <Instagram
                  size={42}
                  className="text-green-500 hover:text-green-400 transition"
                />
              </a>
              <a href="#">
                <Facebook
                  size={42}
                  className="text-green-500 hover:text-green-400 transition"
                />
              </a>
              <a href="#">
                <Linkedin
                  size={42}
                  className="text-green-500 hover:text-green-400 transition"
                />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
              {[
                "Broadcasts",
                "Chatbots",
                "Team Inbox",
                "Integrations",
                "About",
                "Pricing",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-green-400 transition text-lg font-bold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {[
                "Book a demo",
                "Login",
                "Partner",
                "Contact",
                "Privacy",
                "Terms",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-green-400 transition text-lg font-bold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <Button
              type="primary"
              className="inline-block bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400 transition w-3/5"
            >
              Contact Us
            </Button>

            <div className="text-sm space-y-1 flex flex-col justify-start items-start gap-6">
              <p className="flex justify-center items-center gap-3">
                <Mail size={32} className="text-green-600" />
                <a
                  href="mailto:info@wabaconnect.com"
                  className="text-white hover:underline font-bold text-lg"
                >
                  info@wabaconnect.com
                </a>
              </p>
              <p className="flex justify-center items-center gap-3">
                <Phone size={32} className="text-green-600" />
                <a
                  href="tel:+917991358888"
                  className="text-white hover:underline font-bold text-lg"
                >
                  +91 7991358888
                </a>
              </p>
            </div>

            <form className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded bg-white text-stone-700 w-full sm:w-auto h-13"
              />
              <Button
                type="primary"
                className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400 transition"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </footer>

      <div className="text-center bg-green-700 w-full text-lg font-bold text-white py-4">
        © WABA Connect. All rights reserved.
      </div>
    </>
  );
}
