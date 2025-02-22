import {StringInstrument} from '../abstracts/string-instrument';

export class Guitar extends StringInstrument {
    private type: string;

    public constructor(type = 'acoustic') {
        super('Guitar', 6);
        this.type = type;
    }

    public play(): string {
        if (!this.isTuned) {
            return `${this.instrumentName} is out of tune!`;
        }
        return `${this.type} ${this.instrumentName} plays melodiously`;
    }
}
