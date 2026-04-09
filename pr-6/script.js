async function test() {

    let prompt = document.getElementById("x").value;

    let url = "http://localhost:11434/api/generate"; 
    let data = {
        model: "gemma3:270m",
        prompt: prompt,
        stream : false
    }

    let response = await fetch(url, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    let result = await response.json();
    document.getElementById("result").innerText = result.response;

} 