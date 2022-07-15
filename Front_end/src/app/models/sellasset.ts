import { Mutual } from "./mutualfund";
import { Stock } from "./stock";

export class SellAsset
{
    constructor(
        public PortfolioId ?:number,
        public stockList:Stock[] =[],
        public mutualFundList:Mutual[] =[],
        public networth?:any,
        public assetNameToBeSold?:any,
        public assetTypeToBeSold?:any
        /*public StockName?:string,public StockCount?:number,
        public MutualFundName?:string,public MutualFundUnits?:number*/
        )
    {    
    }
}