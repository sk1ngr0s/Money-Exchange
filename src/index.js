// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let exchObj = {}
    if (currency <= 0) {
        return exchObj
    } else if (currency > 10000) {
        exchObj.error = "You are rich, my friend! We don't have so much coins for exchange"
        return exchObj
    } else {
        const coinsArr = [50, 25, 10, 5, 1]
        let lettersArr = ["H", "Q", "D", "N", "P"]
        for (let i = 0; i < coinsArr.length; i++) {
            if (Math.floor(currency / coinsArr[i]) > 0) {
                exchObj[lettersArr[i]] = Math.floor(currency / coinsArr[i])
                currency %= coinsArr[i]
            }
        }
        return exchObj
    }
}