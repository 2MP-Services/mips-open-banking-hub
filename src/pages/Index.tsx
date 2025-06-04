
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Globe, 
  Code, 
  Users, 
  BookOpen,
  CheckCircle,
  ExternalLink,
  Copy,
  Play,
  Banknote,
  Network
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const apiExample = `curl -X GET "https://api.mips.network/v1/accounts" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -H "Currency: USSD"`;

  const responseExample = `{
  "accounts": [
    {
      "account_id": "mips_acc_123456789",
      "network_code": "MIPSUSSD",
      "account_number": "1234567890",
      "account_type": "settlement",
      "balance": {
        "amount": "50000.00",
        "currency": "USSD",
        "usd_equivalent": "50000.00"
      },
      "network_status": "active",
      "settlement_bank": "MIPS_CENTRAL_BANK"
    }
  ]
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MIPS Network</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
              <a href="#docs" className="text-gray-600 hover:text-purple-600 transition-colors">Documentation</a>
              <a href="#apis" className="text-gray-600 hover:text-purple-600 transition-colors">APIs</a>
              <a href="#support" className="text-gray-600 hover:text-purple-600 transition-colors">Support</a>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Join Network <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
              🌐 Revolutionary Payment Network: MIPS with USSD Base Currency
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Next Generation
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Payment Network</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              MIPS (Multilateral Interbank Payment System) is a revolutionary payment network infrastructure, 
              comparable to SWIFT and BRICS, powered by USSD as the universal base currency for seamless global transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Play className="mr-2 h-5 w-5" />
                Join the Network
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50">
                <BookOpen className="mr-2 h-5 w-5" />
                View Documentation
              </Button>
            </div>
            
            {/* Currency Highlight */}
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Banknote className="h-5 w-5 text-purple-600" />
                <span>Base Currency: <strong className="text-purple-600">USSD</strong></span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Network className="h-5 w-5 text-blue-600" />
                <span>Network Standard: <strong className="text-blue-600">MIPS Protocol</strong></span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Cards Animation */}
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-16 h-16 bg-purple-200 rounded-lg opacity-20"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <div className="w-12 h-12 bg-blue-200 rounded-lg opacity-20"></div>
        </div>
      </section>

      {/* Network Comparison Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MIPS: The New Global Payment Standard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Joining the ranks of SWIFT and BRICS as a major payment network infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-600">S</span>
                </div>
                <CardTitle>SWIFT</CardTitle>
                <CardDescription>
                  Global financial messaging network serving traditional banking with USD/EUR dominance since 1973.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-purple-200 hover:shadow-lg transition-shadow ring-2 ring-purple-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">M</span>
                </div>
                <CardTitle className="text-purple-600">MIPS</CardTitle>
                <CardDescription>
                  Next-generation payment network with USSD base currency, designed for modern digital economy and cross-border efficiency.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-600">B</span>
                </div>
                <CardTitle>BRICS</CardTitle>
                <CardDescription>
                  Regional payment system for emerging economies, facilitating trade between Brazil, Russia, India, China, and South Africa.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MIPS Network?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Revolutionary payment infrastructure with USSD base currency for seamless global transactions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Banknote className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>USSD Base Currency</CardTitle>
                <CardDescription>
                  Universal Stable Settlement Dollar (USSD) provides stability and predictability for all network transactions.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Network className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Global Network</CardTitle>
                <CardDescription>
                  Connect financial institutions worldwide through our modern, efficient payment messaging infrastructure.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Instant Settlement</CardTitle>
                <CardDescription>
                  Real-time gross settlement with USSD base currency enables immediate transaction finality.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Advanced Security</CardTitle>
                <CardDescription>
                  Military-grade encryption and blockchain-based validation ensure maximum transaction security.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Cross-Border Efficiency</CardTitle>
                <CardDescription>
                  Eliminate correspondent banking delays with direct USSD-based settlement between member institutions.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Regulatory Compliant</CardTitle>
                <CardDescription>
                  Built to meet international payment standards and regional regulatory requirements worldwide.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section id="docs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MIPS Network API Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Integrate with the MIPS payment network using our comprehensive APIs with USSD base currency support.
            </p>
          </div>

          <Tabs defaultValue="accounts" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="accounts">Network Accounts</TabsTrigger>
              <TabsTrigger value="payments">USSD Payments</TabsTrigger>
              <TabsTrigger value="settlement">Settlement</TabsTrigger>
              <TabsTrigger value="rates">Exchange Rates</TabsTrigger>
            </TabsList>
            
            <TabsContent value="accounts">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="mr-2 h-5 w-5" />
                      Get Network Account Information
                    </CardTitle>
                    <CardDescription>
                      Retrieve MIPS network account details with USSD balance information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 rounded-lg p-4 relative">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 text-gray-400 hover:text-white"
                        onClick={() => copyToClipboard(apiExample, "api")}
                      >
                        {copiedCode === "api" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                      <pre className="text-green-400 text-sm overflow-x-auto">
                        {apiExample}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Response Example</CardTitle>
                    <CardDescription>
                      Structured JSON response with MIPS network account and USSD balance information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 rounded-lg p-4 relative">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 text-gray-400 hover:text-white"
                        onClick={() => copyToClipboard(responseExample, "response")}
                      >
                        {copiedCode === "response" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                      <pre className="text-blue-400 text-sm overflow-x-auto">
                        {responseExample}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="payments">
              <Card>
                <CardHeader>
                  <CardTitle>USSD Payment Initiation</CardTitle>
                  <CardDescription>
                    Initiate secure payments using USSD base currency through the MIPS network.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">POST</Badge>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">/v1/payments/ussd</code>
                    </div>
                    <p className="text-gray-600">
                      Create instant or scheduled USSD payments with automatic currency conversion and network validation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settlement">
              <Card>
                <CardHeader>
                  <CardTitle>Network Settlement</CardTitle>
                  <CardDescription>
                    Real-time gross settlement through MIPS network using USSD base currency.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">GET</Badge>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">/v1/settlement/status</code>
                    </div>
                    <p className="text-gray-600">
                      Monitor settlement status and access detailed transaction data with real-time USSD conversion rates.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="rates">
              <Card>
                <CardHeader>
                  <CardTitle>USSD Exchange Rates</CardTitle>
                  <CardDescription>
                    Real-time exchange rates between USSD and other currencies in the MIPS network.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">GET</Badge>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">/v1/rates/ussd</code>
                    </div>
                    <p className="text-gray-600">
                      Access current USSD exchange rates and historical data for accurate payment processing and settlement.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="apis" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join the MIPS Network
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect your financial institution to the global MIPS payment network in three simple steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-purple-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <CardTitle>Network Registration</CardTitle>
                <CardDescription>
                  Register your financial institution and obtain MIPS network credentials and USSD settlement account.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center border-purple-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <CardTitle>Integration Testing</CardTitle>
                <CardDescription>
                  Test USSD payments and settlements in our comprehensive sandbox environment with simulated network traffic.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center border-purple-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <CardTitle>Go Live</CardTitle>
                <CardDescription>
                  Launch on the MIPS network with full USSD payment capabilities and global settlement access.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Apply for Network Membership
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="support" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold">MIPS Network</span>
              </div>
              <p className="text-gray-400">
                Revolutionary payment network infrastructure with USSD base currency for the future of global finance.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Network</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Network Standards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">USSD Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Settlement Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Membership</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Join Network</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Member Benefits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Certification</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support Portal</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal & Compliance</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Network Rules</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance Framework</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security Standards</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MIPS Network. All rights reserved. Global Payment Network Infrastructure with USSD Base Currency.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
