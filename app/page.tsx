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

      {/* Thangka Information Section */}
      <section className="w-full py-12 bg-gray-50">
        <div className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The Art of Thangka
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">What is Thangka?</h3>
                  <p className="text-gray-700">
                    A thangka is a traditional Buddhist painting on cotton or silk appliqué, 
                    originating from Nepal and Tibet. These sacred artworks typically depict 
                    Buddhist deities, mandalas, or spiritual scenes, framed by brocade textiles.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Sacred Symbolism</h3>
                  <p className="text-gray-700">
                    Every color, gesture, and element in a thangka carries deep spiritual meaning. 
                    Artists follow strict iconographic rules to maintain religious accuracy, with 
                    some paintings taking months to complete using mineral pigments and gold leaf.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Spiritual Functions</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Meditation aids for visualizing deities</li>
                    <li>Teaching tools for Buddhist philosophy</li>
                    <li>Objects of devotion in rituals</li>
                    <li>Historical records of Buddhist lineages</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Historical Journey</h3>
                  <p className="text-gray-700">
                    Introduced to Tibet by Nepalese Princess Bhrikuti in the 7th century, 
                    thangkas evolved through cultural exchanges while maintaining their 
                    spiritual essence. Their scroll format made them ideal for nomadic monks 
                    spreading Dharma across the Himalayas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

              
      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">ST Store</h3>
              <p className="text-gray-400 text-sm mt-2">
                Preserving traditional spiritual thangka
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/">Home</Link>
              <Link href="/products" className="text-gray-400 hover:text-white transition">
                Products
              </Link>
              <Link href="/checkout" className="text-gray-400 hover:text-white transition">
                Checkout
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition">
                Contact
              </Link>
              <div className="hidden md:flex space-x-6">
          
          
        </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} ST Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}