import {ITunableInstrument} from './i-tunable-instrument';

export interface IStringInstrument extends ITunableInstrument {
    getNumberOfStrings(): number;
}
