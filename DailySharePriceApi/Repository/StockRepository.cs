using DailySharePriceApi.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace DailySharePriceApi.Repository
{
    public class StockRepository : IStockRepository
    {
        static readonly log4net.ILog _log4net = log4net.LogManager.GetLogger(typeof(StockRepository));

        public static List<Stock> stocklist = new List<Stock>()
        {
            new Stock { StockId =101,StockName ="TATA",StockValue =450 },
            new Stock { StockId =102,StockName ="HDFC",StockValue =2100},
            new Stock { StockId =103,StockName ="HERO",StockValue =685},
            new Stock { StockId =104,StockName ="BAJAJ",StockValue =2132},
            new Stock { StockId =105,StockName ="WIPRO",StockValue =696},
            new Stock { StockId =106,StockName ="HAVELLS",StockValue =1285},
            new Stock { StockId =107,StockName ="AIRTEL",StockValue =696},
            new Stock { StockId =108,StockName ="PNB",StockValue =43},
            new Stock { StockId =109,StockName ="SBI",StockValue =450},
            new Stock { StockId =110,StockName ="TVS",StockValue =700},
        };
       
        public Stock GetStockByNameRepository(string stockname)
        {
            Stock stockData = null;
            try
            {
                _log4net.Info("In Stock Repository, StockProvider is calling the Method GetStockByNameRepository and " + stockname + " is being searched");
                stockData = stocklist.FirstOrDefault(s => s.StockName == stockname);
                if (stockData != null)
                {
                    var jsonStock = JsonConvert.SerializeObject(stockData);
                    _log4net.Info("Stock Found " + jsonStock);
                }
                else
                {
                    _log4net.Info("In StockRepository, Stock " + stockname + " is not found");
                }
            }
            catch(Exception ex)
            {
                _log4net.Error("In Stock Repository, Exception Found - " + ex.Message);
            }
            return stockData;            
        }
    }
}
