import {BaseInstrument} from '../base-classes/base-instrument';

export class Drums extends BaseInstrument {
    public constructor() {
        super('Drums');
    }

    public play(): string {
        return `${this.name} creates rhythmic beats`;
    }
}
