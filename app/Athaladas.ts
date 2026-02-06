export default class Athaladas {
    #óra: number;
    #perc: number;
    #azon: number;
    #irány: string;

    get azon(): number {
        return this.#azon
    }

    get irány(): string {
        return this.#irány
    }

    constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this.#óra = parseInt(m[0]);
        this.#perc = parseInt(m[1]);
        this.#azon = parseInt(m[2]);
        this.#irány = m[3];
    }
}
