import React from "react";

export default function InfosSection() {
  return (
    <section id="infos" className="flex items-center p-8 bg-red-700">
      <div className="flex items-center justify-center flex-1 m-4">
        <div className="p-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14796.98168215833!2d-47.8948708!3d-22.0019055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b871a2a7372dbd%3A0x8cb00b9c3769da9d!2sRep%C3%BAblica%20OUR!5e0!3m2!1spt-BR!2sbr!4v1705950430903!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="flex-1 m-16 text-white">
        <h2 className="text-4xl pb-5">Infos</h2>
        <div className="text-xl">
          <ul>
            <li>5 Quartos 4 banheiros</li>
            <li>Sala de estudos e acervo de livros</li>
            <li>- Compras comuns e mercado inclusos </li>
            <li>Gastos aproximadamente de R$650,00</li>
            <li>- Mesa de sinuca</li>
            <li>Faxineira Semanalmente</li>
            <li>Duas dogs Lola e Mia</li>
            <li>Televisão 54" e Wi-fi 300Mb</li>
            <li>Playstation 4 com + de 200 jogos</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
