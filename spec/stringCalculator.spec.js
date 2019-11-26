const calculator = require("../src/stringCalculator");
const stringCalculator = new calculator;

describe('stringCalculator', function () {

    it('should return 0 for empty input', function () {
      expect(stringCalculator.add("")).toEqual(0);
    });
  
    it('should return a number for single number input', function () {
      expect(stringCalculator.add("1")).toEqual(1);
    });
  
    it('should add two numbers separated by delimiter', function () {
      expect(stringCalculator.add("1,2")).toEqual(3);
    });
  
    it('should add many numbers separated by delimiter', function () {
      expect(stringCalculator.add("1,2,3")).toEqual(6);
    });
  
    it('should treat new line character as delimiter', function () {
      expect(stringCalculator.add("1\n2,3")).toEqual(6);
    });
  
    it('should ignore negative numbers and throw an error', function () {
      expect(function () {
        return stringCalculator.add("1,-2,4");
      }).toThrowError(Error);
    });
  
    it('should ignore numbers more than 1000', function () {
      expect(stringCalculator.add("1,1001,3")).toEqual(4);
    });
  
    it('should support multiple length delimiter', function () {
      expect(stringCalculator.add("//[**]\n1**2**3")).toEqual(6);
    });
  
    it('should support multiple delimiters', function () {
      expect(stringCalculator.add("//[*][?]\n1*2?3")).toEqual(6);
    });
  
  
    it('should support number as a delimiter', function () {
      expect(stringCalculator.add("//5\n15253")).toEqual(6);
    });
  });