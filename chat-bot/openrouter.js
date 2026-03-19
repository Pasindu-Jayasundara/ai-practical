async function request() {
    const r = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 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',
            'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
            'X-OpenRouter-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'stepfun/step-3.5-flash:free',
            messages: [
                {
                    role: 'user',
                    content: 'What is the meaning of life?',
                },
            ],
        }),
    });

    const data = await r.json();
    console.log(data.choices[0].message.content);

}

// request();