
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
  Play
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const apiExample = `curl -X GET "https://api.mips.my/v1/accounts" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json"`;

  const responseExample = `{
  "accounts": [
    {
      "account_id": "acc_123456789",
      "bank_code": "MBBEMYKL",
      "account_number": "1234567890",
      "account_type": "savings",
      "balance": {
        "amount": "15000.00",
        "currency": "MYR"
      },
      "status": "active"
    }
  ]
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MIPS Open Banking</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#docs" className="text-gray-600 hover:text-blue-600 transition-colors">Documentation</a>
              <a href="#apis" className="text-gray-600 hover:text-blue-600 transition-colors">APIs</a>
              <a href="#support" className="text-gray-600 hover:text-blue-600 transition-colors">Support</a>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              🚀 Now Live: MIPS Open Banking API v2.0
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Build the Future of
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Banking</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect to Malaysia's premier interbank payment system. Access real-time account data, 
              initiate payments, and create innovative financial solutions with MIPS Open Banking APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                <Play className="mr-2 h-5 w-5" />
                Start Building
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50">
                <BookOpen className="mr-2 h-5 w-5" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Cards Animation */}
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-16 h-16 bg-blue-200 rounded-lg opacity-20"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <div className="w-12 h-12 bg-cyan-200 rounded-lg opacity-20"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MIPS Open Banking?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading security, reliability, and developer experience for Malaysian financial services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Bank-Grade Security</CardTitle>
                <CardDescription>
                  Enterprise-level encryption, OAuth 2.0, and PCI DSS compliance ensure your data is always protected.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Real-Time Processing</CardTitle>
                <CardDescription>
                  Instant account verification, real-time balance checks, and immediate payment processing.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Nationwide Coverage</CardTitle>
                <CardDescription>
                  Connect to all major Malaysian banks and financial institutions through a single API.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Developer-First</CardTitle>
                <CardDescription>
                  Comprehensive SDKs, interactive documentation, and sandbox environment for rapid development.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>
                  Dedicated technical support team and comprehensive documentation to help you succeed.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Regulatory Compliant</CardTitle>
                <CardDescription>
                  Fully compliant with Bank Negara Malaysia regulations and international banking standards.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section id="docs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interactive API Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our APIs with live examples and comprehensive guides.
            </p>
          </div>

          <Tabs defaultValue="accounts" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="accounts">Accounts</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
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
                      Retrieve account details, balances, and metadata for connected accounts.
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
                      Structured JSON response with account information.
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
                  <CardTitle>Payment Initiation</CardTitle>
                  <CardDescription>
                    Initiate secure payments between accounts with full transaction tracking.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">POST</Badge>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">/v1/payments</code>
                    </div>
                    <p className="text-gray-600">
                      Create instant or scheduled payments with automatic validation and compliance checks.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="transactions">
              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                  <CardDescription>
                    Access detailed transaction history with filtering and pagination.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">GET</Badge>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">/v1/transactions</code>
                    </div>
                    <p className="text-gray-600">
                      Retrieve comprehensive transaction data with real-time updates and rich metadata.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="webhooks">
              <Card>
                <CardHeader>
                  <CardTitle>Webhook Integration</CardTitle>
                  <CardDescription>
                    Real-time notifications for account changes and transaction updates.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">POST</Badge>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">/v1/webhooks</code>
                    </div>
                    <p className="text-gray-600">
                      Configure secure webhook endpoints to receive instant notifications about account activities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="apis" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to integrate MIPS Open Banking into your application.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <CardTitle>Register Your App</CardTitle>
                <CardDescription>
                  Create your developer account and register your application to get API credentials.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center border-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <CardTitle>Test in Sandbox</CardTitle>
                <CardDescription>
                  Use our comprehensive sandbox environment to test your integration with sample data.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center border-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <CardTitle>Go Live</CardTitle>
                <CardDescription>
                  Deploy your application with confidence using our production-ready APIs.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              Start Your Integration
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
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-bold">MIPS Open Banking</span>
              </div>
              <p className="text-gray-400">
                Empowering Malaysian fintech innovation through secure, reliable open banking APIs.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Documentation</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SDKs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sandbox</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MIPS Open Banking. All rights reserved. Regulated by Bank Negara Malaysia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
