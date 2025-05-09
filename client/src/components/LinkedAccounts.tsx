import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface LinkedAccount {
  id: string;
  username: string;
  server: string;
  status: string;
  lastTrade?: string;
  trades?: number;
}

export default function LinkedAccounts() {  
  // Fetch linked accounts data directly
  const { data, isLoading, isError } = useQuery({
    queryKey: ['/api/linked']
  });
  
  if (isLoading) {
    return (
      <section className="mb-16">
        <h2 className="minecraft-heading text-3xl md:text-4xl mb-6">LINKED ACCOUNTS</h2>
        <div className="minecraft-container p-6 rounded-lg">
          <h3 className="font-minecraft text-xl mb-4">LOADING ACCOUNT DATA...</h3>
          <div className="space-y-4">
            <Skeleton className="h-24 w-full bg-[#555555]" />
            <Skeleton className="h-24 w-full bg-[#555555]" />
            <Skeleton className="h-24 w-full bg-[#555555]" />
          </div>
          <div className="relative mt-4 bg-[#373737] p-2 rounded-lg flex justify-center">
            <div className="minecraft-loader mr-2"></div>
            <span className="font-minecraft">CONNECTING TO API</span>
          </div>
        </div>
      </section>
    );
  }
  
  if (isError) {
    return (
      <section className="mb-16">
        <h2 className="minecraft-heading text-3xl md:text-4xl mb-6">LINKED ACCOUNTS</h2>
        <div className="minecraft-container p-6 rounded-lg">
          <Alert variant="destructive" className="mb-4 bg-[#AA0000] border-[#800000]">
            <AlertCircle className="h-5 w-5" />
            <AlertTitle className="font-minecraft">CONNECTION ERROR</AlertTitle>
            <AlertDescription>
              There was an issue connecting to the Mallu Lifesteal API. Please try again later.
            </AlertDescription>
          </Alert>
          <div className="text-center py-4">
            <p>The Linked Accounts feature requires a working connection to the Mallu Lifesteal API.</p>
          </div>
        </div>
      </section>
    );
  }
  
  // Ensure data is in the expected format - we need to adapt based on actual API response
  const linkedAccounts: LinkedAccount[] = Array.isArray(data) ? data : [];
  
  return (
    <section className="mb-16">
      <h2 className="minecraft-heading text-3xl md:text-4xl mb-6">LINKED ACCOUNTS</h2>
      
      <div className="minecraft-container p-6 md:p-8 rounded-lg">
        {linkedAccounts.length === 0 ? (
          <div className="text-center py-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 minecraft-item"></div>
            </div>
            <h3 className="font-minecraft text-xl mb-2">NO LINKED ACCOUNTS</h3>
            <p>No linked accounts were found in the database.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {linkedAccounts.map((account) => (
              <Card key={account.id} className="minecraft-container border-[#555555] bg-[#373737] overflow-hidden">
                <CardHeader className="pb-2 bg-[#444]">
                  <div className="flex justify-between items-center">
                    <CardTitle className="font-minecraft text-lg">{account.username || "Unknown Player"}</CardTitle>
                    <Badge variant={account.status === 'active' ? 'default' : 'secondary'} className={account.status === 'active' ? 'bg-[#4A934A]' : 'bg-[#8B8B8B]'}>
                      {account.status || "Unknown"}
                    </Badge>
                  </div>
                  <CardDescription className="text-[#AAAAAA]">
                    Server: {account.server || "Not specified"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 minecraft-item flex items-center justify-center">
                      <svg className="w-8 h-8" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="16" height="16" fill="#3E3E3E" fillOpacity="0.01"/>
                        <path d="M8 1L7 2V5L6 6L5 13L6 14L7 15H9L10 14L11 13L10 6L9 5V2L8 1Z" fill="#2F2F2F"/>
                        <path d="M8 2L7 3V5.5L6 6.5L5 13.5L6 14.5L7 15H9L10 14.5L11 13.5L10 6.5L9 5.5V3L8 2Z" fill="#4D4D4D"/>
                        <path d="M8 2.5L7.5 3V6L6.5 7L5.5 13L6.5 14L7.5 14.5H8.5L9.5 14L10.5 13L9.5 7L8.5 6V3L8 2.5Z" fill="#6E6E6E"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="text-[#AAAAAA]">Last Trade:</span> {account.lastTrade || "None"}
                      </p>
                      <p className="text-sm">
                        <span className="text-[#AAAAAA]">Trade Count:</span> {account.trades || "0"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        <div className="mt-6 p-3 bg-[#1D1D1D] rounded text-center text-sm text-[#8B8B8B]">
          <p>Data provided by Mallu Lifesteal API • Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </section>
  );
}