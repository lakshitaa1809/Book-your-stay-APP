import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
const Home = () => {
  return (
    <div>
      <Head>
        <title>Book-Your-Stay APP</title>
        <link rel="icon" href="/favicon 1.ico" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto px-8 sm:px-10">
        <section className="pt-[20px]">
          <h2 className="text-4xl font-semibold py-5">
            Experience A Stay Like Never Before...
          </h2>
          <div className="flex space-x-10  p-3 ml-3 rounded-lg">
            <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-39974109/original/4bf3e6ff-555a-4553-973e-a371d4331e43.jpeg?im_w=720"
              title="London UK"
              price="£370/night"
            />
            <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-6354436/original/bf9457a9-5093-4999-ba1f-35b38a0146f5.jpeg?im_w=720"
              title="Valencia,UK"
              price="£300/night"
            />
            <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6a17e24d-d7c2-4bc8-ac29-7448d25adfdc.jpeg?im_w=720"
              title="London UK"
              price="£390/night"
            />
            <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/e7da1f36-922f-4631-a287-91ceda05970f.jpeg?im_w=720"
              title="Lindefield UK"
              price="£330/night"
            />
          </div>

          <div className="flex space-x-10  p-3 ml-3 rounded-lg">
            <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-6354436/original/bf9457a9-5093-4999-ba1f-35b38a0146f5.jpeg?im_w=720"
              title="Bearsden UK"
              price="£350/night"
            />
            <Card
              src="https://a0.muscache.com/im/pictures/airflow/Hosting-1197834/original/2c2cf7d3-cfa7-46f6-b9d7-cfd88fef90eb.jpg?im_w=720"
              title="Edinburg,UK"
              price="£70/night"
            />
            <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-6354436/original/bf9457a9-5093-4999-ba1f-35b38a0146f5.jpeg?im_w=720"
              title="Valencia,UK"
              price="£300/night"
            />
            <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-39974109/original/4bf3e6ff-555a-4553-973e-a371d4331e43.jpeg?im_w=720"
              title="London UK"
              price="£370/night"
            />
          </div>
          <div className="flex space-x-10  p-3 ml-3 rounded-lg">
            <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-6354436/original/bf9457a9-5093-4999-ba1f-35b38a0146f5.jpeg?im_w=720"
              title="Bearsden UK"
              price="£350/night"
            />
            <Card
              src="https://a0.muscache.com/im/pictures/airflow/Hosting-1197834/original/2c2cf7d3-cfa7-46f6-b9d7-cfd88fef90eb.jpg?im_w=720"
              title="Edinburg,UK"
              price="£70/night"
            />
            <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-6354436/original/bf9457a9-5093-4999-ba1f-35b38a0146f5.jpeg?im_w=720"
              title="Valencia,UK"
              price="£300/night"
            />
            <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6a17e24d-d7c2-4bc8-ac29-7448d25adfdc.jpeg?im_w=720"
              title="London UK"
              price="£390/night"
            />
          </div>
          <div className="flex space-x-10  p-3 ml-3 rounded-lg">
            <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-6354436/original/bf9457a9-5093-4999-ba1f-35b38a0146f5.jpeg?im_w=720"
              title="Bearsden UK"
              price="£350/night"
            />
            <Card
              src="https://a0.muscache.com/im/pictures/airflow/Hosting-1197834/original/2c2cf7d3-cfa7-46f6-b9d7-cfd88fef90eb.jpg?im_w=720"
              title="Edinburg,UK"
              price="£70/night"
            />
            <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/e7da1f36-922f-4631-a287-91ceda05970f.jpeg?im_w=720"
              title="Lindefield UK"
              price="£330/night"
            />

            <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-6354436/original/bf9457a9-5093-4999-ba1f-35b38a0146f5.jpeg?im_w=720"
              title="Bearsden UK"
              price="£350/night"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
