export default  {

        calculateMean (data, property) {
            const sum = data.reduce((acc, item) => acc + parseFloat(item[property]), 0);
            return sum / data.length;
        },
      
        calculateMedian  (data, property) {
            const sortedValues = data.map(item => parseFloat(item[property])).sort((a, b) => a - b);
            const middle = Math.floor(sortedValues.length / 2);
            
            if (sortedValues.length % 2 === 0) {
                return (sortedValues[middle - 1] + sortedValues[middle]) / 2;
            } else {
                return sortedValues[middle];
            }
        },
        
        calculateMode  (data, property)  {
            const valueCounts = {};
            
            data.forEach(item => {
                const value = item[property];
                valueCounts[value] = valueCounts[value] ? valueCounts[value] + 1 : 1;
            });
            
            let mode = null;
            let maxCount = 0;
            
            Object.entries(valueCounts).forEach(([value, count]) => {
                if (count > maxCount) {
                mode = value;
                maxCount = count;
                }
            });
            
            return parseFloat(mode);
        },
        
        addGammatoData (data) {
            data.map((item,i)=>{
                let temp = (item.Hue*item.Ash)/item.Magnesium;
                item["Gamma"]=parseFloat(temp);
                // console.log({temp});
            })  
        },
        
        formatNumber (value)  {
            try{    
                return value.toFixed(3);
            }
            catch{
                console.log({value});
            }        
        },
      
}