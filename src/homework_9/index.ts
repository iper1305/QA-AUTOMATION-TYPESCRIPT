import {BaseInstrument} from './base-classes/base-instrument';
import {BaseTunableInstrument} from './base-classes/base-tunable-instrument';
import {Guitar} from './instruments/guitar';
import {BaseStringInstrument} from './base-classes/base-string-instrument';
import {Violin} from './instruments/violin';
import {Drums} from './instruments/drums';

export function prepareForConcert(instruments: BaseInstrument[]): void {
    console.log('Preparing all instruments for the concert...');

    instruments.forEach((instrument) => {
        console.log(`Preparing ${instrument.getInstrumentName()}`);

        if (instrument instanceof BaseTunableInstrument) {
            console.log(instrument.tune());

            if (instrument instanceof BaseStringInstrument) {
                console.log(`This instrument has ${instrument.getNumberOfStrings()} strings`);
            }
        }

        console.log(instrument.play());
        console.log('---');
    });
}

const guitar = new Guitar();
const electricGuitar = new Guitar('electric');
const violin = new Violin();
const drums = new Drums();

prepareForConcert([guitar, electricGuitar, violin, drums]);
