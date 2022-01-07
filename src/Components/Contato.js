import React from 'react';
import styles from './Contato.module.css';
import img from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animacaoPaginaTotal`}>
      <Head title="Desafio | Contato" description="Entre em contato." />
      <img src={img} alt="Máquina de datilografar" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.listaContatoDados}>
          <li>samuelaoliveiraramos@gmail.com</li>
          <li>(34)9-9710-0399</li>
          <li>Rua João Balbino, nº1941 - Uberlândia, MG.</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
