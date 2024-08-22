import Image from "next/image";
import VideoPlayer from "./components/video-player/video-player";
import FloorPlan from "./components/floor-plan/floor-plan";
import sampleImage from "./images/header.jpg";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-between p-8 space-y-16">
        <section id="lage" className="container">
          <h2 className="text-2xl font-bold text-primary">Lage</h2>
          <p className="text-base text-secondary leading-relaxed mb-paragraph">
            Dieses wunderbare Zuhause befindet sich in einer äußerst ruhigen
            Spielstraße. Das Nachbargrundstück besteht aus einem unbebauten
            Garten, der zusätzliche Ruhe und Privatsphäre gewährleistet. Alle
            wichtigen Einrichtungen sind bequem zu Fuß erreichbar. Grundschule
            und Kindergarten sind nur 800 Meter entfernt, und ein Supermarkt
            liegt in lediglich 240 Metern Entfernung.
          </p>
          <Image
            src={sampleImage}
            alt="Lage Bild"
            className="rounded-lg shadow-md"
          />
        </section>

        <section id="eckdaten" className="container">
          <h2 className="text-2xl font-bold text-primary">Eckdaten</h2>
          <p className="text-base text-secondary leading-relaxed mb-paragraph">
            Das Haus steht auf einem Grundstück von 873 m² und bietet eine
            Wohnfläche von 195 m² sowie eine zusätzliche Nutzfläche von 165 m².
            Es wurde im Jahr 2000 erbaut und verfügt über eine zentrale
            Ölheizung.
          </p>
          <VideoPlayer src="/videos/eckdaten.mp4" alt="Eckdaten Video" />
        </section>

        <section id="erdgeschoss" className="container">
          <h2 className="text-2xl font-bold text-primary">Erdgeschoss</h2>
          <p className="text-base text-secondary leading-relaxed mb-paragraph">
            Das Erdgeschoss beeindruckt mit einem 14 m² großen Wintergarten, der
            durch seine Fußbodenheizung auch in der kalten Jahreszeit eine
            gemütliche Atmosphäre bietet. Der offene und großzügige Wohn- und
            Essbereich erstreckt sich über 44 m² und ist mit einem
            zertifizierten Kaminofen ausgestattet. Die große Wohn-/Essküche
            bietet 22 m² Platz und hat einen direkten Zugang zur Terrasse. Ein
            12 m² großes Büro steht ebenfalls zur Verfügung. Mit Ausnahme des
            Büros ist das gesamte Erdgeschoss mit Granitboden und
            Fußbodenheizung ausgestattet. Ein direkter Zugang von der isolierten
            Doppelgarage ins Haus sorgt dafür, dass man bei schlechtem Wetter
            trocken ins Haus gelangt. Die motorbetriebenen Garagentore und eine
            geflieste Garage mit Waschbecken bieten zusätzlichen Komfort. Alle
            Fenster sind mit Außenrollos versehen.
          </p>
          <FloorPlan
            src="/floorplans/erdgeschoss.png"
            alt="Erdgeschoss Grundriss"
          />
        </section>

        <section id="obergeschoss" className="container">
          <h2 className="text-2xl font-bold text-primary">Obergeschoss</h2>
          <p className="text-base text-secondary leading-relaxed mb-paragraph">
            Im Obergeschoss befinden sich vier geräumige Schlafzimmer, die
            jeweils zwischen 20 und 27 m² groß sind. Ein besonderes Highlight
            ist ein Schlafzimmer, das mit Starkstrom-, Wasser- und
            Abwasseranschlüssen ausgestattet ist und somit eine
            Küchenvorbereitung bietet – ideal für den Umbau in zwei unabhängige
            Einheiten. Ein Abstellraum mit Dachliegefenster und Außenrollo
            bietet zusätzlichen Stauraum. Alle Fenster im Obergeschoss sind
            ebenfalls mit Außenrollos versehen.
          </p>
          <FloorPlan
            src="/floorplans/obergeschoss.png"
            alt="Obergeschoss Grundriss"
          />
        </section>

        <section id="untergeschoss" className="container">
          <h2 className="text-2xl font-bold text-primary">Untergeschoss</h2>
          <p className="text-base text-secondary leading-relaxed mb-paragraph">
            Das Untergeschoss ist betoniert und zusätzlich isoliert. Es ist
            komplett gefliest oder mit Vinylboden ausgestattet und bietet mit
            einer unterkellerten Garage viel Stauraum. Ein großer Hobby- oder
            Partyraum mit drei großen und freiliegenden Außenfenstern mit
            Rollos, sehr gut isoliert und beheizbar, steht ebenfalls zur
            Verfügung. Dieser Raum ist mit Wasser- und Starkstromanschluss
            ausgestattet. Ein separates Badezimmer mit Waschmaschinenanschluss
            ist ebenfalls vorhanden.
          </p>
          <FloorPlan
            src="/floorplans/untergeschoss.png"
            alt="Untergeschoss Grundriss"
          />
        </section>

        <section id="dachboden" className="container">
          <h2 className="text-2xl font-bold text-primary">Dachboden</h2>
          <p className="text-base text-secondary leading-relaxed mb-paragraph">
            Der Dachboden ist zusätzlich isoliert und das Dach ist vollflächig
            mit Pavatex-Unterdeckplatten belegt.
          </p>
          <Image
            src={sampleImage}
            alt="Dachboden Bild"
            className="rounded-lg shadow-md"
          />
        </section>

        <section id="aussenbereich" className="container">
          <h2 className="text-2xl font-bold text-primary">Außenbereich</h2>
          <p className="text-base text-secondary leading-relaxed mb-paragraph">
            Im Außenbereich sind zwei Terrassen (einmal Südausrichtung und
            einmal Westausrichtung), so dass in jeder Jahreszeit der geeignete
            Ort gewählt werden kann. Die Einfahrt hält Platz für bis zu vier
            Fahrzeuge bereit. Eine Zisterne mit einem Volumen von etwa 8 m³
            sorgt für eine nachhaltige Gartenbewässerung. Ein geräumiges,
            achteckiges, individuell angefertigtes Gartenhaus dient als
            Mittelpunkt des Gartens und als Stauraum für Gartengeräte. Zwei
            Terrassen und zwei überdachte Außenflächen bieten Platz für
            Holzlagerung, Fahrräder oder Kinderfahrzeuge. Ein separater Eingang
            durch eine Kelleraußentreppe rundet das Angebot ab.
          </p>
          <Image
            src={sampleImage}
            alt="Außenbereich Bild"
            className="rounded-lg shadow-md"
          />
          <VideoPlayer
            src="/videos/aussenbereich.mp4"
            alt="Außenbereich Video"
          />
        </section>

        <section id="kontakt" className="container">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
