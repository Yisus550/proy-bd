import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background-color: #f59e00;
  padding-bottom: 40px;
`;

const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: #f1c3a9;
  padding: 0 40px;
  box-sizing: border-box;

  .logo-ventas {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;
  }

  & p {
    font-size: 40px;
  }

  @media (max-width: 1359px) {
    width: 100%;
    padding-left: 20px;
  }
`;

const BtnHeader = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;

const VentasConteiner = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;

  & p {
    width: 200px;
  }

  @media (max-width: 800px) {
    gap: 10px 40px;
  }

  @media (max-width: 700px) {
    /* grid-template-columns: 1fr; */
  }
`;

const Section = styled.section`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  .info {
    height: 200px;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .cantidad-num {
    transform: translateX(260px);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const BtnSection = styled.section`
  display: flex;
  gap: 20px;
  transform: translateX(200px);

  @media (max-width: 767px) {
    transform: none;
  }
`;

export default function Ventas() {
  return (
    <>
      <Container>
        <Header>
          <BtnHeader>
            <input type="button" value="Tacos" id="btn-tacos"/>
            <input type="button" value="Bebidas" id="btn-bebidas" />
          </BtnHeader>
          <div className="logo-ventas">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 28 28"
            >
              <path
                fill="#2A9D8F"
                d="M14 2a.75.75 0 0 1 .75.75V4h3.75V2.75a.75.75 0 0 1 1.5 0V4h.75A2.25 2.25 0 0 1 23 6.25v12.246h-4.754a2.25 2.25 0 0 0-2.25 2.25V25.5H6.75a2.25 2.25 0 0 1-2.25-2.25v-17A2.25 2.25 0 0 1 6.75 4H8V2.75a.75.75 0 0 1 1.5 0V4h3.75V2.75A.75.75 0 0 1 14 2m-6 8.25c0 .414.336.75.75.75h10a.75.75 0 0 0 0-1.5h-10a.75.75 0 0 0-.75.75m0 4.5c0 .414.336.75.75.75h10a.75.75 0 0 0 0-1.5h-10a.75.75 0 0 0-.75.75m0 4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75m9.496 5.81l5.065-5.064h-4.315a.75.75 0 0 0-.75.75z"
              />
            </svg>
            <p>MENU DE VENTAS</p>
          </div>
        </Header>
        <VentasConteiner>
          <Section>
            <article>
              <h1>Taco de barbacoa</h1>
              <div className="info">
                <img src="../../src/assets/BARBACOA-modified.png" alt=". ." />
                <p>
                  TORTILLA DE MAIZ CON CARNE DE RES, GUISADA EN SALSA DE LA
                  CASA. SE AGREGA CILANTRO Y CEBOLLA.
                </p>
              </div>
              <input
                className="cantidad-num"
                type="number"
                id="cantidad-barbacoa"
                value="0"
              />
            </article>

            <article>
              <h1>Taco de pastor</h1>
              <div className="info">
                <img src="../../src/assets/PASTOR-modified.png" alt=". ." />
                <p>
                  TRONPO HECHO CON BISTEC DE PUERCO Y ADOBO. SE LE AÑADE PIÑA Y
                  CILANTRO.
                </p>
              </div>
              <input
                className="cantidad-num"
                type="number"
                id="cantidad-pastor"
                value="0"
              />
            </article>

            <article>
              <h1>Taco de cabeza</h1>
              <div className="info">
                <img src="../../src/assets/CARNITAS-modified.png" alt=". ." />
                <p>
                  TORTILLA DE MAIZ CON CARNE DE RES, COCIDA AL VAPOR, SE AGREGA
                  CILANTRO Y CEBOLLA.
                </p>
              </div>
              <input
                className="cantidad-num"
                type="number"
                id="cantidad-cabeza"
                value="0"
              />
            </article>

            <article>
              <h1>Taco de carnitas</h1>
              <div className="info">
                <img src="../../src/assets/CANASTA-modified.png" alt=". ." />
                <p>
                  PUEDEN SER DE SUADERO, CUERITO, TRIPA. SON LOS MAS PEDIDOS DEL
                  LOCAL.
                </p>
              </div>
              <input
                className="cantidad-num"
                type="number"
                id="cantidad-carnitas"
                value="0"
              />
            </article>

            <article>
              <h1>Taco dorados</h1>
              <div className="info">
                <img src="../../src/assets/DORADOS-modified.png" alt=". ." />
                <p>
                  TORTILLA GRANDE FRITA, RELLENA DE RES O POLLO. SE ACOMPAÑAN
                  CON LECHUGA, QUESO, CREMA Y SALSA.
                </p>
              </div>
              <input
                className="cantidad-num"
                type="number"
                id="cantidad-dorados"
                value="0"
              />
            </article>

            <article>
              <h1>Burritos</h1>
              <div className="info">
                <img src="../../src/assets/BURRITOS-modified.png" alt=". ." />
                <p>
                  TRADICIONALMENTE SON DE CHICHARRON Y FRIOLES. SE PUEDEN PEDIR
                  CON OTRA CARNE.
                </p>
              </div>
              <input
                className="cantidad-num"
                type="number"
                id="cantidad-burritos"
                value="0"
              />
            </article>
          </Section>
        </VentasConteiner>
      </Container>

      <footer>
        <BtnSection>
          <input type="button" value="Agregar" />
        </BtnSection>
      </footer>
    </>
  );
}
