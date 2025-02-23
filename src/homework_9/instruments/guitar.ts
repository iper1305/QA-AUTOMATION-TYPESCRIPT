import {BaseStringInstrument} from '../base-classes/base-string-instrument';

export class Guitar extends BaseStringInstrument {
    private type: string;

    public constructor(type = 'acoustic') {
        super('Guitar', 6);
        this.type = type;
    }

    public play(): string {
        if (!this.isTuned()) {
            return `${this.name} is out of tune!`;
        }
        return `${this.type} ${this.name} plays melodiously`;
    }
}
