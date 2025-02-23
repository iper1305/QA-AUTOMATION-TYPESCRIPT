import {IMusicalInstrument} from './i-musical-instrument';

export interface ITunableInstrumemts extends IMusicalInstrument {
    tune(): string;
}
