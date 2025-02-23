import {IMusicalInstrument} from './i-musical-instrument';

export interface ITunableInstrument extends IMusicalInstrument {
    tune(): string;
}
