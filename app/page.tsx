import Megoldas from "@/app/Megoldas";

export default function HomePage() {
 
  const m: Megoldas = new Megoldas("ajto.txt")

  return (
    <div className="font-mono">
      <p>Társalgó feladat megoldása</p>
      <p>2. feladat</p>
      <p>Az első belépő: {m.elsőBelépő}</p>
      <p>Az utolsó kilépő: {m.utolsóKilépő}</p>
    </div>
  );
}
