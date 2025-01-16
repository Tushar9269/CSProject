import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Our Story'}
          mainHeader={'About us'}
        />
        <div className="max-w-2xl mx-auto mt-4 text-gray-500 flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisi ut eros auctor dapibus. Quisque vehicula, ligula non feugiat gravida, eros justo fermentum erat, ac commodo magna justo id sapien.
        </p>
        <p>
          Proin vel nisi ut eros auctor dapibus. Quisque vehicula, ligula non feugiat gravida, eros justo fermentum erat, ac commodo magna justo id sapien.
        </p>
        <p>
          Quisque vehicula, ligula non feugiat gravida, eros justo fermentum erat, ac commodo magna justo id sapien.
        </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
        subHeader={'Don\'t Hesitate'}
        mainHeader={'Contact Us'}
        />
        <div className="mt-8">
        <a className="text-4xl underline text-gray-500" href="mobile:+910987654321">+91 0987654321</a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2025. All rights reserved.
      </footer>
    </>
  );
}
