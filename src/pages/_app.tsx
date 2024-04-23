import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/global";
import Image from "next/image";

import { Container, Header } from "@/styles/pages/app";
import logoImg from '../assets/Logo-IgniteShop.svg';

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" width={130.74} height={52} />
      </Header>

      <Component {...pageProps} />
    </Container>
)}
