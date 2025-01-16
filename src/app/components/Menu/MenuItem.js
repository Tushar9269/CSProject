export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="text-center">
                <img src="/Biryani.jpeg" className="max-h-auto max-h-24 block mx-auto" alt="image1" />
            </div>
            <h4 className="font-semibold text-xl my-3">Biryani</h4>
            <p className="text-gray-500 text-sm">
                Biryani is a fragrant mix of spiced rice and tender meat or veggies. Each bite is a burst of flavor, crafted to perfection and served hot for your delight.            </p>
            <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">Add to cart $12</button>
        </div>
    );
}