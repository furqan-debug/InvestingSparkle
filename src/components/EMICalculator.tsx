import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, CreditCard, DollarSign, Calendar } from "lucide-react";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [interestRate, setInterestRate] = useState(15);
  const [loanTenure, setLoanTenure] = useState(5);
  const [result, setResult] = useState({ 
    emi: 0, 
    totalInterest: 0, 
    totalAmount: 0,
    interestPercentage: 0 
  });

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = loanTenure * 12;
    
    // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                (Math.pow(1 + monthlyRate, totalMonths) - 1);
    
    const totalAmount = emi * totalMonths;
    const totalInterest = totalAmount - principal;
    const interestPercentage = (totalInterest / totalAmount) * 100;
    
    setResult({
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
      interestPercentage: Math.round(interestPercentage * 100) / 100
    });
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

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
          <CreditCard className="w-6 h-6 text-primary" />
          <span>EMI Calculator</span>
        </CardTitle>
        <p className="text-muted-foreground mt-2">Calculate your loan EMI and repayment details</p>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-foreground mb-4">Loan Details</h3>
            
            <div className="space-y-2">
              <Label htmlFor="loanAmount" className="text-sm font-medium">Loan Amount (PKR)</Label>
              <Input
                id="loanAmount"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="h-11"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="interestRate" className="text-sm font-medium">Annual Interest Rate (%)</Label>
              <Input
                id="interestRate"
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="h-11"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tenure" className="text-sm font-medium">Loan Tenure (Years)</Label>
              <Input
                id="tenure"
                type="number"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="h-11"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-foreground mb-4">EMI Breakdown</h3>
            
            <div className="p-6 border-2 border-primary/20 rounded-lg bg-primary/5">
              <div className="flex items-center space-x-2 mb-3">
                <Calculator className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Monthly EMI</span>
              </div>
              <div className="text-3xl font-semibold text-primary">
                {formatNumber(result.emi)}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-card">
                <div className="flex items-center space-x-2 mb-2">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Total Interest</span>
                </div>
                <div className="text-xl font-semibold text-destructive">
                  {formatNumber(result.totalInterest)}
                </div>
              </div>
              
              <div className="p-4 border rounded-lg bg-card">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Total Amount</span>
                </div>
                <div className="text-xl font-semibold text-foreground">
                  {formatNumber(result.totalAmount)}
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-secondary/50 rounded-lg border">
              <div className="text-sm text-muted-foreground text-center">
                Interest component: <span className="font-semibold text-destructive">
                  {result.interestPercentage}%
                </span> of total payment
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Principal Amount</span>
                <span className="font-medium">{formatNumber(loanAmount)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Total Interest</span>
                <span className="font-medium text-destructive">{formatNumber(result.totalInterest)}</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-medium">
                  <span>Total Payable</span>
                  <span>{formatNumber(result.totalAmount)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EMICalculator;