import fetch from 'node-fetch';

async function fetchData() {
    try {
        console.log('Attempting to fetch from non-existent service...');
        const firstResponse = await fetch('https://non-existent-api.example.com/data');
        const data = await firstResponse.json();
        return data;

    } catch (firstError) {
        console.log('First attempt failed, trying backup service...');

        try {
            const secondResponse = await fetch('https://jsonplaceholder.typicode.com/users');

            if (!secondResponse.ok) {
                throw new Error(`Backup service failed with status: ${secondResponse.status}`);
            }

            const data = await secondResponse.json();
            return data;

        } catch (secondError) {
            const errorMessage = 'All attempts to fetch data failed:\n' +
                `First attempt: ${firstError.message}\n` +
                `Second attempt: ${secondError.message}`;

            throw new Error(errorMessage);
        }
    }
}

async function main() {
    try {
        const data = await fetchData();
        console.log('Successfully retrieved data:', data);
    } catch (error) {
        console.error('Error in main execution:', error.message);
    }
}

main();
