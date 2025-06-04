
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Code, 
  Copy, 
  CheckCircle,
  BookOpen,
  Key,
  Database,
  CreditCard,
  Globe,
  Shield,
  Zap
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Documentation = () => {
  const [copiedCode, setCopiedCode] = useState("");

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const accountsExample = `curl -X GET "https://api.mips.network/v1/accounts" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -H "Currency: USSD"`;

  const accountsResponse = `{
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

  const transactionExample = `curl -X POST "https://api.mips.network/v1/transactions/cross-border" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from_account": "sender_account_id",
    "to_account": "recipient_account_id",
    "amount": "1000.00",
    "from_currency": "EUR",
    "to_currency": "NGN",
    "settlement_currency": "USSD",
    "purpose": "trade_settlement"
  }'`;

  const cardIssuingExample = `curl -X POST "https://api.mips.network/v1/cards/issue" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "account_id": "mips_acc_123456789",
    "card_type": "virtual",
    "currency": "USSD",
    "spending_limit": "5000.00",
    "validity_period": "24_months"
  }'`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MIPS Network</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/join">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Join Network
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">MIPS API Documentation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete API reference for integrating with the Multipolar International Payment System
          </p>
        </div>

        <Tabs defaultValue="getting-started" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="accounts">Accounts</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="settlements">Settlements</TabsTrigger>
            <TabsTrigger value="cards">Card Services</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Key className="mr-2 h-5 w-5" />
                    Authentication
                  </CardTitle>
                  <CardDescription>
                    MIPS API uses Bearer token authentication for secure access.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Base URL</h4>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                        https://api.mips.network/v1
                      </code>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Required Headers</h4>
                      <ul className="text-sm space-y-1">
                        <li><code>Authorization: Bearer YOUR_ACCESS_TOKEN</code></li>
                        <li><code>Content-Type: application/json</code></li>
                        <li><code>Currency: USSD</code> (for settlement operations)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Rate Limits
                  </CardTitle>
                  <CardDescription>
                    API rate limits and usage guidelines for optimal performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Standard requests:</span>
                      <Badge variant="secondary">1000/hour</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Transaction requests:</span>
                      <Badge variant="secondary">500/hour</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Settlement requests:</span>
                      <Badge variant="secondary">100/hour</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="accounts">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Get Account Information</CardTitle>
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
                      onClick={() => copyToClipboard(accountsExample, "accounts")}
                    >
                      {copiedCode === "accounts" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      {accountsExample}
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
                      onClick={() => copyToClipboard(accountsResponse, "accounts-response")}
                    >
                      {copiedCode === "accounts-response" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                    <pre className="text-blue-400 text-sm overflow-x-auto">
                      {accountsResponse}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <CardTitle>Cross-Border Payment</CardTitle>
                <CardDescription>
                  Initiate payments between countries using local currencies with USSD settlement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 rounded-lg p-4 relative">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    onClick={() => copyToClipboard(transactionExample, "transaction")}
                  >
                    {copiedCode === "transaction" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    {transactionExample}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settlements">
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
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded">/v1/settlement/status</code>
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
                <div className="bg-gray-900 rounded-lg p-4 relative">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    onClick={() => copyToClipboard(cardIssuingExample, "cards")}
                  >
                    {copiedCode === "cards" ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    {cardIssuingExample}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="webhooks">
            <Card>
              <CardHeader>
                <CardTitle>Webhook Events</CardTitle>
                <CardDescription>
                  Real-time notifications for transaction and settlement events.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Available Events</h4>
                      <ul className="text-sm space-y-1">
                        <li>• transaction.completed</li>
                        <li>• settlement.processed</li>
                        <li>• card.issued</li>
                        <li>• account.updated</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Security</h4>
                      <p className="text-sm text-gray-600">
                        All webhooks are signed with HMAC-SHA256 for verification.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Documentation;
