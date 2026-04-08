function training() {

    let data = [
        [1, 1, 1],
        [0, 0, 0],
        [1, 0, 1],
    ]
    // [0, 1, 0] is missing, but the model should learn to predict it as 0

    let weight1 = 0.6
    let weight2 = 0.2
    let bias = -2
    let learningRate = 0.1

    for (let x = 0; x < 100000; x++) {

        for (let i = 0; i < data.length; i++) {

            let input1 = data[i][0]
            let input2 = data[i][1]
            let expectedOutput = data[i][2]

            let weightedSum = (input1 * weight1) + (input2 * weight2) + bias
            let activation = 1 / (1 + Math.exp(-weightedSum))

            let error = expectedOutput - activation

            weight1 = weight1 + (learningRate * error * input1)
            weight2 = weight2 + (learningRate * error * input2)
            bias = bias + (learningRate * error)
        }
    }

    console.log("Final weights and bias:")
    console.log("Weight 1:", weight1)
    console.log("Weight 2:", weight2)
    console.log("Bias:", bias)
}


function test(){

    let weight1 = 16.698491223868853
    let weight2 = 2.7257282206658155
    let bias =  -8.114047688497322

    let input1 = 0
    let input2 = 1

    let weightedSum = (input1 * weight1) + (input2 * weight2) + bias
    let activation = 1 / (1 + Math.exp(-weightedSum))

    console.log("Output for input (0, 1):", activation)
}