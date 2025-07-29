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
    <Card className="glass-card border-gradient">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calculator className="w-5 h-5" />
          <span>Investment Calculator</span>
        </CardTitle>
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
            <div className="glass-card p-4 border-l-4 border-l-primary">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Future Value</span>
              </div>
              <div className="text-2xl font-bold text-primary animate-number-change">
                {formatNumber(result.futureValue)}
              </div>
            </div>
            
            <div className="glass-card p-4 border-l-4 border-l-blue-500">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-muted-foreground">Total Contributions</span>
              </div>
              <div className="text-xl font-semibold text-blue-500">
                {formatNumber(result.totalContributions)}
              </div>
            </div>
            
            <div className="glass-card p-4 border-l-4 border-l-green-500">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-muted-foreground">Total Returns</span>
              </div>
              <div className="text-xl font-semibold text-green-500">
                {formatNumber(result.totalReturns)}
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
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