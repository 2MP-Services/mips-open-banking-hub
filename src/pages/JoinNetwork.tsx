
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Building, 
  CreditCard, 
  Globe,
  Shield,
  Users,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const JoinNetwork = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    institutionName: '',
    institutionType: '',
    country: '',
    contactName: '',
    email: '',
    phone: '',
    regulatoryLicense: '',
    expectedVolume: '',
    services: [],
    businessDescription: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Thank you for your interest in joining MIPS Network. Our team will review your application and contact you within 5 business days.",
    });
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

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
              <Link to="/docs">
                <Button variant="outline">Documentation</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join MIPS Network</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Become part of the multipolar payment infrastructure and offer your customers 
            access to cross-border transactions with USSD settlement.
          </p>
        </div>

        {/* VISA/Mastercard Limitations Section */}
        <Card className="mb-8 border-orange-200 bg-orange-50">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <CardTitle className="text-orange-800">Why MIPS is Essential</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">VISA and Mastercard Limitations</h4>
                <ul className="text-orange-700 space-y-1 text-sm">
                  <li>• Do not work in all multipolar countries</li>
                  <li>• Limited coverage in emerging markets</li>
                  <li>• Dependency on Western financial infrastructure</li>
                  <li>• High transaction fees for cross-border payments</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">Global Financial Exclusion</h4>
                <ul className="text-orange-700 space-y-1 text-sm">
                  <li>• More than half of the world's population cannot afford cards</li>
                  <li>• Traditional banking services are too expensive</li>
                  <li>• Limited access to international payment systems</li>
                  <li>• Need for affordable, inclusive financial solutions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Building className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Institutional Access</CardTitle>
              <CardDescription>
                Direct access to MIPS settlement network with USSD backing
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CreditCard className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Card Issuing</CardTitle>
              <CardDescription>
                Issue virtual and physical cards with global acceptance
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Global Reach</CardTitle>
              <CardDescription>
                Connect to multipolar countries with local currency support
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Application Form */}
        <Card>
          <CardHeader>
            <CardTitle>Network Membership Application</CardTitle>
            <CardDescription>
              Complete the form below to apply for MIPS Network membership. Our team will review your application and contact you within 5 business days.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Institution Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Institution Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="institutionName">Institution Name *</Label>
                    <Input
                      id="institutionName"
                      value={formData.institutionName}
                      onChange={(e) => setFormData({...formData, institutionName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="institutionType">Institution Type *</Label>
                    <select
                      id="institutionType"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={formData.institutionType}
                      onChange={(e) => setFormData({...formData, institutionType: e.target.value})}
                      required
                    >
                      <option value="">Select type</option>
                      <option value="commercial-bank">Commercial Bank</option>
                      <option value="central-bank">Central Bank</option>
                      <option value="fintech">Fintech Company</option>
                      <option value="payment-processor">Payment Processor</option>
                      <option value="money-transfer">Money Transfer Operator</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="regulatoryLicense">Regulatory License Number</Label>
                    <Input
                      id="regulatoryLicense"
                      value={formData.regulatoryLicense}
                      onChange={(e) => setFormData({...formData, regulatoryLicense: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactName">Contact Name *</Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="expectedVolume">Expected Monthly Volume (USSD)</Label>
                    <Input
                      id="expectedVolume"
                      value={formData.expectedVolume}
                      onChange={(e) => setFormData({...formData, expectedVolume: e.target.value})}
                      placeholder="e.g., 1,000,000"
                    />
                  </div>
                </div>
              </div>

              {/* Services Interest */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Services of Interest</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Cross-border payments',
                    'USSD settlement accounts',
                    'Virtual card issuing',
                    'Physical card issuing',
                    'API integration',
                    'Webhook notifications'
                  ].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={service}
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="rounded border-gray-300"
                      />
                      <Label htmlFor={service}>{service}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Description */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Business Description</h3>
                <div>
                  <Label htmlFor="businessDescription">
                    Describe your business and how you plan to use MIPS services
                  </Label>
                  <Textarea
                    id="businessDescription"
                    value={formData.businessDescription}
                    onChange={(e) => setFormData({...formData, businessDescription: e.target.value})}
                    rows={4}
                    placeholder="Tell us about your business model, target customers, and expected use cases for MIPS services..."
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Submit Application
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JoinNetwork;
