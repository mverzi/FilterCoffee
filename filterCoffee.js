/**
 * "Filter Coffee" 7 kyu Codewars Solution
 * This function returns the prices of coffee that you can afford with your budget
 * @param {*} budget The amount of money in dollars you have to spend on coffee
 * @param {*} prices The prices of coffee from different stores
 * @returns The prices of coffee you can afford with your budget
 */
function search(budget, prices) {
    return prices.filter(num => num <= budget).sort((a,b) => a-b).toString()
  }