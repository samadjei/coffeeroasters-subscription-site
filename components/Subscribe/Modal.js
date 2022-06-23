import React, { Children } from "react";
import Button from "../Button";

const Modal = ({ open, onClose, drink,
  type,
  quantity,
  grind,
  frequency,
  price, }) => {
  if (!open) return null;
  return <div>
  <div className="modal__overlay"></div>
    <div className="modal">
      <div className="modal__inner">
        <div className="modal__header">
          <h2 className="modal--title">Order Summary</h2>
        </div>
        <div className="modal__content">
        <p className="modal--info">
          “I drink coffee <span className="summary--options">{drink}</span>,
          with a <span className="summary--options">{type}</span> type of
          bean. {quantity} ground ala{" "}
          <span className="summary--options">{grind}</span> , sent to me{" "}
          <span className="summary--options">{frequency}</span> .”
        </p>
        <p>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
        <div className="modal__bottom">
          <span className="modal--total">$14.00/mo</span>
          <div className="modal__mobile">
            <Button onClick={onClose}
                children={`Checkout - ${price}`}
                className="btn"
                buttonStyle="btn--primary"
                buttonSize="btn--desktop"
              />
          </div>
          <div className="modal__desktop">
          <Button onClick={onClose}
              children={`Checkout`}
              className="btn"
              buttonStyle="btn--primary"
              buttonSize="btn--desktop"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Modal;
