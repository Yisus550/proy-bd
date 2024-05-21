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

const UsuariosConteiner = styled.main`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 800px) {
    gap: 10px 40px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const SectionOne = styled.section`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  text-align: end;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: start;
  }
`;

const SectionTow = styled.section`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  text-align: end;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: start;
  }
`;

const BtnSection = styled.section`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 0 200px;

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .status-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    gap: 20px;
  }

  @media (max-width: 700px) {
    transform: none;
  }
`;

export default function RegistroUsuarios() {
  return (
    <Container>
      <Header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="51.2"
          viewBox="0 0 640 512"
        >
          <path
            fill="#2A9D8F"
            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9l1.2-11.1l7.9-7.9l77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5m45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8l137.9-137.9l-71.7-71.7zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8l-4.1 4.1l71.8 71.7l41.8-41.8c9.3-9.4 9.3-24.5 0-33.9"
          />
        </svg>
        <p>USUARIOS</p>
      </Header>

      <UsuariosConteiner>
        <SectionOne>
          <label htmlFor="clave">Clave:</label>
          <input type="number" id="clave" />

          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" />

          <label htmlFor="apellidoPaterno">Apellido Paterno:</label>
          <input type="text" id="apellidoPaterno" />

          <label htmlFor="apellidoMaterno">Apellido Materno:</label>
          <input type="text" id="apellidoMaterno" />

          <label htmlFor="correo">Correo:</label>
          <input type="email" id="correo" />

          <label htmlFor="usuario">Usuario:</label>
          <input type="text" id="usuario" />

          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" />
        </SectionOne>
        <SectionTow>
          <label htmlFor="fecha">Fecha de registro:</label>
          <input type="date" id="fecha" />

          <label htmlFor="perfil">Pefil:</label>
          <input type="text" id="perfil" />

          <label htmlFor="estatus">Estatus:</label>
          <input type="text" id="estatus" />

          <label htmlFor="telefono">Telefono:</label>
          <input type="tel" id="telefono" />
        </SectionTow>
      </UsuariosConteiner>

      <div className="footer">
        <BtnSection>
          <div className="status-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="84"
            viewBox="0 0 24 24"
          >
            <path
              fill="#2A9D8F"
              d="m3 19l4.5-7L3 5h12q.5 0 .938.225t.712.625L21 12l-4.35 6.15q-.275.4-.712.625T15 19z"
            />
          </svg>
          <p>Estatus del cliente</p>
          </div>
          <div className="btn-container">
            <input type="button" value="Guardar" />
            <input type="button" value="Actualizar" />
          </div>
        </BtnSection>
      </div>
    </Container>
  );
}
