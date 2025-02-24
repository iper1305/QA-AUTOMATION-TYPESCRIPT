import {BaseStringInstrument} from '../base-classes/base-string-instrument';

export class Violin extends BaseStringInstrument {
    public constructor() {
        super('Violin', 4);
    }

    public play(): string {
        if (!this.isTuned()) {
            return `${this.name} is out of tune!`;
        }
        return `${this.name} creates magical melody`;
    }
}
