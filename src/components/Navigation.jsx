import { useState } from "react";

import { Menu, X, ChevronDown } from "lucide-react";

import Button from "./Button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [featureOpen, setFeatureOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-100 left-0 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="text-green-600 text-3xl font-extrabold">
              <img
                src="/waba-connect.svg"
                alt="loading..."
                className="h-12 w-auto"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setFeatureOpen(true)}
              onMouseLeave={() => setFeatureOpen(false)}
            >
              <Button className="flex items-center gap-1 font-medium text-gray-800 hover:text-green-600">
                Features <ChevronDown size={16} />
              </Button>
              {featureOpen && (
                <div className="absolute top-10 left-0 w-48 bg-white border border-gray-200 shadow-md rounded-lg py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Messaging
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Automation
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    Analytics
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="font-medium text-gray-800 hover:text-green-600"
            >
              Integrations
            </a>
            <a
              href="#"
              className="font-medium text-gray-800 hover:text-green-600"
            >
              Pricing
            </a>
            <a
              href="#"
              className="font-medium text-gray-800 hover:text-green-600"
            >
              Partner
            </a>
            <a
              href="#"
              className="font-medium text-gray-800 hover:text-green-600"
            >
              Blog
            </a>
            <a
              href="#"
              className="font-medium text-gray-800 hover:text-green-600"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Button
              type="primary"
              className="px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Book Demo
            </Button>
            <Button
              type="outline"
              className="border-2 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition"
            >
              Login
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-inner">
          <div className="px-4 py-3 space-y-3">
            <Button
              onClick={() => setFeatureOpen(!featureOpen)}
              className="flex items-center justify-between w-full font-medium text-gray-800"
            >
              Features <ChevronDown size={16} />
            </Button>
            {featureOpen && (
              <div className="pl-4 space-y-1">
                <a
                  href="#"
                  className="block text-gray-700 hover:text-green-600"
                >
                  Messaging
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-green-600"
                >
                  Automation
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-green-600"
                >
                  Analytics
                </a>
              </div>
            )}
            <a
              href="#"
              className="block text-gray-800 font-medium hover:text-green-600"
            >
              Integrations
            </a>
            <a
              href="#"
              className="block text-gray-800 font-medium hover:text-green-600"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block text-gray-800 font-medium hover:text-green-600"
            >
              Partner
            </a>
            <a
              href="#"
              className="block text-gray-800 font-medium hover:text-green-600"
            >
              Blog
            </a>
            <a
              href="#"
              className="block text-gray-800 font-medium hover:text-green-600"
            >
              Contact
            </a>
            <div className="flex flex-col gap-2 mt-3">
              <Button className="bg-green-600 text-white w-full px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                Book Demo
              </Button>
              <Button className="border-2 border-green-600 text-green w-full px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
