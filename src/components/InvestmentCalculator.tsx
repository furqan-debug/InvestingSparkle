
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, DollarSign, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InvestmentCalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [monthlyContribution, setMonthlyContribution] = useState(10000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState({ futureValue: 0, totalContributions: 0, totalReturns: 0 });
  const { toast } = useToast();

  const calculateInvestment = () => {
    const monthlyRate = annualReturn / 100 / 12;
    const totalMonths = years * 12;
    
    // Compound interest for initial principal
    const principalGrowth = principal * Math.pow(1 + monthlyRate, totalMonths);
    
    // Future value of monthly contributions (annuity)
    const contributionGrowth = monthlyContribution * 
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
    
    const futureValue = principalGrowth + contributionGrowth;
    const totalContributions = principal + (monthlyContribution * totalMonths);
    const totalReturns = futureValue - totalContributions;
    
    setResult({
      futureValue: Math.round(futureValue),
      totalContributions: Math.round(totalContributions),
      totalReturns: Math.round(totalReturns)
    });

    // Show success notification for significant returns
    if (totalReturns > 1000000) {
      toast({
        title: "Excellent Investment Potential",
        description: "Your projected returns show strong growth potential over the investment period.",
      });
    }
  };

  useEffect(() => {
    calculateInvestment();
  }, [principal, monthlyContribution, annualReturn, years]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <Card className="professional-card max-w-5xl mx-auto">
      <CardHeader className="text-center pb-6">
        <CardTitle className="flex items-center justify-center space-x-3 text-2xl font-semibold">
          <Calculator className="w-6 h-6 text-primary" />
          <span>Investment Growth Calculator</span>
        </CardTitle>
        <p className="text-muted-foreground mt-2">Calculate your potential returns with PSX investing</p>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-foreground mb-4">Investment Parameters</h3>
            
            <div className="space-y-2">
              <Label htmlFor="principal" className="text-sm font-medium">Initial Investment (PKR)</Label>
              <Input
                id="principal"
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="h-11"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="monthly" className="text-sm font-medium">Monthly Contribution (PKR)</Label>
              <Input
                id="monthly"
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="h-11"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="return" className="text-sm font-medium">Expected Annual Return (%)</Label>
              <Input
                id="return"
                type="number"
                step="0.1"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(Number(e.target.value))}
                className="h-11"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="years" className="text-sm font-medium">Investment Period (Years)</Label>
              <Input
                id="years"
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="h-11"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-foreground mb-4">Projected Results</h3>
            
            <div className="p-6 border-2 border-primary/20 rounded-lg bg-primary/5">
              <div className="flex items-center space-x-2 mb-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Future Portfolio Value</span>
              </div>
              <div className="text-3xl font-semibold text-primary">
                {formatNumber(result.futureValue)}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-card">
                <div className="flex items-center space-x-2 mb-2">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Total Investment</span>
                </div>
                <div className="text-xl font-semibold text-foreground">
                  {formatNumber(result.totalContributions)}
                </div>
              </div>
              
              <div className="p-4 border rounded-lg bg-card">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Total Returns</span>
                </div>
                <div className="text-xl font-semibold text-success">
                  {formatNumber(result.totalReturns)}
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-secondary/50 rounded-lg border">
              <div className="text-sm text-muted-foreground text-center">
                <span className="font-semibold text-primary">
                  {((result.futureValue / result.totalContributions - 1) * 100).toFixed(1)}%
                </span> total growth over {years} years
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground text-center">
            * This is a projection based on the parameters entered. Past performance does not guarantee future results. 
            Investment in securities market involves risk and investors should read all related documents before investing.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestmentCalculator;
