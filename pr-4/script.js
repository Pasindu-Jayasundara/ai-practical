let input1 = 1;
let input2 = 1;
let expectedOutput = 1;

let weight1 = 0.6;
let weight2 = 0.2;
let bias = -2;

let error = 0;

function calculate() {

    do{

    let weightedSum = (input1 * weight1) + (input2 * weight2) + bias;

    let activationOutput = 1 / (1 + Math.exp(-weightedSum));
    console.log("Activation Output: " + activationOutput);


    error = expectedOutput - activationOutput;
    console.log("Error: " + error);
    let learningRate = 0.5;

    weight1 = weight1 + (learningRate * error * input1);
    weight2 = weight2 + (learningRate * error * input2);
    bias = bias + (learningRate * error);

    console.log("Updated weight1: " + weight1);
    console.log("Updated weight2: " + weight2);
    console.log("Updated bias: " + bias);

    // console.log("\n");
    console.clear();
    }while (error != 0) 
}

