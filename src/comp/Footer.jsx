// components/Footer.jsx
import {
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import {
  GlobeAltIcon,
  BuildingStorefrontIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <footer className="bg-black min-w-full border-t-orange-400 text-gray-400 px-6 py-12 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-white text-xl font-bold mb-2">Highly Media</h2>
          <p className="text-sm">
            Creative-first media agency focused on design, tools, and premium visibility.
            Empowering brands to move fast and move loud.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 hover:text-white">
              <BuildingStorefrontIcon className="w-4 h-4" />
              <a href="#shop">Shop</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white">
              <RocketLaunchIcon className="w-4 h-4" />
              <a href="#features">Features</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white">
              <GlobeAltIcon className="w-4 h-4" />
              <a href="#pricing">Pricing</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white">
              <UserGroupIcon className="w-4 h-4" />
              <a href="#about">About</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white">
              <PhoneIcon className="w-4 h-4" />
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-white font-semibold mb-2">Connect</h3>
          <div className="flex items-center gap-4 mt-2">
            {/* Replace with your actual social platform links */}
            <a href="mailto:contact@highlymedia.com" className="hover:text-white">
              <EnvelopeIcon className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white">
              <GlobeAltIcon className="w-6 h-6" />
            </a>
            {/* Add other icons or use placeholders like GitHubIcon, etc. */}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center text-gray-600">
        &copy; {new Date().getFullYear()} Highly Media. All rights reserved.
      </div>
    </footer>
  );
}
