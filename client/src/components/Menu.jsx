import {NavLink} from "react-router-dom";
import {useAuth} from "./context/Context";
const Menu = () => {
  const {service} = useAuth();
  return (
    <>
      <div className="cardapio-menu" id="menu">
        <h1>Menu</h1>
        <div className="opcoes">
          {service &&
            service?.map((curele, index) => {
              const {image, name, description, price} = curele;
              return (
                <div className="opcao" key={index}>
                  <img src={image} alt="" />
                  <h1>{name}</h1>
                  <span>₹{price}</span>
                  <ul>
                    <li>{description}</li>
                  </ul>
                  <NavLink to={"/addtocart"}>Add To Cart</NavLink>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Menu;
