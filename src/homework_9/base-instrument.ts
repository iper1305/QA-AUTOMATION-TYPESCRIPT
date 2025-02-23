import {IMusicalInstrument} from './interfaces/i-musical-instrument';

export class BaseInstrument implements IMusicalInstrument {
    protected name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getInstrumentName(): string {
        return this.name;
    }

    public play(): string {
        return `${this.name} plays`;
    }
}
