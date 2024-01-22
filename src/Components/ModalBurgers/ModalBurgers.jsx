import "./ModalBurgers.scss";
import { v4 as uuidv4 } from "uuid";
import close from "../../assets/close.svg";
export default function ModalBurgers(props) {
  const { title, img, price, description, sostav } = props;
  return (
    <div className="modal">
      <div
        className="contentModal"
        onClick={(e) => {
          e.stopPropagation;
        }}
      >
        <div className="contentModal-head">
          <h3>{title}</h3>
          <img src={close} alt="#" className="closeModal" />
        </div>
        <div className="contentModal-main">
          <div className="contentModal-main-leftitem">
            <img src={img} alt="#" />
          </div>
          <div className="contentModal-main-rightitem">
            <p>{description}</p>
            <div>
              <h3>Состав: </h3>
              <ul>{sostav?.map(item => <li key={uuidv4}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
        <div className="contentModal-add">
          <button>Добавить</button>

          <div className="price">
            <span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
