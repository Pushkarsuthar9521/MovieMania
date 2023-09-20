import { useState, useEffect } from "react";
import Loading from "./Loading";


const Body = () => {
  const [data, setDataa] = useState([]);
  const [isloading, setloading]=useState(true)
  // fetch data from an API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3007/movie");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const fetchdata = await response.json();
        
        setDataa(fetchdata);
        setloading(false)
        console.log(data);
        console.log(fetchdata); // You can do something with the data here
      } catch (error) {
        console.error("Error fetching data:", error);

      }
    };

    fetchData();
    
  }, []);

  return (
    <>
      {isloading?(<div className="m-60"><Loading/></div>):

      (
      <div className="container mx-auto top-20 pt-6  ">
        <div className="grid grid-cols-1 m-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4  ">
          {data.map((item) => (
            <div
              key={item.title}
              className="border border-blue-950 cursor-pointer bg-violet-300 p-4 shadow-md rounded hover:scale-[102%] transition-all duration-300"
            >
              <div className="relative flex justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-30 h-60 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <p className="text-lg text-black font-semibold">{item.title}</p>
                <p className="text-gray-500">{item.year}</p>
                <p className="text-gray-500">{item.duration}</p>
                <p className="text-black">★{item.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>)}
    </>
  );
};

export default Body;
