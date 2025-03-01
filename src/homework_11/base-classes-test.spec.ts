import { expect } from 'chai';
import * as sinon from 'sinon';
import {BaseInstrument} from '../homework_9/base-classes/base-instrument';
import {BaseTunableInstrument} from '../homework_9/base-classes/base-tunable-instrument';
import {BaseStringInstrument} from '../homework_9/base-classes/base-string-instrument';

describe('Base Classes Tests', function() {
    afterEach(function() {
        sinon.restore();
    });

    describe('BaseInstrument', function() {
        it('should correctly initialize and return instrument name', function() {
            const instrument = new BaseInstrument('TestInstrument');
            expect(instrument.getInstrumentName()).to.equal('TestInstrument');
        });

        it('should return correct play message', function() {
            const instrument = new BaseInstrument('TestInstrument');
            expect(instrument.play()).to.equal('TestInstrument plays');
        });
    });

    describe('BaseTunableInstrument', function() {
        it('should correctly change tuned state when tune method is called', function() {
            const tunableInstrument = new BaseTunableInstrument('Piano');
            const tuneSpy = sinon.spy(tunableInstrument, 'tune');

            expect(tunableInstrument.isTuned()).to.be.false;

            tunableInstrument.tune();

            expect(tuneSpy.calledOnce).to.be.true;
            expect(tunableInstrument.isTuned()).to.be.true;
        });

        it('should return correct tune message', function() {
            const tunableInstrument = new BaseTunableInstrument('Piano');
            expect(tunableInstrument.tune()).to.equal('Piano is now in tune');
        });

        it('should inherit play method from BaseInstrument', function() {
            const tunableInstrument = new BaseTunableInstrument('Piano');
            expect(tunableInstrument.play()).to.equal('Piano plays');
        });
    });

    describe('BaseStringInstrument', function() {
        it('should correctly initialize with strings count', function() {
            const stringInstrument = new BaseStringInstrument('Harp', 47);
            expect(stringInstrument.getInstrumentName()).to.equal('Harp');
            expect(stringInstrument.getNumberOfStrings()).to.equal(47);
        });

        it('should correctly override tune method', function() {
            const stringInstrument = new BaseStringInstrument('Harp', 47);
            expect(stringInstrument.tune()).to.equal('Harp is now in tune. All 47 strings tuned');
        });

        it('should correctly use mocked parent tune method', function() {
            const tuneStub = sinon.stub(BaseTunableInstrument.prototype, 'tune');
            tuneStub.returns('Mocked tune response');

            const mockedStringInstrument = new BaseStringInstrument('Mocked', 3);

            expect(mockedStringInstrument.tune()).to.contain('Mocked tune response');
        });
    });
});
