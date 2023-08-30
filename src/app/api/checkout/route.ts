import { NextRequest, NextResponse } from "next/server";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  brand: string;
  category: string;
  thumbnail: string;
  quantity: number;
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest) {
  const { items, email } = await request.json();
  const modifiedItems = items.map((item: ProductType) => ({
    quantity: item.quantity,
    price_data: {
      currency: "inr",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        description: item.description,
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "IN"],
    },
    line_items: modifiedItems,
    mode: "payment",
    success_url: `${process.env.NEXTAUTH_URL}/success`,
    cancel_url: `${process.env.NEXTAUTH_URL}/cart`,
    metadata: {
      email,
    },
  });
  return NextResponse.json({
    id: session.id,
  });
}
