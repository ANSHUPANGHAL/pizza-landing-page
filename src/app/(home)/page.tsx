'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard, { Product } from './components/product-card';
import { motion } from 'framer-motion';

const products: Product[] = [
    {
        id: '1',
        name: 'Margarita Pizza',
        description: 'This is a very tasty pizza',
        image: '/pizza-main.png',
        price: 500,
    },
    {
        id: '2',
        name: 'Margarita Pizza',
        description: 'This is a very tasty pizza',
        image: '/pizza-main.png',
        price: 500,
    },
    {
        id: '3',
        name: 'Margarita Pizza',
        description: 'This is a very tasty pizza',
        image: '/pizza-main.png',
        price: 500,
    },
    {
        id: '4',
        name: 'Margarita Pizza',
        description: 'This is a very tasty pizza',
        image: '/pizza-main.png',
        price: 500,
    },
    {
        id: '5',
        name: 'Margarita Pizza',
        description: 'This is a very tasty pizza',
        image: '/pizza-main.png',
        price: 500,
    },
];

export default function Home() {
    return (
        <>
            {/* Hero Section with Animations */}
            <section className="bg-white">
                <div className="container flex flex-col md:flex-row items-center justify-between py-24 px-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-6xl md:text-7xl font-black font-sans leading-tight"
                        >
                            Super Delicious Pizza in <br />
                            <span className="text-primary">Only 45 Minutes!</span>
                        </motion.h1>
                        <p className="text-2xl mt-6 max-w-lg leading-snug">
                            Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
                        </p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Button className="mt-8 text-lg rounded-full py-6 px-8 font-bold bg-orange-500 hover:bg-orange-600 transition-all duration-300">
                                Get your pizza now
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Pizza Image Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            alt="pizza-main"
                            src={'/pizza-main.png'}
                            width={400}
                            height={400}
                            className="max-w-full"
                            priority
                        />
                    </motion.div>
                </div>
            </section>

            {/* Products Section */}
            <section>
                <div className="container py-12">
                    <Tabs defaultValue="pizza">
                        <TabsList>
                            <TabsTrigger value="pizza" className="text-md">
                                Pizza
                            </TabsTrigger>
                            <TabsTrigger value="beverages" className="text-md">
                                Beverages
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="pizza">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
                            >
                                {products.map((product) => (
                                    <ProductCard product={product} key={product.id} />
                                ))}
                            </motion.div>
                        </TabsContent>
                        <TabsContent value="beverages">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
                            >
                                {products.map((product) => (
                                    <ProductCard product={product} key={product.id} />
                                ))}
                            </motion.div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </>
    );
}
