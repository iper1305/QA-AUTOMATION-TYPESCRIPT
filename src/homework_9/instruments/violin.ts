import {BaseTunableInstrument} from '../base-tunable-instrument';
import {IStringInstrument} from '../interfaces/i-string-instrument';

export class Violin extends BaseTunableInstrument implements IStringInstrument {
    private readonly strings: number = 4;

    public constructor() {
        super('Violin');
    }

    public play(): string {
        if (!this.isTuned()) {
            return `${this.name} is out of tune!`;
        }
        return `${this.name} creates magical melody`;
    }

    public getNumberOfStrings(): number {
        return this.strings;
    }

    public tune(): string {
        const baseMessage = super.tune();
        return `${baseMessage}. All ${this.strings} strings tuned`;
    }
}
