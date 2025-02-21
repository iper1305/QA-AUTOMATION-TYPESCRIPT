import {MusicalInstrument} from './musical-instrument';

export abstract class StringInstrument extends MusicalInstrument {
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
