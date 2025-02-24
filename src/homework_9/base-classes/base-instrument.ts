export class BaseInstrument {
    protected name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getInstrumentName(): string {
        return this.name;
    }

    public play(): string {
        return `${this.name} plays`;
    }
}
