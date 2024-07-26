async function activity() {
    // Define the API URL
    let activity_URL = 'https://bored.api.lewagon.com/api/activity'
    // Make a GET request
    fetch(activity_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

}
