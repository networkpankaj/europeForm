document.addEventListener('DOMContentLoaded', function() {
    fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        const continentCode  = data.continent_code;
        if (continentCode ===  'EU') {
            document.getElementById('messageEurope').style.display = 'block'
        }
    })
    .catch(error => {
        console.error('Error:', error)
    })
})
