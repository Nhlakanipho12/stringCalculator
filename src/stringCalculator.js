class stringCalculator {
    add(stringNumber){
      if (stringNumber === ''){
        return 0;
      }
      const delimiter = this.getDelimiter(stringNumber)
      const formattedInput = this.formatInput(stringNumber)
      return this.calculateSum(this.getNumbers(formattedInput, delimiter))
    }

    formatInput(input){
      const delimiterRegExp = /^(\/\/.*\n)/
      const matches = delimiterRegExp.exec(input)
      if(matches && matches.length > 0){
        return input.replace(delimiterRegExp,'')
      }
      return input;
    }
  
    getDelimiter(input){
      const delimiters = [];
      const multipleDelimiterRegexp = /(?:^\/\/)?\[([^\[\]]+)\]\n?/g;
      let matches = multipleDelimiterRegexp.exec(input);
      while(matches !== null){
        delimiters.push(matches[1]);
        matches = multipleDelimiterRegexp.exec(input)
      }
      if(delimiters.length > 0){
        return new RegExp('['+ delimiters.join('|')+']');
      }
      matches = /^\/\/(.*)\n/.exec(input)
      if(matches && matches[1]){
        return matches[1];
      }
      return /[\n,]/;
      
    }

    getNumbers(string, delimiter){
      return string.split(delimiter)
        .filter(n => n !== '')
        .map(n => parseInt(n))
    }
  
  calculateSum(numbers){
    const isNagative = []
      const finalSum = numbers.reduce((sum, n) =>{
        if(n > 1000){
          return sum;
        }
        if(n < 0){
          isNagative.push(n)
          return 0;
        }
        return sum + n;
      })
      if(isNagative.length > 0){
        throw new Error('Negative numbers are not allowed: '+isNagative.join(','))
      }
      return finalSum;
  }
}
  
  
module.exports = stringCalculator;
var istance_of;
instance_of = new stringCalculator();
console.info(instance_of.add("1,8"));