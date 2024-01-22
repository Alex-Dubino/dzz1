import { useState } from "react";
import ProductsComponent from "../Components/Products/ProductsComponent";
import Basket from "../Components/Basket/Basket";
import ModalBurgers from "../Components/ModalBurgers/ModalBurgers";
import {
  allCountProductsCart,
  allPriceProductsCart,
} from "../template/counterLogic";
import basketServer from "../dt/basket.json";
import productServer from "../dt/products.json";
import "../style/App.scss";

function App() {
  const [basket, setBasket] = useState(basketServer);
  const [products, setProducts] = useState(productServer);
  const[showModal,setShowModal] = useState(false)
  const[cardModal, setCardModal] = useState(false)
  const stateBasket = {basket, setBasket}
  const stateModal = {cardModal, setCardModal,showModal, setShowModal}

  function editCountCart(id, num) {
    const copyBasket = basket.map((item) => {
      if (item.id === id) {
        item.count += num;
        return item;
      }
      return item;
    });
    setBasket(copyBasket);
  }

  function delItemCart(id, count) {
    if (count > 0) return;
    const copyBasket = basket.filter((item) => item.id != id);
    setBasket(copyBasket);
  }

  return (
    <>
    {showModal && <ModalBurgers {...cardModal}/> }
      <div className="conatiner">
        <div className="cont__activeBurgers">
          <div className="container_basket">
            <div className="container_head">
              <h1>Корзина</h1>
              <h2>{allCountProductsCart(basket)}</h2>
            </div>
            <div className="conteiner_main">
              <Basket
                basketArr={basket}
                editCountCart={editCountCart}
                delItemCart={delItemCart}
              />
            </div>
            <div className="container_footer">
              <h1>Итого</h1>
              <h2>{allPriceProductsCart(basket)}₽</h2>
            </div>
          </div>
        </div>
        <div className="cont__allBurgers">
          <h2 className="container_cards-title">Бургеры</h2>
          <div className="cont__allBurgers-wrap">
            <ProductsComponent productArr={products.burgers} stateBasket={stateBasket} stateModal={stateModal} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
