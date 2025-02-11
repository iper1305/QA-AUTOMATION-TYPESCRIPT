async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();
        return processUserData(users);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

function processUserData(users) {
    const processedData = users.map(user => ({
        name: user.name,
        email: user.email
    }));

    console.log('Processed user data:', processedData);
    return processedData;
}

async function main() {
    try {
        const processedData = await fetchUserData();
        console.log('Total users processed:', processedData.length);

        const gmailUsers = processedData.filter(user =>
            user.email.toLowerCase().includes('gmail')
        );
        console.log('Gmail users:', gmailUsers);
    } catch (error) {
        console.error('Error in main execution:', error);
    }
}

main();
