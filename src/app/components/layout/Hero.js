import Image from "next/image";
import Right from "../icons/right";

export default function Hero() {
    return (
        <section className="hero mt-4">

            <div className="py-12">
                <h1 className="text-5xl font-cardo">
                    Savor the <br/> Flavors of the <br/>
                    <span className="text-primary"> NORTH EAST </span> 
                </h1>
                <p className="mt-12 my-6 text-gray-500 text-sm text-center pr-8">
                Welcome to NORTH EAST CANTEEN, where North East cuisine comes alive. Enjoy authentic dishes made with love, bold flavors, and fresh ingredients. Join us for a meal that celebrates our vibrant culinary heritage!                </p>
                {/* <div className="flex gap-4 text-sm">
                    <button className="bg-primary uppercase text-center flex items-center gap-2 text-white px-4 py-2 rounded-full ">
                        Order Now
                        <Right />
                    </button>
                    <button className="flex items-center gap-2 py-2 px-4 text-gray-600 font-semibold rounded-full">
                        Learn More
                        <Right />
                    </button>
                </div> */}

            </div>

            <div className=" relative">
                <Image src={'/cheese maggi.jpeg'} layout={'fill'} objectFit={'contain'} alt={'best dish'} />
            </div>

        </section>
    );
}