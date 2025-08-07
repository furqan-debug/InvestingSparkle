import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, AlertTriangle } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <Badge variant="secondary" className="mb-4">
            Effective from: 07/08/25
          </Badge>
          <p className="text-lg text-muted-foreground">
            Please read carefully before using our services.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed">
              Welcome to <strong>Investing Sparkle</strong>! By using our platform, website, or any of our services, you agree to the following Terms and Conditions. These are designed to maintain transparency and ensure a safe, responsible user experience.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">1.</span>
                Purpose of Our Platform
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Investing Sparkle is an educational and informational platform designed to help users understand the basics of the Pakistan Stock Exchange (PSX) and general investing principles.</li>
                <li>• We do not provide personalized investment advice or financial services licensed under SECP or any financial regulator.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">2.</span>
                Our Role: Guidance, Not Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li>• Our team provides guidance and insights based on publicly available data, technical analysis, and market trends.</li>
                <li>• However, we do not operate any user accounts, manage client funds, or make investment decisions on anyone's behalf.</li>
              </ul>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-medium">We only provide general direction and clarity, so that you can make smarter decisions on your own terms.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <span className="text-primary">3.</span>
                Transparency About Risk (No Scare Tactics)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                While our suggestions are built on research and experience, the financial market can be influenced by various external factors such as:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Changes in government policy</li>
                <li>• Global economic events</li>
                <li>• Market sentiment</li>
              </ul>
              <div className="space-y-2">
                <p className="text-muted-foreground">We believe knowledge reduces fear — but investing always carries some level of risk.</p>
                <p className="font-medium">Our goal is to help you reduce blind risk by giving you proper tools, education, and strategies — not to eliminate it entirely.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">4.</span>
                Liability & Responsibility
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li>• You, as the user, are responsible for any decision you make after engaging with our content.</li>
                <li>• We do not promise returns, nor do we take credit or responsibility for any gain or loss resulting from your investments.</li>
              </ul>
              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <p className="font-medium text-primary">Remember: All decisions are your own. We're here to educate, not influence.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">5.</span>
                No Investment Handling or Brokerage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">We do not:</p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Buy or sell stocks for you</li>
                <li>• Open brokerage accounts</li>
                <li>• Handle or transfer any money</li>
              </ul>
              <p className="font-medium">Our platform serves as a learning companion — not a trading tool.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">6.</span>
                Disclaimer of Guarantees
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">We strive to be accurate, insightful, and practical — but we do not and cannot guarantee:</p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Any specific return on investment</li>
                <li>• That our suggestions will always work</li>
                <li>• That market conditions will remain stable</li>
              </ul>
              <p className="text-muted-foreground">Our insights are prepared with care, but not certainty — because markets move in ways no one can fully predict.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">7.</span>
                Legal Compliance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>• You are expected to comply with the laws and regulations of your country while using our platform.</li>
                <li>• Investing Sparkle shall not be held liable for any misuse of information that results in violation of any law or regulation.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">8.</span>
                Use of Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">All content, including graphics, tools, videos, guides, and written material is the intellectual property of Investing Sparkle and may not be reused, copied, or redistributed without prior permission.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">9.</span>
                Updates to Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">We reserve the right to update or modify these Terms anytime. We recommend users review them periodically. Continued use of the platform after updates means you agree to the changes.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">10.</span>
                Jurisdiction & Dispute Resolution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">These Terms are governed by the laws of Pakistan. Any legal disputes, if any, shall be settled in the jurisdiction of Karachi, Sindh.</p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              💬 Final Words (User-Friendly Summary)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3 text-muted-foreground">
              <li>• We're building Investing Sparkle to empower you — not to promise shortcuts or quick profits.</li>
              <li>• Please use our content wisely, at your own discretion, and always invest with awareness, not fear.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-8 border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-400">
              <CheckCircle className="h-5 w-5" />
              ✅ Recommendation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 dark:text-green-300">
              Add a checkbox to your sign-up forms: <br />
              <em>"I agree to the Terms & Conditions and understand that Investing Sparkle provides educational content only."</em>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsAndConditions;