import { stripe } from "@/libs/stripe";
import { ImageContainer } from "@/styles/pages/product";
import { SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Stripe from "stripe";
import Image from "next/image";

interface SuccessProps {
  costumerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

export default function Success({ costumerName, product}: SuccessProps) {
    return (
      <SuccessContainer>
        <h1>Compra Efetuada</h1>

        <ImageContainer>
          <Image src={product.imageUrl} width={120} height={110} alt='' /> 
        </ImageContainer>

        <p>
          Uhuul <strong>{costumerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.
        </p>

        <Link href='/'>
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    )
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const costumerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product

  return{
    props: {
      costumerName,
      product: {
        name: product.name,
        imageUrl: product.images[0]
      }
    }
  }
};