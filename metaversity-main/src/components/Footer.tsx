import { Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-20">
      <div className="absolute -top-16 left-0 right-0 h-16 bg-yellow-300">
        <div className="absolute -top-12 left-0 right-0 h-24 w-full" style={{
          borderRadius: "50% 50% 0 0",
          background: "#FDE047"
        }}></div>
      </div>
      <div className="bg-yellow-300 pt-8 pb-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

            <div>
              <h3 className="text-gray-800 font-bold mb-4 text-lg">PAGES</h3>
              <ul>
                <li><a href="#" className="text-gray-700 hover:text-gray-900 block py-1">Work</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-800 font-bold mb-4 text-lg">GOOD LINKS</h3>
              <ul>
                <li><a href="#" className="text-gray-700 hover:text-gray-900 block py-1">Join as a talent</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900 block py-1">Join Waitlist</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-800 font-bold mb-4 text-lg">SOCIAL STUFF</h3>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    <Instagram className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-800 font-bold mb-4 text-lg">LEGAL-SHMEGAL</h3>
              <ul>
                <li><a href="#" className="text-gray-700 hover:text-gray-900 block py-1">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900 block py-1">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-yellow-400 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-700">© 2025 Metaversity Club VITB</p>
            <p className="text-gray-700 flex items-center gap-1">
              MADE WITH <Heart className="w-4 h-4 text-red-500 fill-current" /> BY METAVERSE CLUB VITB
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;