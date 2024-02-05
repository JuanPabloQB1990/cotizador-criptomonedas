import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = ({setMonedas}) => {
  const [criptos, setCriptos] = useState([]);
  const [messageError, setMessageError] = useState(false);

  const [SelectMonedas, moneda] = useSelectMonedas("Elige tu moneda", monedas);
  const [SelectCriptoMonedas, criptoMoneda] = useSelectMonedas(
    "Elige tu CriptoMoneda",
    criptos
  );

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit10&tsym=USD";
      const respuesta = await fetch(url);
      const data = await respuesta.json();

      const arrayCriptos = data.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });

      setCriptos(arrayCriptos);
    };

    consultarApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(moneda);
    console.log(criptoMoneda);
    if ([moneda, criptoMoneda].includes("")) {
      setMessageError(true);
      return;
    }

    setMessageError(false)
    setMonedas({
        moneda,
        criptoMoneda
    })
  };

  return (
    <>
    {messageError && <Error>Todos los Campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptoMonedas />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Formulario;
