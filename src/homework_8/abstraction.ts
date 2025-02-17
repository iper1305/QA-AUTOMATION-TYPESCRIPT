import { ICharacter } from './types';

export abstract class EntityBase {
    protected id: number;
    protected name: string;
    protected created: Date;

    public constructor(id: number, name: string, created: string) {
        this.id = id;
        this.name = name;
        this.created = new Date(created);
    }

    public abstract getDescription(): string;

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }
}

export class Character extends EntityBase {
    private species: string;
    private status: string;

    public constructor(character: ICharacter) {
        super(character.id, character.name, character.created);
        this.species = character.species;
        this.status = character.status;
    }

    public getDescription(): string {
        return `${this.name} is a ${this.species} who is currently ${this.status}`;
    }

    public isHuman(): boolean {
        return this.species === 'Human';
    }
}
