import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface OrderConfirmationProps {
  isOpen: boolean;
  orderNumber: string;
  onClose: () => void;
}

export default function OrderConfirmation({ isOpen, orderNumber, onClose }: OrderConfirmationProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="minecraft-container p-6 max-w-md w-full mx-4 border-[#555555] bg-[#373737]">
        <DialogHeader className="flex justify-between items-center mb-4">
          <DialogTitle className="font-minecraft text-2xl">ORDER CONFIRMED!</DialogTitle>
          <Button onClick={onClose} variant="ghost" className="minecraft-btn p-1 h-auto">
            <X className="h-5 w-5" />
          </Button>
        </DialogHeader>
        
        <div className="minecraft-container p-4 mb-4">
          <DialogDescription className="mb-4 text-white">
            Thank you for your order! We'll contact you soon to complete your Netherite trade.
          </DialogDescription>
          <p className="text-[#7B5C00] font-minecraft">
            YOUR ORDER NUMBER: <span id="order-number">{orderNumber}</span>
          </p>
        </div>
        
        <DialogFooter className="flex justify-center sm:justify-center">
          <Button onClick={onClose} className="minecraft-btn bg-[#4A934A] px-6 py-2">GOT IT!</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
