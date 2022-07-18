import { Container } from '@mui/material';
import { ReactNode } from 'react';
import Navbar from '../Navbar';

type BasicLayoutProps = {
  children: ReactNode;
};

export default function index({ children }: BasicLayoutProps) {
  return (
    <>
      <Navbar />
      <Container
        component="main"
        sx={{
          p: '4rem',
        }}
      >
        {children}
      </Container>
    </>
  );
}
