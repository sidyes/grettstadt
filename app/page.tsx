import Image from "next/image";
import FloorPlan from "./components/floor-plan/floor-plan";
import energieausweisImage from "./images/energieausweis.jpg";
import ogImage from "./images/floor-plans/og.jpg";
import egImage from "./images/floor-plans/eg.jpg";
import kgImage from "./images/floor-plans/kg.jpg";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function Home() {
  const grundrissItems = [
    "Büro mit Venylboden und Heizkörper",
    "Alle weiteren Räume mit Granitboden und Fußbodenheizung",
    "Alle Fenster mit Außenrollos",
    "Doppelgarage bietet weiteren Stauraum",
    "Direkter Zugang von Garage ins Haus",
    "Garage vollständig gefliest",
    "Garage mit Waschbecken ausgestattet",
    "Garagentore motorbetrieben",
    "Direkter Zugang von Garage in den Garten",
  ];
  const obergeschossItems = [
    "Starkstrom-, Wasser- und Abwasseranschlüssen in 'Eltern' vorhanden",
    "Küchenvorbereitung ermöglicht den Umbau im Zweifamilienhaus",
    "Ein Schlafzimmer mit Anschlüssen für Küche (Starkstrom, Wasser, Abwasser)",
    "Alle Fenster mit Außenrollos",
  ];
  const kellerItems = [
    "Freiliegende Außenfenster mit Außenrollos",
    "Kellerzugang auch von Außen",
    "Keller 3 und 4 sind nicht durch eine Wand getrennt",
    "Garage unterkellert",
  ];

  return (
    <>
      <Header />
      <main className="flex flex-col justify-between pt-0 p-4 md:p-8 space-y-8 md:space-y-16">
        <div
          className="text-base md:text-xl flex justify-between gap-2 container mb-0 flex-wrap"
          id="start"
        >
          <span className="flex flex-col md:flex-row gap-2">
            <b>195 m²</b> Wohnfläche
          </span>
          <span className="flex flex-col md:flex-row gap-2">
            <b>165 m²</b> Nutzfläche
          </span>
          <span className="flex flex-col md:flex-row gap-2">
            <b>873 m²</b> Grundstück
          </span>
          <span className="flex flex-col md:flex-row gap-2">
            <b>Baujahr</b> 2000
          </span>
        </div>
        <section id="lage" className="container mb-0">
          <h2 className="text-2xl font-bold text-primary">Lage</h2>

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
            <iframe
              className="w-full h-64 md:h-96 lg:col-span-2"
              src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Wilhelm-Schröder-Straße 9 grettstadt&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <p className="text-base text-secondary leading-relaxed mb-paragraph mt-0">
              Dieses wunderbare Zuhause befindet sich in einer äußerst ruhigen
              <b> Spielstraße</b>. Das Nachbargrundstück besteht aus einem
              unbebauten Garten, der zusätzliche Ruhe und Privatsphäre
              gewährleistet. Alle wichtigen Einrichtungen sind bequem zu Fuß
              erreichbar.
              <b> Grundschule</b> und
              <b> Kindergarten</b> sind nur 800 Meter entfernt, und ein
              <b> Supermarkt</b> liegt in lediglich 240 Metern Entfernung.
            </p>
          </div>
        </section>

        <section id="aussenbereich" className="container">
          <h2 className="text-2xl font-bold text-primary">Außenbereich</h2>
          <p className="text-base text-secondary leading-relaxed mb-paragraph">
            Im Außenbereich findet sich eine Terrassen mit Südausrichtung und
            eine weitere Terasse mit Westausrichtung, so dass in jeder
            Jahreszeit der geeignete Ort gewählt werden kann. Die Einfahrt hält
            Platz für bis zu vier Fahrzeuge bereit. Eine Zisterne mit einem
            Volumen von etwa 8 m³ sorgt für eine nachhaltige Gartenbewässerung.
            Ein geräumiges, achteckiges Gartenhaus dient als Mittelpunkt des
            Gartens und als Stauraum für Gartengeräte. Zwei überdachte
            Außenflächen bieten Platz für Holzlagerung, Fahrräder oder
            Kinderfahrzeuge. Ein separater Eingang durch eine Kelleraußentreppe
            rundet das Angebot ab.
          </p>
          <iframe
            className="h-64 md:h-[500px] w-full rounded-lg shadow-md"
            src="https://www.youtube.com/embed/lFS8rPT2K8A?si=uZOCKrCnCFnC1V_H&amp;controls=1&autoplay=1&loop=1&playlist=lFS8rPT2K8A"
            title="Grettstadt Einfamilienhaus - Exposé"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>{" "}
        </section>

        <section id="erdgeschoss" className="container">
          <h2 className="text-2xl font-bold text-primary">Erdgeschoss</h2>
          <p className="text-base text-secondary leading-relaxed mb-paragraph">
            Das Erdgeschoss beeindruckt mit einem 14 m² großen Wintergarten, der
            durch seine Fußbodenheizung auch in der kalten Jahreszeit eine
            gemütliche Atmosphäre bieten kann. Der offene und großzügige Wohn-
            und Essbereich erstreckt sich über 44 m² und ist mit einem Kaminofen
            ausgestattet. Die große Wohn-/Essküche bietet 22 m² Platz und hat
            einen direkten Zugang zur Terrasse. Ein weiteres 12m² großes Zimmer
            kann als Büro oder Kinderzimmer genutzt werden. Das Gästebadezimmer
            im Ergeschoss ist mit Badewanne inklusive Duschwand ausgetattet.
          </p>
          <FloorPlan
            src={egImage}
            alt="Erdgeschoss Grundriss"
            degreeCompass={-40}
          />
          <BulletPoints items={grundrissItems} />
        </section>

        <section id="obergeschoss" className="container">
          <h2 className="text-2xl font-bold text-primary">Obergeschoss</h2>
          <p className="text-base text-secondary leading-relaxed mb-paragraph">
            Im Obergeschoss befinden sich vier geräumige Zimmer, die jeweils
            zwischen 20 und 27 m² groß sind. Das geräumiges Badezimmer mit
            Fußbodenheizung ist mit einer großen Badewanne und einer Dusche
            ausgestattet. Ein weiterer, kleiner, an ein Zimmer angrenzender Raum
            mit Dachliegefenster kann als Abstellraum oder Ankleidezimmer
            genutzt werden.
          </p>
          <FloorPlan
            src={ogImage}
            alt="Obergeschoss Grundriss"
            degreeCompass={-40}
          />
          <BulletPoints items={obergeschossItems} />
        </section>

        <section id="untergeschoss" className="container">
          <h2 className="text-2xl font-bold text-primary">Untergeschoss</h2>
          <p className="text-base text-secondary leading-relaxed mb-paragraph">
            Das Untergeschoss ist betoniert und zusätzlich isoliert. Es ist
            entweder gefliest oder mit Vinylboden ausgestattet und bietet mit
            einer unterkellerten Garage sehr viel Stauraum. Ein großer Hobby-
            oder Partyraum (Keller 3 & 4) mit drei großen und freiliegenden
            Außenfenstern, sehr gut isoliert und beheizbar, steht ebenfalls zur
            Verfügung. Dieser Raum ist mit Wasser- und Starkstromanschluss
            ausgestattet. Ein separates Badezimmer mit Dusche und
            Waschmaschinenanschluss ist ebenfalls vorhanden.
          </p>
          <FloorPlan
            src={kgImage}
            alt="Untergeschoss Grundriss"
            degreeCompass={-40}
          />
          <BulletPoints items={kellerItems} />
        </section>

        <section id="dachboden" className="container">
          <h2 className="text-2xl font-bold text-primary">Dachboden</h2>
          <p className="text-base text-secondary leading-relaxed mb-paragraph">
            Der Dachboden ist zusätzlich isoliert und das Dach ist vollflächig
            mit Pavatex-Unterdeckplatten belegt. Er ist über eine Scherentreppe
            erreichbar und bietet weiteren Stauraum.
          </p>
        </section>

        <section id="energieausweis" className="container">
          <h2 className="text-2xl font-bold text-primary">Energieausweis</h2>
          <p className="text-base text-secondary leading-relaxed mb-paragraph">
            todo
          </p>
          <Image
            src={energieausweisImage}
            alt="Energieausweis"
            className="rounded-lg shadow-md w-full"
          />
        </section>

        <section id="preis" className="container">
          <h2 className="text-2xl font-bold text-primary">Preis</h2>
          <p className="text-base text-secondary leading-relaxed mb-paragraph">
            todo
          </p>
        </section>

        <section id="kontakt" className="container">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

interface BulletPointsProps {
  items: string[];
}

const BulletPoints: React.FC<BulletPointsProps> = ({ items }) => {
  const midPoint = Math.ceil(items.length / 2);
  const firstColumnItems = items.slice(0, midPoint);
  const secondColumnItems = items.slice(midPoint);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <ul className="list-disc list-outside my-0">
        {firstColumnItems.map((item, index) => (
          <li key={index} className="p-2">
            {item}
          </li>
        ))}
      </ul>
      <ul className="list-disc list-outside mt-0">
        {secondColumnItems.map((item, index) => (
          <li key={index} className="p-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
