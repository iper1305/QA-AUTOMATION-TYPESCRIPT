import {IMusicalInstrument} from './interfaces/i-musical-instrument';
import {Guitar} from './instruments/guitar';
import {Violin} from './instruments/violin';

function performConcert(instrument: IMusicalInstrument): void {
    console.log(`Preparing for performance with: ${instrument.getName()}`);
    console.log(instrument.tune());
    console.log(instrument.play());
    console.log('---');
}

const guitar = new Guitar();
const electricGuitar = new Guitar('electric');
const violin = new Violin();

performConcert(guitar);
performConcert(electricGuitar);
performConcert(violin);
