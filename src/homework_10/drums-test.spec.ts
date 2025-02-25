import { expect } from 'chai';
import { describe, it } from 'mocha';
import {BaseInstrument} from '../homework_9/base-classes/base-instrument';
import {Drums} from '../homework_9/instruments/drums';
import {BaseTunableInstrument} from '../homework_9/base-classes/base-tunable-instrument';

describe('Drums', () => {
    it('should inherit from BaseInstrument but not BaseTunableInstrument', () => {
        const drums = new Drums();
        expect(drums instanceof BaseInstrument).to.be.true;
        expect(drums instanceof BaseTunableInstrument).to.be.false;
    });

    it('should initialize with name Drums', () => {
        const drums = new Drums();
        expect(drums.getInstrumentName()).to.equal('Drums');
    });

    it('should override play method with drums-specific message', () => {
        const drums = new Drums();
        expect(drums.play()).to.equal('Drums creates rhythmic beats');
    });
});
