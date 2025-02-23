import { IMusicalInstrument } from './interfaces/i-musical-instrument';
import { ITunableInstrumemts } from './interfaces/i-tunable-instrumemts';
import { Guitar } from './instruments/guitar';
import { Violin } from './instruments/violin';
import { Drums } from './instruments/drums';

function prepareForConcert(instruments: IMusicalInstrument[]): void {
    console.log('Preparing all instruments for the concert...');

    instruments.forEach(instrument => {
        console.log(`Preparing ${instrument.getName()}`);

        if (isTunable(instrument)) {
            console.log(instrument.tune());
        }

        console.log(instrument.play());
        console.log('---');
    });
}

function isTunable(instrument: IMusicalInstrument): instrument is ITunableInstrumemts {
    return 'tune' in instrument;
}

const guitar = new Guitar();
const electricGuitar = new Guitar('electric');
const violin = new Violin();
const drums = new Drums();

prepareForConcert([guitar, electricGuitar, violin, drums]);
