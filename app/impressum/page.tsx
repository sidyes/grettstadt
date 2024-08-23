import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export default function Impressum() {
  return (
    <>
      <Header showImage={false} />
      <main className="flex flex-col justify-between p-4 md:p-8 space-y-8 md:space-y-16 mt-36">
        <section className="container">
          <h1>Impressum</h1>

          <p>
            Stefan Herpich
            <br />
            Zimmermannsgasse 12
            <br />
            91058 Erlangen
          </p>

          <h2>Kontakt</h2>
          <p>E-Mail: s10h@web.de</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
