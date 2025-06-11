import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";
import { ProductList } from "@/components/product-list";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome to My Ecommerce
            </h2>
            <p className="text-neutral-600">
              Discover the latest products at the best prices.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >
                Browse All Products
              </Link>
            </Button>
          </div>
          <Image
            alt="Hero Image"
            src={products.data[0].images[0]}
            className="rounded"
            width={450}
            height={450}
          />
        </div>
      </section>
      <section className="py-8">
        <Carousel products={products.data} />
      </section>
      <section>
        <div className="pb-8">
          <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
            All Products
          </h1>
          <ProductList products={products.data} />
        </div>
      </section>
      <section>
        <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 text-sm mb-6">
            Have questions? We&apos;re here to help.
          </p>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="How can we help?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Or reach us directly at{" "}
              <span className="text-blue-600">support@example.com</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
