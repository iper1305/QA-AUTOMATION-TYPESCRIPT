import {IMusicalInstrument} from '../interfaces/i-musical-instrument';

export abstract class MusicalInstrument implements IMusicalInstrument {
    protected instrumentName: string;
    protected isTuned = false;

    public constructor(name: string) {
        this.instrumentName = name;
    }

    public abstract play(): string;

    public tune(): string {
        this.isTuned = true;
        return `${this.instrumentName} is now in tune`;
    }

    public getInstrumentName(): string {
        return this.instrumentName;
    }
}
