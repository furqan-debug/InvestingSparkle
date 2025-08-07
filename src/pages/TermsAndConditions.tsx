import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Scale, Shield, BookOpen, Info, Heart } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-20 max-w-5xl">
        {/* Hero Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Scale className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Legal Document</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Terms and Conditions
          </h1>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="outline" className="text-sm px-4 py-2">
              Effective from: 07/08/25
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Please read carefully before using our services.
          </p>
        </div>

        {/* Welcome Section */}
        <Card className="mb-12 border-primary/20 bg-gradient-to-r from-primary/5 to-background shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Welcome to Investing Sparkle!</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  By using our platform, website, or any of our services, you agree to the following Terms and Conditions. 
                  These are designed to maintain transparency and ensure a safe, responsible user experience.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <Card className="group hover:shadow-md transition-all duration-300 border-l-4 border-l-primary/30">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full text-primary font-bold">
                  1
                </div>
                <BookOpen className="h-5 w-5 text-primary" />
                Purpose of Our Platform
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Investing Sparkle is an educational and informational platform designed to help users understand the basics of the Pakistan Stock Exchange (PSX) and general investing principles.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    We do not provide personalized investment advice or financial services licensed under SECP or any financial regulator.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card className="group hover:shadow-md transition-all duration-300 border-l-4 border-l-blue-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full text-blue-600 font-bold">
                  2
                </div>
                <Shield className="h-5 w-5 text-blue-600" />
                Our Role: Guidance, Not Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Our team provides guidance and insights based on publicly available data, technical analysis, and market trends.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    However, we do not operate any user accounts, manage client funds, or make investment decisions on anyone's behalf.
                  </span>
                </li>
              </ul>
              <div className="bg-gradient-to-r from-blue-50 to-blue-50/50 dark:from-blue-950/30 dark:to-blue-950/10 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="font-semibold text-blue-800 dark:text-blue-200">
                  We only provide general direction and clarity, so that you can make smarter decisions on your own terms.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card className="group hover:shadow-md transition-all duration-300 border-l-4 border-l-amber-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="flex items-center justify-center w-8 h-8 bg-amber-100 rounded-full text-amber-600 font-bold">
                  3
                </div>
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                Transparency About Risk (No Scare Tactics)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                While our suggestions are built on research and experience, the financial market can be influenced by various external factors such as:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="text-amber-800 dark:text-amber-200 font-medium">Changes in government policy</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="text-amber-800 dark:text-amber-200 font-medium">Global economic events</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="text-amber-800 dark:text-amber-200 font-medium">Market sentiment</p>
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <p className="text-muted-foreground">We believe knowledge reduces fear — but investing always carries some level of risk.</p>
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <p className="font-semibold text-primary">
                    Our goal is to help you reduce blind risk by giving you proper tools, education, and strategies — not to eliminate it entirely.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card className="group hover:shadow-md transition-all duration-300 border-l-4 border-l-red-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-full text-red-600 font-bold">
                  4
                </div>
                <Scale className="h-5 w-5 text-red-600" />
                Liability & Responsibility
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    You, as the user, are responsible for any decision you make after engaging with our content.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    We do not promise returns, nor do we take credit or responsibility for any gain or loss resulting from your investments.
                  </span>
                </li>
              </ul>
              <div className="bg-gradient-to-r from-red-50 to-red-50/50 dark:from-red-950/30 dark:to-red-950/10 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <p className="font-bold text-red-800 dark:text-red-200 text-center">
                  Remember: All decisions are your own. We're here to educate, not influence.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card className="group hover:shadow-md transition-all duration-300 border-l-4 border-l-green-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full text-green-600 font-bold">
                  5
                </div>
                <Shield className="h-5 w-5 text-green-600" />
                No Investment Handling or Brokerage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground font-medium">We do not:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800 text-center">
                  <p className="text-green-800 dark:text-green-200 font-medium">Buy or sell stocks for you</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800 text-center">
                  <p className="text-green-800 dark:text-green-200 font-medium">Open brokerage accounts</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800 text-center">
                  <p className="text-green-800 dark:text-green-200 font-medium">Handle or transfer any money</p>
                </div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 mt-6">
                <p className="font-semibold text-primary text-center">
                  Our platform serves as a learning companion — not a trading tool.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card className="group hover:shadow-md transition-all duration-300 border-l-4 border-l-purple-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full text-purple-600 font-bold">
                  6
                </div>
                <Info className="h-5 w-5 text-purple-600" />
                Disclaimer of Guarantees
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We strive to be accurate, insightful, and practical — but we do not and cannot guarantee:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Any specific return on investment</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">That our suggestions will always work</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">That market conditions will remain stable</span>
                </div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 mt-6">
                <p className="text-purple-800 dark:text-purple-200 italic">
                  Our insights are prepared with care, but not certainty — because markets move in ways no one can fully predict.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card className="group hover:shadow-md transition-all duration-300 border-l-4 border-l-indigo-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full text-indigo-600 font-bold">
                  7
                </div>
                <Scale className="h-5 w-5 text-indigo-600" />
                Legal Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    You are expected to comply with the laws and regulations of your country while using our platform.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Investing Sparkle shall not be held liable for any misuse of information that results in violation of any law or regulation.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card className="group hover:shadow-md transition-all duration-300 border-l-4 border-l-teal-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="flex items-center justify-center w-8 h-8 bg-teal-100 rounded-full text-teal-600 font-bold">
                  8
                </div>
                <BookOpen className="h-5 w-5 text-teal-600" />
                Use of Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All content, including graphics, tools, videos, guides, and written material is the intellectual property of Investing Sparkle and may not be reused, copied, or redistributed without prior permission.
              </p>
            </CardContent>
          </Card>

          {/* Section 9 */}
          <Card className="group hover:shadow-md transition-all duration-300 border-l-4 border-l-orange-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="flex items-center justify-center w-8 h-8 bg-orange-100 rounded-full text-orange-600 font-bold">
                  9
                </div>
                <Info className="h-5 w-5 text-orange-600" />
                Updates to Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We reserve the right to update or modify these Terms anytime. We recommend users review them periodically. Continued use of the platform after updates means you agree to the changes.
              </p>
            </CardContent>
          </Card>

          {/* Section 10 */}
          <Card className="group hover:shadow-md transition-all duration-300 border-l-4 border-l-cyan-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="flex items-center justify-center w-8 h-8 bg-cyan-100 rounded-full text-cyan-600 font-bold">
                  10
                </div>
                <Scale className="h-5 w-5 text-cyan-600" />
                Jurisdiction & Dispute Resolution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of Pakistan. Any legal disputes, if any, shall be settled in the jurisdiction of Karachi, Sindh.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-16" />

        {/* Final Words Section */}
        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-primary/30 shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="flex items-center justify-center gap-3 text-2xl">
              <div className="p-2 bg-primary/10 rounded-full">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              💬 Final Words (User-Friendly Summary)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background/50 p-6 rounded-lg border border-primary/20">
                <p className="text-muted-foreground">
                  We're building Investing Sparkle to empower you — not to promise shortcuts or quick profits.
                </p>
              </div>
              <div className="bg-background/50 p-6 rounded-lg border border-primary/20">
                <p className="text-muted-foreground">
                  Please use our content wisely, at your own discretion, and always invest with awareness, not fear.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsAndConditions;