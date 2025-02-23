import {BaseInstrument} from '../base-instrument';

export class Drums extends BaseInstrument {
    public constructor() {
        super('Drums');
    }

    public play(): string {
        return `${this.name} creates rhythmic beats`;
    }
}
