import { Mutual } from "./mutualfund";
import { Stock } from "./stock";

export class Calculatenetworth
{
    constructor(
        public PortfolioId ?:number,
        public stockList:Stock[] =[],
        public mutualFundList:Mutual[] =[],
        public networth?:any
        /*public StockName?:string,public StockCount?:number,
        public MutualFundName?:string,public MutualFundUnits?:number*/
        )
    {    
    }
}