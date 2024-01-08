import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Section } from "../../components/Section/Section";
import { Container } from "../../components/Container/Container";

export const SharedLayout = () => {
  return (
    <>
      {" "}
      <Header />
      <Section>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <main>
              <Outlet />
            </main>
          </Suspense>
        </Container>
      </Section>
    </>
  );
};
