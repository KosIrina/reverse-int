module.exports = function reverse (n) {

    let number = Math.abs(n);
    let revertedString = number.toString().split('').reverse().join('');
    let revertedNumber = Number(revertedString);
      
    return revertedNumber;

}