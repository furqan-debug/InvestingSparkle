
import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

const StockTicker = () => {
  const [stocks, setStocks] = useState<Stock[]>([
    { symbol: "OGDC", name: "Oil & Gas Development", price: 142.75, change: 1.25, changePercent: 0.88 },
    { symbol: "PSO", name: "Pakistan State Oil", price: 289.50, change: -2.75, changePercent: -0.94 },
    { symbol: "LUCK", name: "Lucky Cement", price: 695.20, change: 5.40, changePercent: 0.78 },
    { symbol: "ENGRO", name: "Engro Corporation", price: 312.80, change: 2.60, changePercent: 0.84 },
    { symbol: "HBL", name: "Habib Bank Limited", price: 95.45, change: -0.35, changePercent: -0.37 },
    { symbol: "UBL", name: "United Bank Limited", price: 189.30, change: 1.80, changePercent: 0.96 },
    { symbol: "NESTLE", name: "Nestle Pakistan", price: 6420.00, change: 35.00, changePercent: 0.55 },
    { symbol: "TRG", name: "The Resource Group", price: 125.75, change: 2.25, changePercent: 1.82 }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prevStocks => 
        prevStocks.map(stock => {
          const randomChange = (Math.random() - 0.5) * 2;
          const newPrice = Math.max(stock.price + randomChange, stock.price * 0.95);
          const change = newPrice - stock.price;
          const changePercent = (change / stock.price) * 100;
          
          return {
            ...stock,
            price: Number(newPrice.toFixed(2)),
            change: Number(change.toFixed(2)),
            changePercent: Number(changePercent.toFixed(2))
          };
        })
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card border border-border rounded-lg p-4 overflow-hidden shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">PSX Live Market Data</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span className="text-sm text-muted-foreground">Live</span>
        </div>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll-x space-x-8 whitespace-nowrap">
          {[...stocks, ...stocks].map((stock, index) => (
            <div key={`${stock.symbol}-${index}`} className="flex items-center space-x-4 min-w-max p-3 bg-secondary/30 rounded-md">
              <div className="text-sm">
                <div className="font-semibold text-foreground">{stock.symbol}</div>
                <div className="text-xs text-muted-foreground truncate max-w-32">{stock.name}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-foreground">PKR {stock.price.toLocaleString()}</div>
                <div className={`flex items-center text-xs font-medium ${
                  stock.change >= 0 ? 'text-success' : 'text-destructive'
                }`}>
                  {stock.change >= 0 ? 
                    <TrendingUp className="w-3 h-3 mr-1" /> : 
                    <TrendingDown className="w-3 h-3 mr-1" />
                  }
                  {stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockTicker;
