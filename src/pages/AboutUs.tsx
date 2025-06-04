
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  User, 
  Globe,
  Building,
  Award,
  Target,
  Users,
  Linkedin,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Who We Are</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MIPS Network was created to solve the fundamental problems of financial exclusion 
            and dependency on Western payment systems, providing a truly multipolar solution.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-purple-100">
            <CardHeader>
              <Target className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To create an inclusive, multipolar international payment system that enables 
                seamless cross-border transactions for all, regardless of geographic location 
                or economic status, using USSD backed by real assets.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <Globe className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                A world where financial sovereignty is preserved, where over half of the world's 
                population is no longer excluded from affordable payment services, and where 
                countries can transact freely using their local currencies.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* The Problem We Solve */}
        <Card className="mb-16 border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-800">The Problem We Solve</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-orange-800 mb-3">Payment System Limitations</h4>
                <ul className="text-orange-700 space-y-2 text-sm">
                  <li>• VISA and Mastercard don't work in all multipolar countries</li>
                  <li>• Limited coverage in emerging markets</li>
                  <li>• Dependency on Western financial infrastructure</li>
                  <li>• High fees for cross-border transactions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-3">Financial Exclusion</h4>
                <ul className="text-orange-700 space-y-2 text-sm">
                  <li>• More than half of the world's population cannot afford cards</li>
                  <li>• Traditional banking services are too expensive</li>
                  <li>• Limited access to international payment systems</li>
                  <li>• Lack of affordable financial inclusion solutions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-3">Currency Dependency</h4>
                <ul className="text-orange-700 space-y-2 text-sm">
                  <li>• Over-reliance on USD for international trade</li>
                  <li>• Exposure to single-currency volatility</li>
                  <li>• Limited monetary sovereignty</li>
                  <li>• Need for stable, asset-backed alternatives</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Founder Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership Team</h2>
        </div>

        <Card className="max-w-4xl mx-auto mb-16">
          <CardHeader className="text-center">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="h-16 w-16 text-white" />
            </div>
            <CardTitle className="text-2xl">Zakaria Deriche</CardTitle>
            <CardDescription className="text-lg">Founder & Chief Architect of MIPS Network</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                Zakaria Deriche is the visionary founder and chief architect of MIPS Network. 
                With extensive experience in international finance and payment systems, Zakaria 
                recognized the urgent need for a multipolar payment solution that could serve 
                the underbanked populations while providing financial sovereignty to nations.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Key Achievements</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Designed the USSD currency model backed by oil and gold</li>
                    <li>• Developed the multipolar settlement architecture</li>
                    <li>• Created financial inclusion solutions for emerging markets</li>
                    <li>• Established partnerships with central banks worldwide</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Vision for MIPS</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Bridge the gap between traditional and modern finance</li>
                    <li>• Provide affordable payment solutions globally</li>
                    <li>• Reduce dependency on Western payment systems</li>
                    <li>• Enable true financial sovereignty for all nations</li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center space-x-4 pt-4">
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Financial Inclusion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Making financial services accessible and affordable for everyone, 
                regardless of their economic status or geographic location.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Multipolarity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Supporting a multipolar world where no single currency or system 
                dominates international trade and financial transactions.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Transparency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Providing full transparency in our oil and gold backing, 
                settlement processes, and network operations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Join Us CTA */}
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
          <CardContent className="py-12">
            <h3 className="text-2xl font-bold mb-4">Join the Financial Revolution</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Be part of building a more inclusive and multipolar financial future. 
              Connect your institution to MIPS Network today.
            </p>
            <Link to="/join">
              <Button size="lg" variant="secondary">
                Apply for Network Membership
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
