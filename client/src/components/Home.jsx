import React from "react";
import "./style.css";
import Menu from "./Menu";
const Home = () => {
  return (
    <>
      <main>
        <div className="container container-img">
          <div className="informacoes">
            <h3 className="text-black">Open on weekends from 6:00 pm</h3>
            <h1>Mozzarella Pizzeria</h1>
            <p>
              Welcome to Mozzarella Pizzeria, where you'll find the best pizzas
              in the region! Come enjoy our pizza. Loyalty and quality are our
              mottos.
            </p>
            <div className="botoes">
              <a href="#menu" className="cardapio">
                See Menu <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>
              <a href="#contato" className="contato">
                Get In Touch <ion-icon name="call-outline"></ion-icon>
              </a>
            </div>
          </div>
        </div>

        <Menu />

        <div id="sobre">
          <h1>About us</h1>
          <div className="sobre">
            <p>
              Pizzeria Mussarela, a traditional pizzeria in the Cruzeiro Itajubá
              neighborhood, has been in the same location for over 30 years. It
              boasts a family atmosphere and a menu featuring delicious pizzas,
              using the highest quality ingredients.
              <br />
              We offer delivery services by phone +91 987654321. Orders are accepted by phone only!
              <br />
              Our hours are Monday through Sunday, 6 pm to midnight.
              <br />
              Neighborhoods served: Pizzeria in Chácara Santo Antônio, Pizzeria
              in Granja Julieta, Pizzeria in Santo Amaro, Pizzeria in Alto da
              Boa Vista, and Pizzeria in Brooklin.
            </p>
            <br />
            <img
              src="./img/db5057c56106618402614ffc562c66da(1) - Copia.jpg"
              alt=""
              width="500px"
            />
          </div>
        </div>

        <div id="contato">
          <h1>Contact and Location</h1>
          <br />
          <br />
          <div className="container2">
            <div className="localizacao">
              <h2>WE ARE LOCATED IN THE CRUZEIRO ITAJUBA NEIGHBORHOOD</h2>
              <br />
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.237288982074!2d-45.449391327804705!3d-22.420092962060632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb638cbe8ef28d%3A0x3169d83c2ab09a11!2sPizzaria%20Floresta!5e0!3m2!1spt-BR!2sbr!4v1679405296493!5m2!1spt-BR!2sbr"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              /> */}
            </div>
            <div className="contatos">
              <ul>
                <li style={{fontSize: "1.2rem", fontWeight: "500"}}>
                  ADDRESS OF THE MOZZARELLA PIZZARIA
                </li>
                <li>
                  <ion-icon name="location-outline"></ion-icon>
                  Ahemadabad,Gujart Pin-Code: 38-23-50
                </li>
                <li>
                  <ion-icon name="call-outline"></ion-icon> Tel: 123456789
                  and 987654321
                </li>
                <li>
                  <ion-icon name="mail-outline"></ion-icon>
                  contato@pizzariamussarela.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <ul>
          <li>
            Copyright © <b> Mussarela</b>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Home;
