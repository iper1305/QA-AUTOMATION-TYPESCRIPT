import {StringInstrument} from '../abstracts/string-instrument';

export class Violin extends StringInstrument {
    public constructor() {
        super('Violin', 4);
    }

    public play(): string {
        if (!this.isInTune) {
            return `${this.name} is out of tune!`;
        }
        return `${this.name} creates magical melody`;
    }
}
