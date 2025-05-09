import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters').max(16, 'Username must be 16 characters or less'),
  email: z.string().email('Please enter a valid email address'),
  server: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface OrderFormProps {
  onOrderSuccess: (orderNumber: string) => void;
}

export default function OrderForm({ onOrderSuccess }: OrderFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      server: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await apiRequest('POST', '/api/orders', data);
      const result = await response.json();
      onOrderSuccess(result.orderNumber);
      form.reset();
    } catch (error) {
      console.error('Order submission failed:', error);
      toast({
        title: "Order failed",
        description: "There was an error submitting your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="order" className="section-transition">
      <h2 className="minecraft-heading text-3xl md:text-4xl mb-6">ORDER YOUR TRADE</h2>
      
      <div className="minecraft-container p-6 md:p-8 rounded-lg">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block font-minecraft mb-2">
                        MINECRAFT USERNAME <span className="text-[#AA0000]">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="minecraft-input w-full" 
                          placeholder="Your Minecraft username" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block font-minecraft mb-2">
                        EMAIL ADDRESS <span className="text-[#AA0000]">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email" 
                          className="minecraft-input w-full" 
                          placeholder="Your email address" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="server"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block font-minecraft mb-2">
                        SERVER (OPTIONAL)
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="minecraft-input w-full" 
                          placeholder="Server IP address (if applicable)" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block font-minecraft mb-2">
                        MESSAGE
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          className="minecraft-input w-full" 
                          rows={4} 
                          placeholder="Any special instructions or questions" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="minecraft-btn bg-[#4A934A] px-6 py-3 w-full text-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <span className="minecraft-loader mr-2"></span>
                        PROCESSING...
                      </span>
                    ) : 'SUBMIT ORDER'}
                  </button>
                </div>
              </form>
            </Form>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="minecraft-container p-4 rounded mb-6">
              <h3 className="font-minecraft text-xl mb-3">TRADE SUMMARY</h3>
              <div className="flex justify-between items-center py-2 border-b border-[#555555]">
                <span>You provide:</span>
                <span className="font-bold text-[#7B5C00]">1x Netherite Ingot</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#555555]">
                <span>You receive:</span>
                <span className="font-bold text-[#4A934A]">1x Netherite Sword</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>Processing time:</span>
                <span className="font-minecraft">24 HOURS MAX</span>
              </div>
            </div>
            
            <div className="minecraft-container p-4 rounded">
              <h3 className="font-minecraft text-xl mb-3">GALLERY</h3>
              <div className="grid grid-cols-2 gap-2">
                {/* SVG representations of Minecraft-related images */}
                <div className="w-full h-24 object-cover minecraft-item flex items-center justify-center">
                  <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="80" fill="#3E3E3E"/>
                    <rect x="10" y="10" width="20" height="20" fill="#5F4F36"/>
                    <rect x="40" y="10" width="20" height="20" fill="#5F4F36"/>
                    <rect x="70" y="10" width="20" height="20" fill="#5F4F36"/>
                    <rect x="10" y="40" width="20" height="20" fill="#5F4F36"/>
                    <rect x="40" y="40" width="20" height="20" fill="#5F4F36"/>
                    <rect x="70" y="40" width="20" height="20" fill="#5F4F36"/>
                  </svg>
                </div>
                
                <div className="w-full h-24 object-cover minecraft-item flex items-center justify-center">
                  <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="80" fill="#2F2F2F"/>
                    <rect x="0" y="50" width="100" height="30" fill="#4D7A4D"/>
                    <rect x="20" y="30" width="60" height="20" fill="#795C34"/>
                    <rect x="40" y="10" width="20" height="20" fill="#795C34"/>
                    <circle cx="80" cy="20" r="10" fill="#FFF066"/>
                  </svg>
                </div>
                
                <div className="w-full h-24 object-cover minecraft-item flex items-center justify-center">
                  <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="80" fill="#3E3E3E"/>
                    <path d="M50 10V70L40 60V20L50 10Z" fill="#5F4F36"/>
                    <path d="M50 10L60 20V60L50 70" fill="#5F4F36"/>
                    <rect x="45" y="10" width="10" height="60" fill="#6E6E6E"/>
                  </svg>
                </div>
                
                <div className="w-full h-24 object-cover minecraft-item flex items-center justify-center">
                  <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="80" fill="#3E3E3E"/>
                    <rect x="10" y="10" width="80" height="60" fill="#555555"/>
                    <rect x="15" y="15" width="10" height="10" fill="#6E6E6E"/>
                    <rect x="30" y="15" width="10" height="10" fill="#6E6E6E"/>
                    <rect x="45" y="15" width="10" height="10" fill="#6E6E6E"/>
                    <rect x="60" y="15" width="10" height="10" fill="#6E6E6E"/>
                    <rect x="75" y="15" width="10" height="10" fill="#6E6E6E"/>
                    <rect x="15" y="30" width="10" height="10" fill="#6E6E6E"/>
                    <rect x="30" y="30" width="10" height="10" fill="#5F4F36"/>
                    <rect x="45" y="30" width="10" height="10" fill="#5F4F36"/>
                    <rect x="60" y="30" width="10" height="10" fill="#5F4F36"/>
                    <rect x="75" y="30" width="10" height="10" fill="#6E6E6E"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
