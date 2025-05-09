import { ArrowRight } from 'lucide-react';

export default function TradeSection() {
  return (
    <section id="trade" className="section-transition mb-16">
      <h2 className="minecraft-heading text-3xl md:text-4xl mb-6">PREMIUM NETHERITE TRADE</h2>
      
      <div className="minecraft-container p-6 md:p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Trade offer visualization - You give */}
          <div className="minecraft-container p-4 md:p-6 rounded flex flex-col items-center">
            <div className="minecraft-item p-2 mb-4 relative">
              <svg className="w-20 h-20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="16" height="16" fill="#3E3E3E"/>
                <path d="M4 4H12V12H4V4Z" fill="#2F2F2F"/>
                <path d="M5 5H11V11H5V5Z" fill="#4D4D4D"/>
                <path d="M6 6H10V10H6V6Z" fill="#6E6E6E"/>
                <path d="M7 7H9V9H7V7Z" fill="#7B7B7B"/>
                <path d="M6.5 6L7.5 7L8.5 6L9.5 7L10 6.5V9.5L9 9L8 10L7 9L6 9.5V6.5L6.5 6Z" fill="#5F4F36"/>
              </svg>
              <span className="absolute bottom-0 right-0 bg-black/70 px-1 font-minecraft">x1</span>
            </div>
            <p className="font-minecraft text-xl mb-2">YOU GIVE</p>
            <p className="text-[#7B5C00] font-bold">1 Netherite Ingot</p>
          </div>
          
          {/* Arrow */}
          <div className="flex items-center">
            <ArrowRight className="h-10 w-10 text-[#7B5C00]" />
          </div>
          
          {/* Trade offer visualization - You get */}
          <div className="minecraft-container p-4 md:p-6 rounded flex flex-col items-center">
            <div className="minecraft-item p-2 mb-4 relative">
              <svg className="w-20 h-20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="16" height="16" fill="#3E3E3E" fillOpacity="0.01"/>
                <path d="M8 1L7 2V5L6 6L5 13L6 14L7 15H9L10 14L11 13L10 6L9 5V2L8 1Z" fill="#2F2F2F"/>
                <path d="M8 2L7 3V5.5L6 6.5L5 13.5L6 14.5L7 15H9L10 14.5L11 13.5L10 6.5L9 5.5V3L8 2Z" fill="#4D4D4D"/>
                <path d="M8 2.5L7.5 3V6L6.5 7L5.5 13L6.5 14L7.5 14.5H8.5L9.5 14L10.5 13L9.5 7L8.5 6V3L8 2.5Z" fill="#6E6E6E"/>
                <path d="M8 3L7.75 3.5V6.25L6.75 7.25L6 13L6.75 13.75L7.75 14H8.25L9.25 13.75L10 13L9.25 7.25L8.25 6.25V3.5L8 3Z" fill="#7B7B7B"/>
                <path d="M8 2.75L7.5 3.25V6L6.5 7L5.75 13L6.5 14L7.5 14.5H8.5L9.5 14L10.25 13L9.5 7L8.5 6V3.25L8 2.75Z" fill="#5F4F36"/>
              </svg>
              <span className="absolute bottom-0 right-0 bg-black/70 px-1 font-minecraft">x1</span>
            </div>
            <p className="font-minecraft text-xl mb-2">YOU GET</p>
            <p className="text-[#4A934A] font-bold">1 Netherite Sword</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="mb-4 text-lg">The best deal in the Nether! Trade your raw materials for premium crafted items.</p>
          <a href="#order" className="minecraft-btn bg-[#4A934A] px-8 py-3 text-xl inline-block">MAKE TRADE NOW</a>
        </div>
      </div>
    </section>
  );
}
