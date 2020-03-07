const brain = require('brain.js')

const trainingData = [
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
]

const network = new brain.recurrent.LSTM()

network.train(trainingData, {
    log: stats => {
        console.log(stats)
    }
})

console.log(network.run([10, 9, 8, 7, 6]))