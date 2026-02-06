import fs from "fs";
import Athaladas from "@/app/Athaladas";

export default class Megoldas {
  #áthaladások: Athaladas[] = [];

  get elsőBelépő(): number {
    return this.#áthaladások[0].azon;
  }

  get utolsóKilépő(): number {
    for (const e of this.#áthaladások.reverse()) {
      if (e.irány == "ki") return e.azon;
    }
    return -1;
  }

  get statÁthaladás(): Map<number, number> {
    const stat: Map<number, number> = new Map<number, number>();
    for (const e of this.#áthaladások) {
      if (stat.has(e.azon)) {
        const régiÉrték = stat.get(e.azon) as number;
        stat.set(e.azon, régiÉrték + 1);
      } else {
        stat.set(e.azon, 1);
      }
    }

    return stat;
  }

  constructor(forrás: string) {
    const sorork: string[] = fs.readFileSync(forrás).toString().split("\n");
    for (const sor of sorork) {
      const aktsor: string = sor.trim();
      this.#áthaladások.push(new Athaladas(aktsor));
    }
  }
}
