import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background-color: #fa5b25;
`;

const Header = styled.header`
  width: calc(100% - 200px);
  height: 100px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #f1c3a9;
  padding-left: 200px;

  & p {
    font-size: 40px;
    padding-left: 20px;
  }

  & svg {
    transform: translateY(-10px);
  }

  @media (max-width: 1359px) {
    width: 100%;
    padding-left: 20px;
  }
`;

const ComprasContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  column-gap: 170px;
`;

const Compra = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 700px) {
    & > input {
      margin-bottom: 20px;
    }
  }
`;

const Lista = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BtnSection = styled.section`
  display: flex;
  gap: 20px;
  transform: translateX(200px);

  @media (max-width: 767px) {
    transform: none;
  }
`;

const ListaUL = styled.ul`
  min-height: 260px;
  width: 240px;
  background-color: #f1c3a9;
  border-radius: 10px;
  padding: 10px;
`;

export default function Compras() {
  return (
    <Container>
      <Header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 26 26"
        >
          <path
            fill="#2A9D8F"
            d="M2.094 4.094a1.02 1.02 0 0 0-.719.281a.998.998 0 0 0 0 1.406l6.844 6.844a.947.947 0 0 0 .687.281c.253 0 .526-.088.719-.281a.997.997 0 0 0 0-1.406L2.781 4.375a.95.95 0 0 0-.687-.281m21.812 0a.95.95 0 0 0-.687.281l-6.844 6.844a.997.997 0 0 0 0 1.406c.193.193.466.281.719.281a.947.947 0 0 0 .687-.281l6.844-6.844a.998.998 0 0 0 0-1.406a1.02 1.02 0 0 0-.719-.281M1 11c-.551 0-1 .449-1 1v3c0 .551.449 1 1 1h1v1c0 .089 2 8 2 8c.297.531.547 1 1 1h16c.551 0 .766-.438 1-1c0 0 2-7.911 2-8v-1h1c.551 0 1-.449 1-1v-3c0-.551-.449-1-1-1h-4.094l-2.562 2.563c-.39.39-.918.624-1.469.624c-.55 0-1.047-.233-1.438-.624a2.043 2.043 0 0 1-.28-2.563h-4.313a2.043 2.043 0 0 1-.281 2.563c-.39.39-.888.624-1.438.624a2.088 2.088 0 0 1-1.469-.624L5.094 11zm8 5c.551 0 1 .449 1 1v6c0 .551-.449 1-1 1c-.551 0-1-.449-1-1v-6c0-.551.449-1 1-1m4 0c.551 0 1 .449 1 1v6c0 .551-.449 1-1 1c-.551 0-1-.449-1-1v-6c0-.551.449-1 1-1m4 0c.551 0 1 .449 1 1v6c0 .551-.449 1-1 1c-.551 0-1-.449-1-1v-6c0-.551.449-1 1-1"
          />
        </svg>
        <p>COMPRAS</p>
      </Header>

      <ComprasContent>
        <Compra>
          <>
            <p>Descripcion de la compra</p>
            <textarea id="descripcion" />
          </>
          <>
            <p>Monto de la compra</p>
            <input type="number" id="monto" />
          </>
        </Compra>

        <Lista>
          <p>Lista de compras</p>
          <div>
            <ListaUL>
              <li>Aja</li>
            </ListaUL>
          </div>
        </Lista>
      </ComprasContent>

      <div className="footer">
        <BtnSection>
          <input type="button" value="Agregar" />
          <input type="button" value="Actualizar" />
          <input type="button" value="Reset" />
        </BtnSection>
      </div>
    </Container>
  );
}
