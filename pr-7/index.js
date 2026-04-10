import ollama from "ollama";
import express from 'express';

const app = express();
const port = 3000;

app.get('/test', async (req, res) => {

    const response = await ollama.chat({
        model: "gemma3:270m",
        messages: [{ role: "user", content: "Why is the sky blue?" }],
    });
    res.send(response.message.content);

});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});