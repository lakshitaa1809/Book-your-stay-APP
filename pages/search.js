import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import CardInfo from "../components/CardInfo";
//import Map from "../components/Map"

const search = ({ searchResults }) => {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests, days } = router.query;
  const queryLocation = location;

  const formatedStartDate = format(new Date(startDate), "MMM dd, yyyy");
  const formatedEndDate = format(new Date(endDate), "MMM dd, yyyy");
  const dateRange = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${dateRange} | ${noOfGuests}`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            Booking - {dateRange} - for {noOfGuests} number
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="custom_search_page_button">
              Cancellation Flexibility
            </p>
            <p className="custom_search_page_button">Type of Place</p>
            <p className="custom_search_page_button">Price</p>
            <p className="custom_search_page_button">Rooms and Beds</p>
            <p className="custom_search_page_button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults?.map(
              ({
                id,
                img,
                location,
                title,
                description,
                star,
                price,
                total,
              }) => (
                <CardInfo
                  key={id}
                  img={img}
                  location={location}
                  queryLocation={queryLocation}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  days={days}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default search;

export const getServerSideProps = async () => {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (response) => response.json()
  );

  return {
    props: {
      searchResults,
    },
  };
};
