import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, DollarSign, Calendar } from "lucide-react";

const InvestmentCalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [monthlyContribution, setMonthlyContribution] = useState(10000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState({ futureValue: 0, totalContributions: 0, totalReturns: 0 });

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
    <Card className="border-border shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
          <Calculator className="w-6 h-6 text-primary" />
          <span>Investment Calculator</span>
        </CardTitle>
        <p className="text-muted-foreground">Calculate your potential returns with PSX investing</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="principal">Initial Investment (PKR)</Label>
              <Input
                id="principal"
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="monthly">Monthly Contribution (PKR)</Label>
              <Input
                id="monthly"
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="return">Expected Annual Return (%)</Label>
              <Input
                id="return"
                type="number"
                step="0.1"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(Number(e.target.value))}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="years">Investment Period (Years)</Label>
              <Input
                id="years"
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="mt-1"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-6 border rounded-lg border-primary/20 bg-primary/5">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Future Value</span>
              </div>
              <div className="text-3xl font-bold text-primary">
                {formatNumber(result.futureValue)}
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Total Contributions</span>
              </div>
              <div className="text-xl font-semibold">
                {formatNumber(result.totalContributions)}
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Total Returns</span>
              </div>
              <div className="text-xl font-semibold text-primary">
                {formatNumber(result.totalReturns)}
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-muted/50 rounded-lg border">
              <div className="text-sm text-muted-foreground">
                Your money will grow by <span className="font-bold text-primary">
                  {((result.futureValue / result.totalContributions - 1) * 100).toFixed(1)}%
                </span> over {years} years
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestmentCalculator;