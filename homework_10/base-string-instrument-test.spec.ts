import { expect } from 'chai';
import { describe, it } from 'mocha';
import {BaseStringInstrument} from '../homework_9/base-classes/base-string-instrument';
import {BaseTunableInstrument} from '../homework_9/base-classes/base-tunable-instrument';


describe('BaseStringInstrument', () => {
    it('should inherit from BaseTunableInstrument', () => {
        const stringInstrument = new BaseStringInstrument('Banjo', 5);
        expect(stringInstrument instanceof BaseTunableInstrument).to.be.true;
    });

    it('should correctly store number of strings', () => {
        const stringInstrument = new BaseStringInstrument('Banjo', 5);
        expect(stringInstrument.getNumberOfStrings()).to.equal(5);
    });

    it('should override tune method with extended message', () => {
        const stringInstrument = new BaseStringInstrument('Banjo', 5);
        expect(stringInstrument.tune()).to.equal('Banjo is now in tune. All 5 strings tuned');
    });
});
