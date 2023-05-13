import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";

function Home({ exploreData }) {
  return (
    <div>
      <Head>
        <title>Airbnb-clone</title>
        <link rel="icon" href="/favicon 1.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-10 ml-[20px] sm:px-20">
        <section className="pt-5">
          <h2 className="text-4xl font-semibold pb-5">Explore Near by</h2>
          {exploreData?.map(({ img, distance, location }) => {
            <SmallCard
              key={img}
              img={img}
              distance={distance}
              location={location}
            />;
          })}
        </section>
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(`https://www.jsonkeeper.com/b/4G1G`);
  const exploreData = await res.json();
  return {
    props: {
      exploreData,
    },
  };
}

export default Home;
