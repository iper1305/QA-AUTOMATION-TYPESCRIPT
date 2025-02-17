import { fetchCharacters } from './api';
import { Character } from './abstraction';
import { CharacterSummary } from './character-summary';

async function main(): Promise<void> {
    try {
        const response = await fetchCharacters();

        const characters = response.results.map(char => new Character(char));

        const summaries = response.results.map(char => new CharacterSummary(char));

        console.log('Characters:');
        characters.forEach(char => {
            console.log(char.getDescription());
            console.log(`Is human: ${char.isHuman()}`);
        });

        console.log('\nCharacter Summaries:');
        summaries.forEach(summary => {
            console.log(summary.getInfo());
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

main();
