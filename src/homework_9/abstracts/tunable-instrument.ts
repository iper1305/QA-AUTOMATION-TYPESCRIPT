import { ITunableInstrumemts } from '../interfaces/i-tunable-instrumemts';
import { MusicalInstrument } from './musical-instrument';

export abstract class TunableInstrument extends MusicalInstrument implements ITunableInstrumemts {
    protected isInTune = false;

    public tune(): string {
        this.isInTune = true;
        return `${this.name} is now in tune`;
    }
}
