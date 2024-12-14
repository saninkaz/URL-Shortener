
document.getElementById('shorten').addEventListener('click', async () => {
    const urlToShorten = prompt('Enter the URL to shorten:');

    if (urlToShorten) {
        try {
            const response = await fetch('/api/url/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ longUrl: `https://${urlToShorten}` }),
            });

            const result = await response.json();
            if (response.ok) {
                if (result.shortenedUrl) {
                    alert(`message: ${result.message} \nshortenedUrl: ${result.shortenedUrl} `)
                }
                else {
                    alert(`Error: ${result.message} `)
                }
            }
        } catch (error) {
            console.log(error);
            alert('Error Occurred')
        }
    }
});


document.getElementById("redirect").addEventListener("click", async () => {
    const urlToRedirect = prompt('Enter the URL to redirect: ')

    if (urlToRedirect) {
        window.location.href = `/api/url/redirect/${urlToRedirect} `;
    }
})


document.getElementById("rank").addEventListener("click", async () => {
    const num = prompt('Enter the number of Urls: ')

    if (num) {
        window.location.href = `/api/url/top/${num} `;
    }
})

document.getElementById("details").addEventListener("click", async () => {
    const url= prompt('Enter the URL in correct format: \n(Long url: verylargeurl1.com, Short url: url001)')

    if (url) {
        window.location.href = `/api/url/details/${url} `;
    }
})