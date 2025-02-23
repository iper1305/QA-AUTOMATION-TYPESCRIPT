import {BaseInstrument} from './base-instrument';
import {ITunableInstrument} from './interfaces/i-tunable-instrument';

export class BaseTunableInstrument extends BaseInstrument implements ITunableInstrument {
    protected tuned = false;

    public tune(): string {
        this.tuned = true;
        return `${this.name} is now in tune`;
    }

    public isTuned(): boolean {
        return this.tuned;
    }
}
