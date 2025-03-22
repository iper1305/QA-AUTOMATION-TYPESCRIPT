import {BaseInstrument} from '../homework_9/base-classes/base-instrument';
import {BaseTunableInstrument} from '../homework_9/base-classes/base-tunable-instrument';
import {BaseStringInstrument} from '../homework_9/base-classes/base-string-instrument';
import {Guitar} from '../homework_9/instruments/guitar';
import {Drums} from '../homework_9/instruments/drums';
import {Violin} from '../homework_9/instruments/violin';
import {prepareForConcert} from '../homework_9';

describe('prepareForConcert function', () => {
    let consoleOutput: string[] = [];
    const mockConsoleLog = jest.fn((message) => consoleOutput.push(message));
    const originalConsoleLog = console.log;

    beforeEach(() => {
        consoleOutput = [];
        console.log = mockConsoleLog;
    });

    afterEach(() => {
        console.log = originalConsoleLog;
        jest.resetAllMocks();
    });

    it('should prepare all instruments correctly', () => {
        const guitar = new Guitar();
        const drums = new Drums();

        const guitarGetNameSpy = jest.spyOn(guitar, 'getInstrumentName');
        const guitarTuneSpy = jest.spyOn(guitar, 'tune');
        const guitarGetStringsSpy = jest.spyOn(guitar, 'getNumberOfStrings');
        const guitarPlaySpy = jest.spyOn(guitar, 'play');

        const drumsGetNameSpy = jest.spyOn(drums, 'getInstrumentName');
        const drumsPlaySpy = jest.spyOn(drums, 'play');

        prepareForConcert([guitar, drums]);

        expect(guitarGetNameSpy).toHaveBeenCalled();
        expect(guitarTuneSpy).toHaveBeenCalled();
        expect(guitarGetStringsSpy).toHaveBeenCalled();
        expect(guitarPlaySpy).toHaveBeenCalled();

        expect(drumsGetNameSpy).toHaveBeenCalled();
        expect(drumsPlaySpy).toHaveBeenCalled();

        expect(consoleOutput[0]).toBe('Preparing all instruments for the concert...');
        expect(consoleOutput).toContain('Preparing Guitar');
        expect(consoleOutput).toContain('Guitar is now in tune. All 6 strings tuned');
        expect(consoleOutput).toContain('This instrument has 6 strings');
        expect(consoleOutput).toContain('acoustic Guitar plays melodiously');
        expect(consoleOutput).toContain('Preparing Drums');
        expect(consoleOutput).toContain('Drums creates rhythmic beats');
    });

    it('should handle tunable instruments without strings', () => {
        class TestTunable extends BaseTunableInstrument {
            public constructor() {
                super('TestTunable');
            }
        }

        const testInstrument = new TestTunable();

        const getNameSpy = jest.spyOn(testInstrument, 'getInstrumentName');
        const tuneSpy = jest.spyOn(testInstrument, 'tune');
        const playSpy = jest.spyOn(testInstrument, 'play');

        prepareForConcert([testInstrument]);

        expect(getNameSpy).toHaveBeenCalled();
        expect(tuneSpy).toHaveBeenCalled();
        expect(playSpy).toHaveBeenCalled();

        expect(consoleOutput).toContain('Preparing TestTunable');
        expect(consoleOutput).toContain('TestTunable is now in tune');
        expect(consoleOutput).toContain('TestTunable plays');

        const stringsMessage = consoleOutput.find(msg => msg.includes('strings'));
        expect(stringsMessage).toBeUndefined();
    });

    it('should process an array of multiple instruments in order', () => {
        const guitar = new Guitar('electric');
        const violin = new Violin();
        const drums = new Drums();

        prepareForConcert([guitar, violin, drums]);

        expect(consoleOutput.indexOf('Preparing Guitar')).toBeLessThan(
            consoleOutput.indexOf('Preparing Violin')
        );
        expect(consoleOutput.indexOf('Preparing Violin')).toBeLessThan(
            consoleOutput.indexOf('Preparing Drums')
        );

        expect(consoleOutput).toContain('electric Guitar plays melodiously');
        expect(consoleOutput).toContain('Violin creates magical melody');
        expect(consoleOutput).toContain('Drums creates rhythmic beats');
    });
});

describe('Object manipulation tests', () => {
    it('should correctly identify BaseStringInstrument as instance of BaseTunableInstrument', () => {
        const guitar = new Guitar();

        expect(guitar instanceof BaseTunableInstrument).toBe(true);
    });

    it('should correctly handle inheritance chain for instruments', () => {
        const tunableInstrument = new BaseTunableInstrument('Test');
        const stringInstrument = new BaseStringInstrument('Test', 6);
        const guitar = new Guitar();
        const violin = new Violin();
        const drums = new Drums();

        expect(tunableInstrument instanceof BaseInstrument).toBe(true);
        expect(stringInstrument instanceof BaseTunableInstrument).toBe(true);
        expect(stringInstrument instanceof BaseInstrument).toBe(true);
        expect(guitar instanceof BaseStringInstrument).toBe(true);
        expect(guitar instanceof BaseTunableInstrument).toBe(true);
        expect(violin instanceof BaseStringInstrument).toBe(true);
        expect(drums instanceof BaseInstrument).toBe(true);
        expect(drums instanceof BaseTunableInstrument).toBe(false);
    });

    it('should properly manipulate tuned state for tunable instruments', () => {
        const guitar = new Guitar();

        expect(guitar.isTuned()).toBe(false);

        expect(guitar.play()).toBe('Guitar is out of tune!');

        guitar.tune();

        expect(guitar.isTuned()).toBe(true);

        expect(guitar.play()).toBe('acoustic Guitar plays melodiously');
    });
});
