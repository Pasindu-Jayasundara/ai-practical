async function test(){
    const response = await fetch('/test');
    const data = await response.text();
    document.getElementById('response').textContent = data;
}