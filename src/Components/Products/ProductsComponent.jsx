import "./Products.scss";
import { v4 as uuidv4 } from "uuid";
import logicAddBasketProduct from "./logicAddBasketProduct";
export default function ProductsComponent({ productArr, stateBasket, stateModal, }) {
  const { setCardModal, setShowModal} = stateModal
  function logicOpenModal(element) {
    setShowModal(true)
    setCardModal(element)
  }
  return (
    <div>
      {productArr.map((item) => (
        <div className="burgers__card" key={uuidv4()}>
          <div className="burgers__card-wrap">
            <div className="burgers__card-head" onClick={() => {
              logicOpenModal(item)
            }}>
              <img src={item.img} alt="#" />
            </div>
            <div className="burgers__card-body">
              <span className="price">{item.price}</span>
              <span className="title">{item.title}</span>
              <span className="massa">{item.massa}</span>
            </div>
            <div className="burgers__card-footer">
              <button
                onClick={() => {
                  logicAddBasketProduct(item, stateBasket);
                }}
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
