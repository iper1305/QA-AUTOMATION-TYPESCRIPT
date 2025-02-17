import { CharacterResponse } from './types';

export async function fetchCharacters(): Promise<CharacterResponse> {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    if (!response.ok) {
        throw new Error('Failed to fetch characters');
    }
    return response.json();
}
