const brain = require('brain.js')

const trainingData = [
    'nama saya cakra',
    'saya peserta hacktiv8 bootcamp',
    'saya sedang menjalani fase 3',
    'belajar di hacktiv8 sangat menyenangkan'
]

const network = new brain.recurrent.LSTM()

network.train(trainingData, {
    iterations: 1000,
    log: stats => {
        console.log(stats)
    }
})

const queryString = 'menjalani'

console.log(queryString + network.run(queryString))