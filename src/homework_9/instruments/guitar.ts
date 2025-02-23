import {BaseTunableInstrument} from '../base-tunable-instrument';
import {IStringInstrument} from '../interfaces/i-string-instrument';

export class Guitar extends BaseTunableInstrument implements IStringInstrument {
    private type: string;
    private readonly strings: number = 6;

    public constructor(type = 'acoustic') {
        super('Guitar');
        this.type = type;
    }

    public play(): string {
        if (!this.isTuned()) {
            return `${this.name} is out of tune!`;
        }
        return `${this.type} ${this.name} plays melodiously`;
    }

    public getNumberOfStrings(): number {
        return this.strings;
    }

    public tune(): string {
        const baseMessage = super.tune();
        return `${baseMessage}. All ${this.strings} strings tuned`;
    }
}
