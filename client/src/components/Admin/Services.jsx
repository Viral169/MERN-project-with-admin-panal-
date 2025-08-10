import {useEffect, useState} from "react";
import {useAuth} from "../context/Context";

const Services = () => {
  const {token} = useAuth();
  const [servicesData, setServices] = useState();
  const services = async () => {
    const response = await fetch("http://127.0.0.1:3000/api/services/service", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data.serviceData);
    setServices(data.serviceData);
  };
  useEffect(() => {
    services();
  }, []);
  return (
   <div className="service-container">
  <h2 className="admin-h2">Service Items</h2>
  <div className="cards-wrapper">
    {servicesData?.map((item) => (
      <div className="service-card" key={item._id}>
        <img src={item.image} alt={item.name} />
        <div className="card-content">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p className="price">₹{item.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Services;
