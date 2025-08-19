import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Home, Calendar, TrendingUp } from "lucide-react";

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [currentSavings, setCurrentSavings] = useState(500000);
  const [monthlyContribution, setMonthlyContribution] = useState(15000);
  const [expectedReturn, setExpectedReturn] = useState(10);
  const [desiredMonthlyIncome, setDesiredMonthlyIncome] = useState(50000);
  const [result, setResult] = useState({ 
    requiredCorpus: 0, 
    projectedCorpus: 0, 
    shortfall: 0,
    additionalRequired: 0 
  });

  const calculateRetirement = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const monthsToRetirement = yearsToRetirement * 12;
    const monthlyRate = expectedReturn / 100 / 12;
    
    // Calculate required corpus (assuming 4% withdrawal rate post retirement)
    const requiredCorpus = (desiredMonthlyIncome * 12) / 0.04;
    
    // Future value of current savings
    const currentSavingsGrowth = currentSavings * Math.pow(1 + monthlyRate, monthsToRetirement);
    
    // Future value of monthly contributions
    const contributionGrowth = monthlyContribution * 
      ((Math.pow(1 + monthlyRate, monthsToRetirement) - 1) / monthlyRate);
    
    const projectedCorpus = currentSavingsGrowth + contributionGrowth;
    const shortfall = Math.max(0, requiredCorpus - projectedCorpus);
    
    // Additional monthly investment needed to meet goal
    const additionalRequired = shortfall > 0 ? 
      (shortfall * monthlyRate) / ((Math.pow(1 + monthlyRate, monthsToRetirement) - 1)) : 0;
    
    setResult({
      requiredCorpus: Math.round(requiredCorpus),
      projectedCorpus: Math.round(projectedCorpus),
      shortfall: Math.round(shortfall),
      additionalRequired: Math.round(additionalRequired)
    });
  };

  useEffect(() => {
    calculateRetirement();
  }, [currentAge, retirementAge, currentSavings, monthlyContribution, expectedReturn, desiredMonthlyIncome]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <Card className="professional-card max-w-6xl mx-auto">
      <CardHeader className="text-center pb-6">
        <CardTitle className="flex items-center justify-center space-x-3 text-2xl font-semibold">
          <Users className="w-6 h-6 text-primary" />
          <span>Retirement Planning Calculator</span>
        </CardTitle>
        <p className="text-muted-foreground mt-2">Plan your retirement with confidence</p>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-foreground mb-4">Personal Details</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentAge" className="text-sm font-medium">Current Age</Label>
                <Input
                  id="currentAge"
                  type="number"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="h-11"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="retirementAge" className="text-sm font-medium">Retirement Age</Label>
                <Input
                  id="retirementAge"
                  type="number"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="h-11"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="currentSavings" className="text-sm font-medium">Current Savings (PKR)</Label>
              <Input
                id="currentSavings"
                type="number"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="h-11"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="monthlyContrib" className="text-sm font-medium">Monthly Contribution (PKR)</Label>
              <Input
                id="monthlyContrib"
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="h-11"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="expectedReturn" className="text-sm font-medium">Expected Annual Return (%)</Label>
              <Input
                id="expectedReturn"
                type="number"
                step="0.1"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="h-11"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="desiredIncome" className="text-sm font-medium">Desired Monthly Income in Retirement (PKR)</Label>
              <Input
                id="desiredIncome"
                type="number"
                value={desiredMonthlyIncome}
                onChange={(e) => setDesiredMonthlyIncome(Number(e.target.value))}
                className="h-11"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-foreground mb-4">Retirement Analysis</h3>
            
            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-card">
                <div className="flex items-center space-x-2 mb-2">
                  <Home className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Required Corpus</span>
                </div>
                <div className="text-xl font-semibold text-foreground">
                  {formatNumber(result.requiredCorpus)}
                </div>
              </div>
              
              <div className="p-4 border rounded-lg bg-card">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Projected Corpus</span>
                </div>
                <div className="text-xl font-semibold text-primary">
                  {formatNumber(result.projectedCorpus)}
                </div>
              </div>
              
              {result.shortfall > 0 ? (
                <>
                  <div className="p-4 border rounded-lg bg-destructive/5 border-destructive/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-destructive" />
                      <span className="text-sm font-medium text-destructive">Shortfall</span>
                    </div>
                    <div className="text-xl font-semibold text-destructive">
                      {formatNumber(result.shortfall)}
                    </div>
                  </div>
                  
                  <div className="p-4 border-2 border-primary/20 rounded-lg bg-primary/5">
                    <div className="text-sm font-medium text-muted-foreground mb-2">
                      Additional Monthly Investment Needed
                    </div>
                    <div className="text-2xl font-semibold text-primary">
                      {formatNumber(result.additionalRequired)}
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-4 border-2 border-success/20 rounded-lg bg-success/5">
                  <div className="text-sm font-medium text-success mb-2">
                    🎉 Congratulations! You're on track for retirement
                  </div>
                  <div className="text-lg font-semibold text-success">
                    Surplus: {formatNumber(Math.abs(result.shortfall))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 bg-secondary/50 rounded-lg border">
              <div className="text-sm text-muted-foreground text-center">
                Years to retirement: <span className="font-semibold text-primary">{retirementAge - currentAge}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RetirementCalculator;