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
  Coins,
  ArrowDown,
  ArrowRightLeft,
  Clock
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How It Works</a>
              <Link to="/docs" className="text-gray-600 hover:text-purple-600 transition-colors">Documentation</Link>
              <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors">Services</a>
              <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors">About Us</Link>
              <Link to="/join">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Join Network <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
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
              <Link to="/join">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Play className="mr-2 h-5 w-5" />
                  Join the Network
                </Button>
              </Link>
              <Link to="/docs">
                <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Documentation
                </Button>
              </Link>
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

      {/* Problem Statement Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Global Payment Crisis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current payment systems exclude billions and create dependencies that limit financial sovereignty.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center">
                  <CreditCard className="mr-2 h-6 w-6" />
                  Limited Global Coverage
                </CardTitle>
                <CardDescription>
                  <strong>VISA and Mastercard do not work in all multipolar countries</strong>, 
                  creating payment barriers and limiting international commerce in emerging markets.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Restricted access in key multipolar economies</li>
                  <li>• High fees for cross-border transactions</li>
                  <li>• Dependency on Western financial infrastructure</li>
                  <li>• Limited monetary sovereignty for nations</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center">
                  <Users className="mr-2 h-6 w-6" />
                  Financial Exclusion Crisis
                </CardTitle>
                <CardDescription>
                  <strong>More than half of the world's population cannot afford to get a card.</strong> 
                  Traditional banking services are too expensive for billions of people globally.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• High account maintenance fees</li>
                  <li>• Minimum balance requirements</li>
                  <li>• Limited access to international payments</li>
                  <li>• Lack of affordable financial inclusion solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How MIPS Network Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how countries join the MIPS network and enable seamless cross-border payments 
              using USSD tokens backed by oil and gold reserves.
            </p>
          </div>

          {/* USSD Tokens Explanation */}
          <div className="mb-16">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader className="text-center">
                <CardTitle className="text-blue-700 flex items-center justify-center">
                  <Coins className="mr-2 h-6 w-6" />
                  What are USSD Tokens?
                </CardTitle>
                <CardDescription className="text-lg">
                  USSD tokens are digital representations of local currencies within the MIPS network. 
                  Each participating country receives a unique USSD token (e.g., USSD-ZAR for South Africa, USSD-CNY for China) 
                  that maintains a stable peg to their local currency while being backed by oil and gold reserves.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Step-by-Step Process */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Country Network Joining</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  South Africa joins the MIPS network by establishing connectivity with the system. 
                  Upon joining, South Africa receives a dedicated <strong>USSD-ZAR token</strong> that represents 
                  their local currency (South African Rand) within the network. This token maintains a 1:1 peg 
                  with ZAR while being backed by oil and gold reserves.
                </p>
              </div>
              <div className="lg:w-1/2">
                <Card className="border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-600">
                      <Globe className="mr-2 h-5 w-5" />
                      South Africa Joins MIPS
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Network registration completed</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>USSD-ZAR token assigned</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>1:1 peg with ZAR established</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Oil & gold backing activated</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="h-8 w-8 text-purple-400" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Daily Banking Operations</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  South African citizens and businesses use their USSD-ZAR tokens for everyday banking operations. 
                  They can make local payments, receive salaries, pay bills, and conduct all regular banking 
                  activities using their USSD balance. The system operates seamlessly with existing banking 
                  infrastructure while providing enhanced stability through oil and gold backing.
                </p>
              </div>
              <div className="lg:w-1/2">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-600">
                      <Banknote className="mr-2 h-5 w-5" />
                      Everyday Banking with USSD-ZAR
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-5 w-5 text-blue-500" />
                        <span>Local payments & transfers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Building className="h-5 w-5 text-blue-500" />
                        <span>Salary deposits & bill payments</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-blue-500" />
                        <span>Enhanced stability through backing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Network className="h-5 w-5 text-blue-500" />
                        <span>Seamless integration with banks</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="h-8 w-8 text-purple-400" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Cross-Border Payment Example</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  When South Africa needs to pay China for goods or services, the transaction flows through 
                  the MIPS network. China has its own <strong>USSD-CNY token</strong> pegged to the Chinese Yuan. 
                  The South African payer uses ZAR from their account, which is converted to USSD-ZAR tokens 
                  and then exchanged for USSD-CNY tokens based on real-time rates, before being delivered 
                  as CNY to the Chinese recipient.
                </p>
              </div>
              <div className="lg:w-1/2">
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-600">
                      <ArrowRightLeft className="mr-2 h-5 w-5" />
                      South Africa → China Payment Flow
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">South Africa</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm bg-blue-100 px-2 py-1 rounded">ZAR</span>
                          <ArrowRight className="h-4 w-4" />
                          <span className="text-sm bg-purple-100 px-2 py-1 rounded">USSD-ZAR</span>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <ArrowDown className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="text-center p-2 bg-yellow-50 rounded-lg">
                        <span className="text-sm font-medium">Real-time USSD Exchange</span>
                      </div>
                      <div className="flex justify-center">
                        <ArrowDown className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                        <span className="font-medium">China</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm bg-purple-100 px-2 py-1 rounded">USSD-CNY</span>
                          <ArrowRight className="h-4 w-4" />
                          <span className="text-sm bg-red-100 px-2 py-1 rounded">CNY</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Key Benefits of MIPS Network
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-green-200 text-center">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-green-600">Reduced Costs</CardTitle>
                  <CardDescription>
                    Eliminate traditional correspondent banking fees and reduce cross-border 
                    transaction costs by up to 80% through direct USSD token exchanges.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-blue-200 text-center">
                <CardHeader>
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-blue-600">Instant Settlement</CardTitle>
                  <CardDescription>
                    Real-time cross-border payments and settlements 24/7, eliminating the 
                    traditional 3-5 day waiting periods for international transfers.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-purple-200 text-center">
                <CardHeader>
                  <Banknote className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-purple-600">Local Currency Focus</CardTitle>
                  <CardDescription>
                    Maintain monetary sovereignty by using local currencies for transactions 
                    while benefiting from USSD's oil and gold-backed stability.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
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

          <div className="text-center mt-12">
            <Link to="/docs">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                View Complete Documentation
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
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
            <Link to="/join">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Apply for Network Membership
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
                <li><Link to="/join" className="hover:text-white transition-colors">Join Network</Link></li>
                <li><Link to="/docs" className="hover:text-white transition-colors">API Documentation</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Integration Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support Portal</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MIPS Network. Developed by Zakaria Deriche. Multipolar International Payment System with USSD backed by oil and gold reserves.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
