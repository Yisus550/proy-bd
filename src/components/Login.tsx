import type { Dispatch, FormEvent } from "react";
import styled from "styled-components";

type Props = {
  setIsLogged: Dispatch<React.SetStateAction<boolean>>;
};

const Header = styled.header`
  width: calc(100% - 200px);
  height: 100px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #f59e00;
  padding-left: 200px;

  & p {
    font-size: 40px;
    padding-left: 20px;
  }

  & svg {
    margin-top: 20px;
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 20px;
    gap: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background-color: #f1c3a9;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > input[type="submit"] {
    margin-top: 15px;
  }
`;

const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 15px;
`;

export default function Login({ setIsLogged }: Props) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLogged(true);
  }
  return (
    <>
      <Container>
        <Header>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="#2A9D8F" stroke-width="1.5">
              <circle cx="9" cy="9" r="2" />
              <path d="M13 15c0 1.105 0 2-4 2s-4-.895-4-2s1.79-2 4-2s4 .895 4 2Z" />
              <path d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z" />
              <path stroke-linecap="round" d="M19 12h-4m4-3h-5m5 6h-3" />
            </g>
          </svg>
          <p>Login</p>
        </Header>
        <Form onSubmit={handleSubmit}>
          <UserDiv>
            <label htmlFor="usuario">Usuario</label>
            <input type="text" id="usuario" />
            <label htmlFor="contra">Contraseña</label>
            <input type="text" id="contra" />
            <span>Usuario y/o contraseña incorrectos</span>
          </UserDiv>
          <input type="submit" value="Ingresar" />
        </Form>
      </Container>
    </>
  );
}
