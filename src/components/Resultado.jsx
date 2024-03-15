import styled from "@emotion/styled";

const ResultadoContenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Img = styled.img`
    width: 120px;
`;

const Resultado = ({ cotizacion }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    cotizacion;
  return (
    <ResultadoContenedor>
      <Img
        src={`https://www.cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"
      ></Img>
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El precio mas alto del dia: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El precio mas bajo del dia: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Ultima Actualizacion: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </ResultadoContenedor>
  );
};

export default Resultado;
