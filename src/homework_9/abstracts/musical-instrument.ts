import {IMusicalInstrument} from '../interfaces/i-musical-instrument';

export abstract class MusicalInstrument implements IMusicalInstrument {
    protected name: string;
    protected isInTune = false;

    public constructor(name: string) {
        this.name = name;
    }

    public abstract play(): string;

    public tune(): string {
        this.isInTune = true;
        return `${this.name} is now in tune`;
    }

    public getName(): string {
        return this.name;
    }
}
