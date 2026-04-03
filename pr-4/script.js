function calculate() {

    let input1 = 1;
    let input2 = 1;
    let expectedOutput = 1;

    let weight1 = 0.6;
    let weight2 = 0.2;
    let bias = -2;

    let weightedSum = (input1 * weight1) + (input2 * weight2) + bias;

    let activationOutput = 1/1 + Math.exp(-weightedSum);
    //console.log(activationOutput);

    if(activationOutput >= 0.5) {
        alert("Pass");
    } else {
        alert("Fail");  
    }

    let error = expectedOutput - activationOutput;
}