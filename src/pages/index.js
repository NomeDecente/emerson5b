import { Container, Row } from "react-bootstrap";
import Cards from "./components/cards";

export async function getStaticProps() {
  const res = await fetch('https://emerson5b.vercel.app/api/noticias/apinoticias');
  const repo = await res.json();
  return { props: { noticias: repo } };
}

export default function Home({ noticias }) {
  return (
    <Container>
      <Row xs={1} md={3}>
        Main index
        {Array.isArray(noticias)
          ? noticias.map(noticia => (
              <Cards
                key={noticia.idnoticia}
                idnoticia={noticia.idnoticia}
                conteudonoticia={noticia.conteudonoticia}
                titulonoticia={noticia.titulonoticia}
                datahoracadastro={noticia.datahoracadastro}
                tiponoticia={noticia.tiponoticia}
              />
            ))
          : "não"}
      </Row>
    </Container>
  );
}