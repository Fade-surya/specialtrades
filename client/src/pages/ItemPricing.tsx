import { useState } from 'react';
import { MINECRAFT_ITEMS, type MinecraftItem } from '@/data/items';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Search, Tag } from 'lucide-react';
import Footer from '@/components/Footer';

export default function ItemPricing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  // Filter the items based on search term and category
  const filteredItems = MINECRAFT_ITEMS.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  // Get unique categories for the filter dropdown
  const uniqueCategories = Array.from(new Set(MINECRAFT_ITEMS.map(item => item.category)));
  const categories = ['all', ...uniqueCategories];
  
  // Function to render the Minecraft-style item icon
  const renderItemIcon = (itemId: string) => {
    // Use a simple colored div as a placeholder for item icons
    const colorMap: Record<string, string> = {
      'weapons': '#AA0000',
      'tools': '#4A934A',
      'armor': '#555555',
      'blocks': '#7B5C00',
      'resources': '#5D7CFF',
      'food': '#D97706',
      'misc': '#8B8B8B',
      'special': '#C026D3',
    };
    
    const item = MINECRAFT_ITEMS.find(i => i.id === itemId);
    const color = item ? colorMap[item.category] : '#8B8B8B';
    
    return (
      <div 
        className="w-12 h-12 minecraft-item flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        {itemId.charAt(0).toUpperCase()}
      </div>
    );
  };
  
  // Simple mapping for category names to make them more readable
  const getCategoryDisplayName = (category: string) => {
    const displayNames: Record<string, string> = {
      'all': 'All Items',
      'weapons': 'Weapons',
      'tools': 'Tools',
      'armor': 'Armor',
      'blocks': 'Blocks',
      'resources': 'Resources',
      'food': 'Food',
      'misc': 'Miscellaneous',
      'special': 'Special Items',
    };
    
    return displayNames[category] || category.charAt(0).toUpperCase() + category.slice(1);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-10 bg-[#1D1D1D] border-b-2 border-[#555555] px-4 py-3 mb-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#7B5C00] mr-3 minecraft-item"></div>
            <h1 className="font-minecraft text-xl md:text-2xl">NETHERITE TRADE</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="/" className="minecraft-btn flex items-center justify-center">BACK TO HOME</a>
          </nav>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-4 flex-grow">
        <h1 className="minecraft-heading text-3xl md:text-4xl mb-6">ITEM PRICING</h1>
      
        <div className="minecraft-container p-4 md:p-6 mb-8">
          <div className="mb-4">
            <h2 className="font-minecraft text-xl mb-4">TRADE RATES</h2>
            <p className="mb-2">Welcome to our Minecraft Item Trading hub! Below you'll find our current prices for all available items.</p>
            <p>All trades require <span className="text-[#7B5C00] font-bold">Netherite Ingots</span> as the base currency.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-[#8B8B8B]" />
              <Input
                placeholder="Search items..."
                className="minecraft-input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-64">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="minecraft-input">
                  <div className="flex items-center">
                    <Tag className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Filter by category" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {getCategoryDisplayName(category)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <Card key={item.id} className="minecraft-container border-[#555555] bg-[#373737] overflow-hidden">
                  <CardHeader className="pb-2 bg-[#444]">
                    <div className="flex justify-between items-center">
                      <CardTitle className="font-minecraft text-lg">{item.name}</CardTitle>
                      <Badge className={
                        item.inStock 
                          ? 'bg-[#4A934A]' 
                          : 'bg-[#AA0000]'
                      }>
                        {item.inStock ? 'In Stock' : 'Out of Stock'}
                      </Badge>
                    </div>
                    <CardDescription className="text-[#AAAAAA]">
                      {getCategoryDisplayName(item.category)}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-4">
                    <div className="flex gap-4">
                      {renderItemIcon(item.id)}
                      <div>
                        <p className="text-sm mb-2">{item.description}</p>
                        <div className="flex space-x-1 items-center">
                          <span className="text-[#AAAAAA]">Quantity:</span>
                          <span className="font-minecraft">{item.price.amount}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="bg-[#2A2A2A] border-t border-[#555555] pt-3">
                    <div className="flex justify-between items-center w-full">
                      <div className="font-minecraft text-[#7B5C00]">
                        Price: {item.price.netherite} Netherite {item.price.netherite === 1 ? 'Ingot' : 'Ingots'}
                      </div>
                      <button className="minecraft-btn py-1 px-3 text-sm">TRADE</button>
                    </div>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 minecraft-item bg-[#AA0000] flex items-center justify-center">
                    <span className="text-2xl">!</span>
                  </div>
                </div>
                <h3 className="font-minecraft text-xl mb-2">NO ITEMS FOUND</h3>
                <p>No items match your search criteria. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="minecraft-container p-4 md:p-6">
          <h2 className="font-minecraft text-xl mb-4">TRADING POLICY</h2>
          <ul className="list-disc list-inside space-y-2 text-[#AAAAAA]">
            <li>All prices are subject to change based on item availability.</li>
            <li>We only accept <span className="text-[#7B5C00]">Netherite Ingots</span> as payment.</li>
            <li>To make a trade, place an order via our order form and we'll contact you in-game.</li>
            <li>Trades will be completed within 24 hours of order placement.</li>
            <li>Special items may require advance booking.</li>
          </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}