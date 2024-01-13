import Right from "../icons/Right";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div>
        <h1 className="text-4xl font-semibold">
          Everything is better with a Pizza
        </h1>
        <p className="my-4 text-gray-500">
          pizza is the missing piece that makes everyday complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4">
          <button className="bg-primary flex gap-2 text-white rounded-full uppercase px-4 py-2">
            Order Now
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn More <Right />
          </button>
        </div>
      </div>
      <div className=" relative"></div>
    </section>
  );
}
