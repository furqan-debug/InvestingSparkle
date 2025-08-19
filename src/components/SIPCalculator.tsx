import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PiggyBank, Target, TrendingUp, Calendar } from "lucide-react";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [result, setResult] = useState({ maturityAmount: 0, totalInvestment: 0, wealthGained: 0 });

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 100 / 12;
    const totalMonths = timePeriod * 12;
    
    // SIP Future Value Formula: P * [((1+r)^n - 1) / r] * (1+r)
    const maturityAmount = monthlyInvestment * 
      (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate));
    
    const totalInvestment = monthlyInvestment * totalMonths;
    const wealthGained = maturityAmount - totalInvestment;
    
    setResult({
      maturityAmount: Math.round(maturityAmount),
      totalInvestment: Math.round(totalInvestment),
      wealthGained: Math.round(wealthGained)
    });
  };

  useEffect(() => {
    calculateSIP();
  }, [monthlyInvestment, expectedReturn, timePeriod]);

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
          <PiggyBank className="w-6 h-6 text-primary" />
          <span>SIP Calculator</span>
        </CardTitle>
        <p className="text-muted-foreground mt-2">Calculate your Systematic Investment Plan returns</p>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-foreground mb-4">SIP Parameters</h3>
            
            <div className="space-y-2">
              <Label htmlFor="monthly" className="text-sm font-medium">Monthly Investment (PKR)</Label>
              <Input
                id="monthly"
                type="number"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="h-11"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="return" className="text-sm font-medium">Expected Annual Return (%)</Label>
              <Input
                id="return"
                type="number"
                step="0.1"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="h-11"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="period" className="text-sm font-medium">Time Period (Years)</Label>
              <Input
                id="period"
                type="number"
                value={timePeriod}
                onChange={(e) => setTimePeriod(Number(e.target.value))}
                className="h-11"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-foreground mb-4">SIP Results</h3>
            
            <div className="p-6 border-2 border-primary/20 rounded-lg bg-primary/5">
              <div className="flex items-center space-x-2 mb-3">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Maturity Amount</span>
              </div>
              <div className="text-3xl font-semibold text-primary">
                {formatNumber(result.maturityAmount)}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-card">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Total Investment</span>
                </div>
                <div className="text-xl font-semibold text-foreground">
                  {formatNumber(result.totalInvestment)}
                </div>
              </div>
              
              <div className="p-4 border rounded-lg bg-card">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Wealth Gained</span>
                </div>
                <div className="text-xl font-semibold text-success">
                  {formatNumber(result.wealthGained)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SIPCalculator;