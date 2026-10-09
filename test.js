async function fetchJoke() {
    const key='AIzaSyBp50sZk51Oy1nGhjJOZlEjJHp-dV4sluk';
    const url=`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;
    const response= await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            contents: [
                {
                    parts:[
                        {
                            text: 'Tell me a joke',
                        }
                    ]
                }
            ]
        })
    })
    const data= await response.json();
    // return data.contents[0].parts[0].text;
    const text=data.candidates?.[0]?.content?.parts?.[0]?.text;
    console.log(text);
}

fetchJoke();