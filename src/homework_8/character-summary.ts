import { CharacterDate } from './types';

export class CharacterSummary {
    public name: string;
    public totalEpisodes: number;
    public isAlive: boolean;
    public originLocation: string;

    public constructor(character: CharacterDate) {
        this.name = character.name;
        this.totalEpisodes = character.episode.length;
        this.isAlive = character.status === 'Alive';
        this.originLocation = character.origin.name;
    }

    public getInfo(): string {
        return `${this.name} appeared in ${this.totalEpisodes} episodes, is ${this.isAlive ? 'alive' : 'dead'} and comes from ${this.originLocation}`;
    }
}
