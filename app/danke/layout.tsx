import "../globals.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";


export default function DankeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header showImage={false} />
      {children}
      <Footer />
    </>
  );
}
