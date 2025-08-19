import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InvestmentCalculator from "./InvestmentCalculator";
import SIPCalculator from "./SIPCalculator";
import RetirementCalculator from "./RetirementCalculator";
import EMICalculator from "./EMICalculator";
import { Calculator, PiggyBank, Users, CreditCard } from "lucide-react";

const CalculatorTabs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Investment & Financial Calculators</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Use our comprehensive suite of financial calculators to plan your investments, 
          retirement, loans, and achieve your financial goals with confidence.
        </p>
      </div>
      
      <Tabs defaultValue="investment" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8 h-auto p-1">
          <TabsTrigger value="investment" className="flex flex-col items-center space-y-1 py-3">
            <Calculator className="w-5 h-5" />
            <span className="text-xs font-medium">Investment Growth</span>
          </TabsTrigger>
          <TabsTrigger value="sip" className="flex flex-col items-center space-y-1 py-3">
            <PiggyBank className="w-5 h-5" />
            <span className="text-xs font-medium">SIP Calculator</span>
          </TabsTrigger>
          <TabsTrigger value="retirement" className="flex flex-col items-center space-y-1 py-3">
            <Users className="w-5 h-5" />
            <span className="text-xs font-medium">Retirement</span>
          </TabsTrigger>
          <TabsTrigger value="emi" className="flex flex-col items-center space-y-1 py-3">
            <CreditCard className="w-5 h-5" />
            <span className="text-xs font-medium">EMI Calculator</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="investment" className="mt-0">
          <InvestmentCalculator />
        </TabsContent>
        
        <TabsContent value="sip" className="mt-0">
          <SIPCalculator />
        </TabsContent>
        
        <TabsContent value="retirement" className="mt-0">
          <RetirementCalculator />
        </TabsContent>
        
        <TabsContent value="emi" className="mt-0">
          <EMICalculator />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CalculatorTabs;