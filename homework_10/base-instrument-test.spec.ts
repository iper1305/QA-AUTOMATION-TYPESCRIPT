import { expect } from 'chai';
import { describe, it } from 'mocha';
import {BaseInstrument} from '../homework_9/base-classes/base-instrument';

describe('BaseInstrument', () => {
    it('should correctly initialize with a name', () => {
        const instrument = new BaseInstrument('Test Instrument');
        expect(instrument.getInstrumentName()).to.equal('Test Instrument');
    });

    it('should return correct play message', () => {
        const instrument = new BaseInstrument('Piano');
        expect(instrument.play()).to.equal('Piano plays');
    });
});
