import {StringInstrument} from '../abstracts/string-instrument';

export class Violin extends StringInstrument {
    public constructor() {
        super('Violin', 4);
    }

    public play(): string {
        if (!this.isTuned) {
            return `${this.instrumentName} is out of tune!`;
        }
        return `${this.instrumentName} creates magical melody`;
    }
}
