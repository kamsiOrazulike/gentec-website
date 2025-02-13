// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-2xl px-8 py-12 bg-white rounded-lg shadow-xl">
        <div className="text-center">
          {/* Corporate Logo Icon */}
          <div className="inline-block p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>

          {/* Error Message */}
          <h1 className="mt-8 text-4xl font-bold text-gray-800">
            Page Not Found
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We apologize for the inconvenience. The page you are looking for
            might have been removed, had its name changed, or is temporarily
            unavailable.
          </p>

          {/* Support Information */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              If you believe this is a technical error, please contact our
              support team at{" "}
              <a
                href="mailto:support@gentec.com"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                support@gentec.com
              </a>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-x-4">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return Home
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Reference Number */}
          <p className="mt-8 text-sm text-gray-500">
            Reference ID:{" "}
            {Math.random().toString(36).substring(7).toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
}
