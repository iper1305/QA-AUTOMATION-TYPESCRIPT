import { expect } from 'chai';
import { describe, it } from 'mocha';
import {Violin} from '../homework_9/instruments/violin';
import {BaseStringInstrument} from '../homework_9/base-classes/base-string-instrument';


describe('Violin', () => {
    it('should inherit from BaseStringInstrument', () => {
        const violin = new Violin();
        expect(violin instanceof BaseStringInstrument).to.be.true;
    });

    it('should initialize with name Violin and 4 strings', () => {
        const violin = new Violin();
        expect(violin.getInstrumentName()).to.equal('Violin');
        expect(violin.getNumberOfStrings()).to.equal(4);
    });

    it('should warn about being out of tune when playing without tuning', () => {
        const violin = new Violin();
        expect(violin.play()).to.equal('Violin is out of tune!');
    });

    it('should create magical melody after tuning', () => {
        const violin = new Violin();
        violin.tune();
        expect(violin.play()).to.equal('Violin creates magical melody');
    });
});
