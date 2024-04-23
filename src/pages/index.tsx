import { styled } from "@/styles";
import Image from "next/image";
import { HomeContainer, Product } from "@/styles/pages/home";

import camiseta1 from '../assets/camisa1.png';
import camiseta2 from '../assets/camisa2.png';
import camiseta3 from '../assets/camisa3.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image  src={camiseta1} width={520} height={480} alt='' />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image  src={camiseta1} width={520} height={480} alt='' />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
};