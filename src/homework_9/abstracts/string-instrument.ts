import { TunableInstrument } from './tunable-instrument';

export abstract class StringInstrument extends TunableInstrument {
    protected numberOfStrings: number;

    public constructor(name: string, numberOfStrings: number) {
        super(name);
        this.numberOfStrings = numberOfStrings;
    }

    public tune(): string {
        const baseMessage = super.tune();
        return `${baseMessage}. All ${this.numberOfStrings} strings tuned`;
    }
}
