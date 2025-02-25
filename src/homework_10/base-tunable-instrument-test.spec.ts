import { expect } from 'chai';
import { describe, it } from 'mocha';
import {BaseInstrument} from '../homework_9/base-classes/base-instrument';
import {BaseTunableInstrument} from '../homework_9/base-classes/base-tunable-instrument';

describe('BaseTunableInstrument', () => {
    it('should inherit from BaseInstrument', () => {
        const tunableInstrument = new BaseTunableInstrument('Cello');
        expect(tunableInstrument instanceof BaseInstrument).to.be.true;
    });

    it('should initialize with tuned=false', () => {
        const tunableInstrument = new BaseTunableInstrument('Cello');
        expect(tunableInstrument.isTuned()).to.be.false;
    });

    it('should set tuned=true after tuning', () => {
        const tunableInstrument = new BaseTunableInstrument('Cello');
        tunableInstrument.tune();
        expect(tunableInstrument.isTuned()).to.be.true;
    });

    it('should return correct tuning message', () => {
        const tunableInstrument = new BaseTunableInstrument('Cello');
        expect(tunableInstrument.tune()).to.equal('Cello is now in tune');
    });
});
