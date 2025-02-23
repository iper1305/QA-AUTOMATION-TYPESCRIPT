import { IMusicalInstrument } from '../interfaces/i-musical-instrument';

export abstract class MusicalInstrument implements IMusicalInstrument {
    protected name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public abstract play(): string;

    public getName(): string {
        return this.name;
    }
}
