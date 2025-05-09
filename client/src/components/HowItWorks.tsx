export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-transition mb-16">
      <h2 className="minecraft-heading text-3xl md:text-4xl mb-6">HOW IT WORKS</h2>
      
      <div className="minecraft-container p-6 md:p-8 rounded-lg">
        {/* Trading process steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="minecraft-container p-4 rounded flex flex-col items-center">
            <div className="w-16 h-16 bg-[#7B5C00] rounded-full flex items-center justify-center mb-4">
              <span className="font-minecraft text-2xl">1</span>
            </div>
            <h3 className="font-minecraft text-xl mb-2">SUBMIT ORDER</h3>
            
            {/* SVG representation of a Minecraft order form */}
            <div className="w-full h-32 minecraft-item mb-4 flex items-center justify-center">
              <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="80" fill="#3E3E3E"/>
                <rect x="10" y="10" width="80" height="60" fill="#555555"/>
                <rect x="15" y="15" width="70" height="10" fill="#777777"/>
                <rect x="15" y="30" width="70" height="10" fill="#777777"/>
                <rect x="15" y="45" width="70" height="10" fill="#777777"/>
                <rect x="50" y="60" width="35" height="10" fill="#4A934A"/>
              </svg>
            </div>
            
            <p className="text-center">Fill out the order form with your Minecraft username and a message.</p>
          </div>
          
          <div className="minecraft-container p-4 rounded flex flex-col items-center">
            <div className="w-16 h-16 bg-[#7B5C00] rounded-full flex items-center justify-center mb-4">
              <span className="font-minecraft text-2xl">2</span>
            </div>
            <h3 className="font-minecraft text-xl mb-2">MEET IN GAME</h3>
            
            {/* SVG representation of Minecraft players meeting */}
            <div className="w-full h-32 minecraft-item mb-4 flex items-center justify-center">
              <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="80" fill="#3E3E3E"/>
                <rect x="10" y="50" width="80" height="30" fill="#4D7A4D"/>
                <rect x="20" y="30" width="20" height="20" fill="#7B7B7B"/>
                <rect x="25" y="20" width="10" height="10" fill="#D9C07A"/>
                <rect x="60" y="30" width="20" height="20" fill="#7B7B7B"/>
                <rect x="65" y="20" width="10" height="10" fill="#D9C07A"/>
              </svg>
            </div>
            
            <p className="text-center">We'll contact you to arrange a meeting place in the game.</p>
          </div>
          
          <div className="minecraft-container p-4 rounded flex flex-col items-center">
            <div className="w-16 h-16 bg-[#7B5C00] rounded-full flex items-center justify-center mb-4">
              <span className="font-minecraft text-2xl">3</span>
            </div>
            <h3 className="font-minecraft text-xl mb-2">COMPLETE TRADE</h3>
            
            {/* SVG representation of Minecraft trading interface */}
            <div className="w-full h-32 minecraft-item mb-4 flex items-center justify-center">
              <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="80" fill="#3E3E3E"/>
                <rect x="10" y="10" width="35" height="60" fill="#555555"/>
                <rect x="55" y="10" width="35" height="60" fill="#555555"/>
                <rect x="45" y="25" width="10" height="10" fill="#4A934A"/>
                <rect x="47" y="30" width="6" height="20" fill="#4A934A"/>
                <rect x="20" y="25" width="15" height="15" fill="#6E6E6E"/>
                <rect x="65" y="25" width="15" height="15" fill="#6E6E6E"/>
                <rect x="67" y="27" width="11" height="11" fill="#5F4F36"/>
                <rect x="22" y="27" width="11" height="11" fill="#5F4F36"/>
              </svg>
            </div>
            
            <p className="text-center">Exchange your Netherite Ingot for a premium Netherite Sword!</p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-[#373737]/50 rounded-lg border border-[#555555]">
          <h3 className="font-minecraft text-xl mb-3">TRADE GUARANTEE</h3>
          <p className="mb-2">We guarantee secure and reliable trading:</p>
          <ul className="list-disc list-inside space-y-1 text-[#7B5C00]">
            <li>Fast service - most trades completed within 24 hours</li>
            <li>100% genuine items with maximum durability</li>
            <li>Secure transaction process</li>
            <li>Experienced traders with perfect reputation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
