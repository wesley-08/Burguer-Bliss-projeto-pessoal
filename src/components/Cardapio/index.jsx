export default function Cardapio(props) {
    return (
      <div className="tudo">
        <div>
          <img src="./logo (2).png" alt="Logo do cardápio" className="logo" />
        </div>
        <div className="h1">
          <h1>Cardápio</h1>
        </div>
        <div className="h2">
          <h2>Hambúrguer</h2>
        </div>
        <table className="menu-table">
          <tbody>
            <tr>
              <th>Laçador</th>
              <td className="dots"></td>
              <th>R$ 24,90</th>
            </tr>
            <tr>
              <th>Fritz</th>
              <td className="dots"></td>
              <th>R$ 24,90</th>
            </tr>
            <tr>
              <th>Gringo</th>
              <td className="dots"></td>
              <th>R$ 29,90</th>
            </tr>
            <tr>
            <th>Anitta</th>
            <th className="dots"></th>
            <th>R$29,90</th>
           </tr>

           <tr>
            <th>Pampa burguer</th>
            <th className="dots"></th>
            <th>R$ 33,90</th>
           </tr>
           <tr>
            <th>Chimango</th>
            <th className="dots"></th>
            <th>R$ 25,90</th>
           </tr>
           <tr>
            <th>Piratini</th>
            <th className="dots"></th>
            <th>R$ 35,90</th>
           </tr>
           <tr>
            <th>Maragato</th>
            <th className="dots"></th>
            <th>R$ 25,90</th>
           </tr>
           <tr>
            <th>Garibaldi</th>
            <th className="dots"></th>
            <th>R$ 24,90</th>
           </tr>
           <tr>
            <th>Campereada</th>
            <th className="dots"></th>
            <th>R$ 29,90</th>
           </tr>
           <tr>
            <th>La Plata</th>
            <th className="dots"></th>
            <th>R$ 29,90</th>
           </tr>
           <tr>
            <th>Macanudo</th>
            <th className="dots"></th>
            <th>R$ 29,90</th>
           </tr>
           <tr>
            <th>Lobisomem do arvoredo</th>
            <th className="dots"></th>
            <th>R$ 29,90</th>
           </tr>
           <tr>
            <th>Borghettino</th>
            <th className="dots"></th>
            <th>R$ 29,90</th>
           </tr>
           <tr>
            <th>Charrua</th>
            <th className="dots"></th>
            <th>R$ 29,90</th>
           </tr>
           <tr>
            <th>Galo veio</th>
            <th className="dots"></th>
            <th>R$ 29,90</th>
           </tr>
          </tbody>
        </table>
        <div className="h2">
          <h2>Bebidas</h2>
        </div>
        <table className="menu-table">
          <tbody>
            <tr>
              <th>Refrigerante (Lata)</th>
              <td className="dots"></td>
              <th>R$ 4,00</th>
            </tr>
            <tr>
              <th>Água</th>
              <td className="dots"></td>
              <th>R$ 2,50</th>
            </tr>
            <tr>
            <th>Refrigerante 2L</th>
            <th className="dots"></th>
            <th>R$10,00</th>
           </tr>
           <tr>
            <th>Suco Natural</th>
            <th className="dots"></th>
            <th>R$ 7,99</th>
           </tr>
           <tr></tr>
          </tbody>
        </table>
        <div className="h2">
          <h2>Vitaminas</h2>
        </div>
        <table className="menu-table">
          <tbody>
            <tr>
              <th>Goiaba</th>
              <td className="dots"></td>
              <th>R$ 10,00</th>
            </tr>
            <tr>
              <th>Açaí</th>
              <td className="dots"></td>
              <th>R$ 11,00</th>
            </tr>
            <tr>
            <th>maracuja</th>
            <th className="dots"></th>
            <th>R$ 10,00</th>
           </tr>
           <tr>
            <th>abacate</th>
            <th className="dots"></th>
            <th>R$ 10,00</th>
           </tr>
           <tr>
            <th>açai com banana</th>
            <th className="dots"></th>
            <th>R$11,00</th>
           </tr>
           <tr>
            <th>manga</th>
            <th className="dots"></th>
            <th>R$ 10,00</th>
           </tr>
           <tr>
            <th>acerola</th>
            <th className="dots"></th>
            <th>R$ 10,00</th>
           </tr>
          </tbody>
        </table>
      </div>
    );
  }