import { expect } from 'chai';
import * as sinon from 'sinon';
import {Guitar} from '../homework_9/instruments/guitar';
import {Violin} from '../homework_9/instruments/violin';
import {Drums} from '../homework_9/instruments/drums';
import {prepareForConcert} from '../homework_9';
import {BaseInstrument} from '../homework_9/base-classes/base-instrument';
import {BaseStringInstrument} from '../homework_9/base-classes/base-string-instrument';
import {BaseTunableInstrument} from '../homework_9/base-classes/base-tunable-instrument';

describe('Integration Tests', function() {
    let consoleLogStub: sinon.SinonStub;

    beforeEach(function() {
        consoleLogStub = sinon.stub(console, 'log');
    });

    afterEach(function() {
        consoleLogStub.restore();
        sinon.restore();
    });

    describe('prepareForConcert function', function() {
        it('should prepare all instruments for concert using mocks', function() {
            const guitarMock = sinon.createStubInstance(Guitar);
            const violinMock = sinon.createStubInstance(Violin);
            const drumsMock = sinon.createStubInstance(Drums);

            guitarMock.getInstrumentName.returns('Guitar');
            guitarMock.tune.returns('Guitar is now in tune');
            guitarMock.getNumberOfStrings.returns(6);
            guitarMock.play.returns('Guitar plays melodiously');

            violinMock.getInstrumentName.returns('Violin');
            violinMock.tune.returns('Violin is now in tune');
            violinMock.getNumberOfStrings.returns(4);
            violinMock.play.returns('Violin creates magical melody');

            drumsMock.getInstrumentName.returns('Drums');
            drumsMock.play.returns('Drums creates rhythmic beats');

            prepareForConcert([guitarMock as unknown as BaseInstrument,
                violinMock as unknown as BaseInstrument,
                drumsMock as unknown as BaseInstrument]);

            sinon.assert.called(guitarMock.getInstrumentName);
            sinon.assert.called(guitarMock.tune);
            sinon.assert.called(guitarMock.getNumberOfStrings);
            sinon.assert.called(guitarMock.play);

            sinon.assert.called(violinMock.getInstrumentName);
            sinon.assert.called(violinMock.tune);
            sinon.assert.called(violinMock.getNumberOfStrings);
            sinon.assert.called(violinMock.play);

            sinon.assert.called(drumsMock.getInstrumentName);
            sinon.assert.called(drumsMock.play);
        });

        it('should call console.log correct number of times in prepareForConcert', function() {
            const guitar = new Guitar();
            const violin = new Violin();
            const drums = new Drums();

            prepareForConcert([guitar, violin, drums]);

            expect(consoleLogStub.callCount).to.equal(14);
        });

        it('should tune tunable instruments and play all instruments', function() {
            const guitar = new Guitar();
            const violin = new Violin();
            const drums = new Drums();

            const guitarPlaySpy = sinon.spy(guitar, 'play');
            const guitarTuneSpy = sinon.spy(guitar, 'tune');
            const violinPlaySpy = sinon.spy(violin, 'play');
            const violinTuneSpy = sinon.spy(violin, 'tune');
            const drumsPlaySpy = sinon.spy(drums, 'play');

            prepareForConcert([guitar, violin, drums]);

            sinon.assert.calledOnce(guitarPlaySpy);
            sinon.assert.calledOnce(guitarTuneSpy);
            sinon.assert.calledOnce(violinPlaySpy);
            sinon.assert.calledOnce(violinTuneSpy);
            sinon.assert.calledOnce(drumsPlaySpy);

            expect(guitar.isTuned()).to.be.true;
            expect(violin.isTuned()).to.be.true;
        });

        it('should handle empty array of instruments', function() {
            prepareForConcert([]);

            expect(consoleLogStub.callCount).to.equal(1);
            expect(consoleLogStub.firstCall.args[0]).to.equal('Preparing all instruments for the concert...');
        });

        it('should correctly identify instrument interfaces using instanceof', function() {
            const baseInstrument = new BaseInstrument('Base');
            const tunableInstrument = new BaseTunableInstrument('Tunable');
            const stringInstrument = new BaseStringInstrument('String', 3);

            const basePlaySpy = sinon.spy(baseInstrument, 'play');
            const tunablePlaySpy = sinon.spy(tunableInstrument, 'play');
            const tunableTuneSpy = sinon.spy(tunableInstrument, 'tune');
            const stringPlaySpy = sinon.spy(stringInstrument, 'play');
            const stringTuneSpy = sinon.spy(stringInstrument, 'tune');
            const stringGetNumberSpy = sinon.spy(stringInstrument, 'getNumberOfStrings');

            prepareForConcert([baseInstrument, tunableInstrument, stringInstrument]);

            sinon.assert.calledOnce(basePlaySpy);
            sinon.assert.calledOnce(tunablePlaySpy);
            sinon.assert.calledOnce(tunableTuneSpy);
            sinon.assert.calledOnce(stringPlaySpy);
            sinon.assert.calledOnce(stringTuneSpy);
            sinon.assert.calledOnce(stringGetNumberSpy);
        });
    });
});
