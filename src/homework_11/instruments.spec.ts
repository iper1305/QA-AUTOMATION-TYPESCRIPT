import { expect } from 'chai';
import * as sinon from 'sinon';
import {Guitar} from '../homework_9/instruments/guitar';
import {Violin} from '../homework_9/instruments/violin';
import {Drums} from '../homework_9/instruments/drums';

describe('Musical Instruments Tests', function() {
    afterEach(function() {
        sinon.restore();
    });

    describe('Guitar', function() {
        it('should correctly initialize and play Guitar', function() {
            const guitar = new Guitar();

            expect(guitar.getInstrumentName()).to.equal('Guitar');
            expect(guitar.getNumberOfStrings()).to.equal(6);
            expect(guitar.isTuned()).to.be.false;

            expect(guitar.play()).to.equal('Guitar is out of tune!');

            const tuneResult = guitar.tune();
            expect(tuneResult).to.equal('Guitar is now in tune. All 6 strings tuned');
            expect(guitar.isTuned()).to.be.true;

            expect(guitar.play()).to.equal('acoustic Guitar plays melodiously');
        });

        it('should change play output based on guitar type', function() {
            const acousticGuitar = new Guitar('acoustic');
            const electricGuitar = new Guitar('electric');

            const tunedStub = sinon.stub(Guitar.prototype, 'isTuned');
            tunedStub.returns(true);

            expect(acousticGuitar.play()).to.equal('acoustic Guitar plays melodiously');
            expect(electricGuitar.play()).to.equal('electric Guitar plays melodiously');
        });

        it('should use default type if none provided', function() {
            const guitar = new Guitar();
            const tunedStub = sinon.stub(Guitar.prototype, 'isTuned');
            tunedStub.returns(true);

            expect(guitar.play()).to.equal('acoustic Guitar plays melodiously');
        });
    });

    describe('Violin', function() {
        it('should correctly initialize with 4 strings', function() {
            const violin = new Violin();

            expect(violin.getInstrumentName()).to.equal('Violin');
            expect(violin.getNumberOfStrings()).to.equal(4);
        });

        it('should report out of tune when not tuned', function() {
            const violin = new Violin();
            expect(violin.isTuned()).to.be.false;
            expect(violin.play()).to.equal('Violin is out of tune!');
        });

        it('should play correctly when tuned', function() {
            const violin = new Violin();
            violin.tune();
            expect(violin.isTuned()).to.be.true;
            expect(violin.play()).to.equal('Violin creates magical melody');
        });
    });

    describe('Drums', function() {
        it('should correctly initialize', function() {
            const drums = new Drums();
            expect(drums.getInstrumentName()).to.equal('Drums');
        });

        it('should play rhythmic beats', function() {
            const drums = new Drums();
            expect(drums.play()).to.equal('Drums creates rhythmic beats');
        });

        it('should not have tuning functionality', function() {
            const drums = new Drums();
            expect('tune' in drums).to.be.false;
        });
    });
});
