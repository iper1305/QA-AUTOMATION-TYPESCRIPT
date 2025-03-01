import { expect } from 'chai';
import { describe, it } from 'mocha';
import {Guitar} from '../homework_9/instruments/guitar';
import {BaseStringInstrument} from '../homework_9/base-classes/base-string-instrument';

describe('Guitar', () => {
    it('should inherit from BaseStringInstrument', () => {
        const guitar = new Guitar();
        expect(guitar instanceof BaseStringInstrument).to.be.true;
    });

    it('should initialize with default name and 6 strings', () => {
        const guitar = new Guitar();
        expect(guitar.getInstrumentName()).to.equal('Guitar');
        expect(guitar.getNumberOfStrings()).to.equal(6);
    });

    it('should have default type as acoustic', () => {
        const guitar = new Guitar();
        expect(guitar.play()).to.include('acoustic');
    });

    it('should accept custom type parameter', () => {
        const guitar = new Guitar('electric');
        expect(guitar.play()).to.include('electric');
    });

    it('should warn about being out of tune when playing without tuning', () => {
        const guitar = new Guitar();
        expect(guitar.play()).to.equal('Guitar is out of tune!');
    });

    it('should play melodiously after tuning', () => {
        const guitar = new Guitar();
        guitar.tune();
        expect(guitar.play()).to.equal('acoustic Guitar plays melodiously');
    });
});
