import { ICharacterResponse } from './types';

export async function fetchCharacters(): Promise<ICharacterResponse> {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    if (!response.ok) {
        throw new Error('Failed to fetch characters');
    }
    return response.json();
}
