import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex items-center gap-0.5 sm:gap-1">
        <img src="/logo.svg" alt="Logo" className="h-12 w-12" />
        <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-[#4A90E2] to-[#8B5CF6] bg-clip-text text-transparent">
          Coaching
        </span>
        <span className="text-xl sm:text-2xl font-extrabold text-gray-800 dark:text-white">
          Space
        </span>
      </Link>
    </div>
  );
}
