import { IMusicalInstrument } from './interfaces/i-musical-instrument';
import { ITunableInstrument } from './interfaces/i-tunable-instrument';
import { Guitar } from './instruments/guitar';
import { Violin } from './instruments/violin';
import {IStringInstrument} from './interfaces/i-string-instrument';
import {Drums} from './instruments/drums';

function prepareForConcert(instruments: IMusicalInstrument[]): void {
    console.log('Preparing all instruments for the concert...');

    instruments.forEach(instrument => {
        console.log(`Preparing ${instrument.getInstrumentName()}`);

        if (isTunable(instrument)) {
            console.log(instrument.tune());

            if (isStringInstrument(instrument)) {
                console.log(`This instrument has ${instrument.getNumberOfStrings()} strings`);
            }
        }

        console.log(instrument.play());
        console.log('---');
    });
}

function isTunable(instrument: IMusicalInstrument): instrument is ITunableInstrument {
    return 'tune' in instrument;
}

function isStringInstrument(instrument: ITunableInstrument): instrument is IStringInstrument {
    return 'getNumberOfStrings' in instrument;
}

const guitar = new Guitar();
const electricGuitar = new Guitar('electric');
const violin = new Violin();
const drums = new Drums();

prepareForConcert([guitar, electricGuitar, violin, drums]);
