import {BaseTunableInstrument} from './base-tunable-instrument';
import {IStringInstrument} from '../interfaces/i-string-instrument';

export class BaseStringInstrument extends BaseTunableInstrument implements IStringInstrument {
    protected readonly strings: number;

    public constructor(name: string, strings: number) {
        super(name);
        this.strings = strings;
    }

    public getNumberOfStrings(): number {
        return this.strings;
    }

    public tune(): string {
        const baseMessage = super.tune();
        return `${baseMessage}. All ${this.strings} strings tuned`;
    }
}
