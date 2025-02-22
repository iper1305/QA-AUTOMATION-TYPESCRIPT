import {MusicalInstrument} from './musical-instrument';

export abstract class StringInstrument extends MusicalInstrument {
    protected stringCount: number;

    public constructor(name: string, stringCount: number) {
        super(name);
        this.stringCount = stringCount;
    }

    public tune(): string {
        const baseMessage = super.tune();
        return `${baseMessage}. All ${this.stringCount} strings tuned`;
    }
}
