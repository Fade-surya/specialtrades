import { FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1D] border-t-2 border-[#555555] px-4 py-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-minecraft">NETHERITE TRADE SERVICE</p>
            <p className="text-sm text-[#8B8B8B]">The premium Minecraft trading experience</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="minecraft-btn p-2" aria-label="Discord">
              <FaDiscord className="text-xl" />
            </a>
            <a href="#" className="minecraft-btn p-2" aria-label="Twitter">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="minecraft-btn p-2" aria-label="YouTube">
              <FaYoutube className="text-xl" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-[#555555] text-center text-sm text-[#8B8B8B]">
          <p>This is a fan-made Minecraft trading service. Not affiliated with Mojang or Microsoft.</p>
          <p className="mt-2">© {new Date().getFullYear()} Netherite Trade Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
