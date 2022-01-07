import React from 'react';
import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';
import Head from './Head';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function facthProduto(url) {
      try {
        setCarregando(true);
        const r = await fetch(url);
        const j = await r.json();
        setProduto(j);
      } catch (erro) {
        setError("Não conseguimos nos conectar com o servidor :'(");
      } finally {
        setCarregando(false);
      }
    }
    facthProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (carregando) return <div className="carregandoLoading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;

  return (
    <section className={`${styles.produto} animacaoPaginaTotal`}>
      <Head
        title={`Desafio | ${produto.nome}`}
        description={`Desafio | ${produto.nome}`}
      />
      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.precoProduto}>{`R$ ${produto.preco}`}</span>
        <p className={styles.descricaoProduto}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
