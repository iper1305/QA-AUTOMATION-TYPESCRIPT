function fetchUserData() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(users => {
            // Process the users data
            return processUserData(users);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function processUserData(users) {
    const processedData = users.map(user => ({
        name: user.name,
        email: user.email
    }));

    console.log('Processed user data:', processedData);
    return processedData;
}

fetchUserData()
    .then(processedData => {
        console.log('Total users processed:', processedData.length);

        const gmailUsers = processedData.filter(user =>
            user.email.toLowerCase().includes('gmail')
        );
        console.log('Gmail users:', gmailUsers);
    })
    .catch(error => {
        console.error('Error in main execution:', error);
    });
