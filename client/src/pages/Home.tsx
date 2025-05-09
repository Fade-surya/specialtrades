import { useState } from 'react';
import TradeSection from "@/components/TradeSection";
import HowItWorks from "@/components/HowItWorks";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import OrderConfirmation from "@/components/OrderConfirmation";
import LinkedAccounts from "@/components/LinkedAccounts";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const { toast } = useToast();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleOrderSuccess = (orderNum: string) => {
    setOrderNumber(orderNum);
    setIsConfirmationOpen(true);
  };

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false);
    toast({
      title: "Order confirmed!",
      description: `Your order ${orderNumber} has been received.`,
    });
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-10 bg-[#1D1D1D] border-b-2 border-[#555555] px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#7B5C00] mr-3 minecraft-item"></div>
            <h1 className="font-minecraft text-xl md:text-2xl">NETHERITE TRADE</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <button onClick={() => scrollToSection('trade')} className="minecraft-btn">TRADE</button>
            <button onClick={() => scrollToSection('linked-accounts')} className="minecraft-btn">LINKED ACCOUNTS</button>
            <button onClick={() => scrollToSection('how-it-works')} className="minecraft-btn">HOW IT WORKS</button>
            <a href="/items" className="minecraft-btn flex items-center justify-center">ITEM PRICES</a>
            <button onClick={() => scrollToSection('order')} className="minecraft-btn">ORDER NOW</button>
          </nav>
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden minecraft-btn p-2"
            aria-label="Toggle mobile menu"
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#373737] border-b-2 border-[#555555]">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <button onClick={() => scrollToSection('trade')} className="minecraft-btn w-full">TRADE</button>
            <button onClick={() => scrollToSection('linked-accounts')} className="minecraft-btn w-full">LINKED ACCOUNTS</button>
            <button onClick={() => scrollToSection('how-it-works')} className="minecraft-btn w-full">HOW IT WORKS</button>
            <a href="/items" className="minecraft-btn w-full text-center">ITEM PRICES</a>
            <button onClick={() => scrollToSection('order')} className="minecraft-btn w-full">ORDER NOW</button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <TradeSection />
        <div id="linked-accounts">
          <LinkedAccounts />
        </div>
        <HowItWorks />
        <OrderForm onOrderSuccess={handleOrderSuccess} />
      </main>

      <Footer />

      <OrderConfirmation 
        isOpen={isConfirmationOpen} 
        orderNumber={orderNumber} 
        onClose={handleCloseConfirmation} 
      />
    </div>
  );
}
