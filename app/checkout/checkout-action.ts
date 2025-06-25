// "use server";

// import { stripe } from "@/lib/stripe";
// import { CartItem } from "@/store/cart-store";
// import { redirect } from "next/navigation";

// export const checkoutAction = async (formData: FormData): Promise<void> => {
//   const itemsJson = formData.get("items") as string;
//   const items = JSON.parse(itemsJson);
//   const line_items = items.map((item: CartItem) => ({
//     price_data: {
//       currency: "cad",
//       product_data: { name: item.name },
//       unit_amount: item.price,
//     },
//     quantity: item.quantity,
//   }));

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items,
//     mode: "payment",
//     success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
//     cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
//   });

//   redirect(session.url!);
// };
"use server";

import { stripe } from "@/lib/stripe";
import { CartItem } from "@/store/cart-store";
import { redirect } from "next/navigation";

export const checkoutAction = async (formData: FormData): Promise<void> => {
  const itemsJson = formData.get("items") as string;
  const items = JSON.parse(itemsJson);

  const line_items = items.map((item: CartItem) => ({
    price_data: {
      currency: "cad",
      product_data: { 
        name: item.name,
        images: [item.imageUrl], // Add if you have product images
      },
      unit_amount: Math.round(item.price * 100), // Convert to cents
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: "https://ecommerce33-rfcvjqrzi-tenzin-norgye-lamas-projects.vercel.app/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://ecommerce33-rfcvjqrzi-tenzin-norgye-lamas-projects.vercel.app/cart",
      metadata: {
        cartItems: itemsJson, // Store cart items for webhook processing
      },
      shipping_address_collection: { // Add if shipping is required
        allowed_countries: ["US", "CA"],
      },
    });

    redirect(session.url!);
  } catch (err) {
    console.error("Stripe checkout error:", err);
    redirect("https://ecommerce33-rfcvjqrzi-tenzin-norgye-lamas-projects.vercel.app/error?message=payment_failed");
  }
};
