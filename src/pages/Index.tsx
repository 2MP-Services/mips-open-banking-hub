
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
  Network,
  CreditCard,
  Building,
  TrendingUp,
  Coins
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
        "usd_equivalent": "50000.00",
        "oil_backing": "1250.00_barrels",
        "gold_backing": "25.00_oz"
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
              <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors">Services</a>
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
              🌐 Multipolar International Payment System with USSD Base Currency
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Multipolar International
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Payment System</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              MIPS (Multipolar International Payment System) enables seamless cross-border transactions between countries 
              using local currencies, backed by USSD pegged to oil and gold for maximum stability and trust.
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
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Banknote className="h-5 w-5 text-purple-600" />
                <span>Base Currency: <strong className="text-purple-600">USSD</strong></span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-yellow-600" />
                <span>Backed by: <strong className="text-yellow-600">Oil & Gold</strong></span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Network className="h-5 w-5 text-blue-600" />
                <span>System: <strong className="text-blue-600">Multipolar</strong></span>
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

      {/* USSD Backing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              USSD: Stability Through Real Assets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Universal Stable Settlement Dollar (USSD) is backed by physical oil and gold reserves, 
              providing unparalleled stability for international settlements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-yellow-600">Oil Backing</CardTitle>
                <CardDescription>
                  50% of USSD reserves are backed by verified oil reserves, providing commodity-based stability 
                  and protection against traditional currency volatility.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coins className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-yellow-600">Gold Reserves</CardTitle>
                <CardDescription>
                  50% backed by physical gold reserves held in secure vaults across multiple jurisdictions, 
                  ensuring long-term value preservation and trust.
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
              Comprehensive Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete payment infrastructure supporting local currencies with USSD settlement backbone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Network Accounts</CardTitle>
                <CardDescription>
                  Multi-currency accounts for financial institutions with USSD settlement capabilities 
                  and real-time balance management.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Cross-Border Transactions</CardTitle>
                <CardDescription>
                  Instant transactions between countries using local currencies with automatic 
                  USSD settlement and competitive exchange rates.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Network className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Real-Time Settlement</CardTitle>
                <CardDescription>
                  24/7 settlement system with USSD base currency ensuring immediate finality 
                  and reduced counterparty risk.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Card Issuing</CardTitle>
                <CardDescription>
                  Virtual and physical debit/credit cards linked to MIPS accounts with 
                  global acceptance and multi-currency support.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Regulatory Compliance</CardTitle>
                <CardDescription>
                  Full compliance with international financial regulations and local 
                  banking requirements across all participating countries.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Multipolar Network</CardTitle>
                <CardDescription>
                  Decentralized payment infrastructure reducing dependency on single-currency 
                  systems and promoting financial sovereignty.
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
              Integrate with the MIPS multipolar payment system using our comprehensive APIs.
            </p>
          </div>

          <Tabs defaultValue="accounts" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="accounts">Accounts</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="settlement">Settlement</TabsTrigger>
              <TabsTrigger value="cards">Card Services</TabsTrigger>
            </TabsList>
            
            <TabsContent value="accounts">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="mr-2 h-5 w-5" />
                      Get Account Information
                    </CardTitle>
                    <CardDescription>
                      Retrieve MIPS network account details with USSD balance and backing information.
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
                      JSON response with account details including oil and gold backing information.
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
            
            <TabsContent value="transactions">
              <Card>
                <CardHeader>
                  <CardTitle>Cross-Border Payments</CardTitle>
                  <CardDescription>
                    Initiate payments between countries using local currencies with USSD settlement.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">POST</Badge>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">/v1/transactions/cross-border</code>
                    </div>
                    <p className="text-gray-600">
                      Send payments in local currency with automatic USSD conversion and settlement.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settlement">
              <Card>
                <CardHeader>
                  <CardTitle>USSD Settlement</CardTitle>
                  <CardDescription>
                    Real-time settlement system using USSD backed by oil and gold reserves.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">GET</Badge>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">/v1/settlement/ussd</code>
                    </div>
                    <p className="text-gray-600">
                      Monitor settlement status with real-time backing verification and reserve audits.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="cards">
              <Card>
                <CardHeader>
                  <CardTitle>Card Issuing Services</CardTitle>
                  <CardDescription>
                    Issue virtual and physical cards linked to MIPS accounts with global acceptance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">POST</Badge>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">/v1/cards/issue</code>
                    </div>
                    <p className="text-gray-600">
                      Create virtual or physical cards with multi-currency support and USSD settlement.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join the MIPS Network
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect your financial institution to the multipolar payment infrastructure.
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
                  Register your institution and establish MIPS connectivity with USSD settlement capabilities.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center border-purple-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <CardTitle>Integration & Testing</CardTitle>
                <CardDescription>
                  Test cross-border payments, card issuing, and settlement in our sandbox environment.
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
                  Launch with full MIPS capabilities including local currency transactions and USSD settlement.
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
                Multipolar International Payment System enabling cross-border transactions with USSD backed by oil and gold.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Network Accounts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cross-Border Payments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Card Issuing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">USSD Settlement</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Network</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Join Network</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integration Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support Portal</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">USSD Backing</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Oil Reserves</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gold Holdings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reserve Audits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transparency Reports</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MIPS Network. Multipolar International Payment System with USSD backed by oil and gold reserves.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
