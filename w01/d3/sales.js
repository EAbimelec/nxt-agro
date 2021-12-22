const salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
};
  
const companySalesData = [
    {
        name: "Telus",
        province: "BC",
        sales: [ 100, 200, 400 ]
    },
    {
        name: "Bombardier",
        province: "AB",
        sales: [ 80, 20, 10, 100, 90, 500 ]
    },
    {
        name: "Telus",
        province: "SK",
        sales: [ 500, 100 ]
    }
];

const calculateSalesTax = function(salesData, taxRates) {
    // Implement your code here
    let result = {};
    const sum = (previousValue, currentValue) => previousValue + currentValue;

    for (const company of salesData) {

        // Get the sum of all sales
        let companyName = company.name;
        let totalSales = company.sales.reduce(sum);
        let taxRate = taxRates[company.province];
        let totalTaxes = totalSales * taxRate;

        if (companyName in result) {
            result[companyName]['totalSales'] += totalSales;
            result[companyName]['totalTaxes'] += totalTaxes;
        } else {
            let companyResume = {'totalSales' : totalSales, 'totalTaxes' : totalTaxes};
            result[companyName] = companyResume;
        }
 
    }
    
    return result;

};


console.log(calculateSalesTax(companySalesData, salesTaxRates));