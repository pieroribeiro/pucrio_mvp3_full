import React from 'react';
import { Container, Typography } from '@mui/material';

export default function PageHome() {
  return (
    <>
      <section>
        <Container>
          <Typography variant="h2" gutterBottom>
            Bem-vindo à Página Inicial
          </Typography>
          <Typography variant="body1" paragraph>
            Esta é uma página inicial fictícia com links para diferentes seções.
          </Typography>
        </Container>
      </section>

      <section>
        <Container>
          <Typography variant="h4" gutterBottom>
            Sobre
          </Typography>
          <Typography variant="body1" paragraph>
            Esta é a seção sobre a página inicial.
          </Typography>
          <Typography variant="body1" paragraph>
            Aqui você pode adicionar mais informações sobre o seu site ou aplicativo.
          </Typography>
        </Container>
      </section>
    </>
  )
}