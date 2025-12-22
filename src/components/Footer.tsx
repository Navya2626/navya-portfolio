import {
  EnvelopeIcon,
  LinkIcon,
  GlobeAltIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-gray-800 transition-colors">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-between sm:text-left gap-8">
          {/* Name */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Navya M K
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Frontend Developer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* Email */}
            <a
              href="mailto:navya.mk@email.com"
              aria-label="Email"
              className="group"
            >
              <div
                className="
                  flex h-12 w-12 items-center justify-center rounded-lg
                  bg-purple-100 dark:bg-purple-900/40
                  transition-transform duration-200
                  group-hover:scale-105
                "
              >
                <EnvelopeIcon className="h-6 w-6 text-purple-600 stroke-[1.5]" />
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group"
            >
              <div
                className="
                  flex h-12 w-12 items-center justify-center rounded-lg
                  bg-purple-100 dark:bg-purple-900/40
                  transition-transform duration-200
                  group-hover:scale-105
                "
              >
                <GlobeAltIcon className="h-6 w-6 text-purple-600 stroke-[1.5]" />
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group"
            >
              <div
                className="
                  flex h-12 w-12 items-center justify-center rounded-lg
                  bg-purple-100 dark:bg-purple-900/40
                  transition-transform duration-200
                  group-hover:scale-105
                "
              >
                <LinkIcon className="h-6 w-6 text-purple-600 stroke-[1.5]" />
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/your-instagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group"
            >
              <div
                className="
                  flex h-12 w-12 items-center justify-center rounded-lg
                  bg-purple-100 dark:bg-purple-900/40
                  transition-transform duration-200
                  group-hover:scale-105
                "
              >
                <CameraIcon className="h-6 w-6 text-purple-600 stroke-[1.5]" />
              </div>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gray-200 dark:bg-gray-700/60" />

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Navya M K. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
