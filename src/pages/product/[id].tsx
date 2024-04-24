import { useRouter } from "next/router"
import { ImageContainer, ProcutContainer, ProductDetails } from "@/styles/pages/product"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProcutContainer>
      <ImageContainer>

      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta 1</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum repellat voluptates impedit ipsum dolore eius reprehenderit sapiente similique qui expedita. A enim repellendus accusamus sequi cum porro eum, at laboriosam.</p>
        <button>Comprar Agora</button>
      </ProductDetails>
    </ProcutContainer>

  )
}