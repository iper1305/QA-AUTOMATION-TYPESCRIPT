import { MusicalInstrument } from '../abstracts/musical-instrument';

export class Drums extends MusicalInstrument {
    public constructor() {
        super('Drums');
    }

    public play(): string {
        return `${this.name} creates rhythmic beats`;
    }
}
