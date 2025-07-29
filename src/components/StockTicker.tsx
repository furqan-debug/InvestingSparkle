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
    { symbol: "OGDC", name: "Oil & Gas Development", price: 85.50, change: 2.15, changePercent: 2.58 },
    { symbol: "PSO", name: "Pakistan State Oil", price: 203.75, change: -1.25, changePercent: -0.61 },
    { symbol: "LUCK", name: "Lucky Cement", price: 542.00, change: 8.75, changePercent: 1.64 },
    { symbol: "ENGRO", name: "Engro Corporation", price: 267.80, change: 3.20, changePercent: 1.21 },
    { symbol: "HBL", name: "Habib Bank Limited", price: 89.45, change: -0.55, changePercent: -0.61 },
    { symbol: "UBL", name: "United Bank Limited", price: 156.30, change: 2.80, changePercent: 1.82 },
    { symbol: "NESTLE", name: "Nestle Pakistan", price: 5840.00, change: 45.00, changePercent: 0.78 },
    { symbol: "TRG", name: "The Resource Group", price: 108.50, change: 4.25, changePercent: 4.08 }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prevStocks => 
        prevStocks.map(stock => {
          const randomChange = (Math.random() - 0.5) * 5;
          const newPrice = Math.max(stock.price + randomChange, 1);
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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card/30 backdrop-blur-md border border-border/50 rounded-xl p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">PSX Live</h3>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll-x space-x-8 whitespace-nowrap">
          {[...stocks, ...stocks].map((stock, index) => (
            <div key={`${stock.symbol}-${index}`} className="flex items-center space-x-3 min-w-max">
              <div className="text-sm">
                <div className="font-semibold text-foreground">{stock.symbol}</div>
                <div className="text-xs text-muted-foreground truncate max-w-24">{stock.name}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-foreground">PKR {stock.price}</div>
                <div className={`flex items-center text-xs ${
                  stock.change >= 0 ? 'text-green-500' : 'text-red-500'
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