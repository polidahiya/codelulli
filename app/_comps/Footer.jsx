import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10 border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>&copy; {new Date().getFullYear()} CodeLulli. All rights reserved.</p>
        <div className="flex gap-4">
          <Link
            href="/terms"
            className="hover:underline hover:text-blue-600 transition"
          >
            Terms of Use
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:underline hover:text-blue-600 transition"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
