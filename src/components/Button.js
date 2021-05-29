import React from "react";
import postscribe from 'postscribe';

export default function BitcoinPaymentButton({ uid, imageURL }) {
  postscribe('#root', '<script src="https://www.blockonomics.co/js/pay_button.js"></script>');
  const image = (imageURL) ? imageURL : "https://www.blockonomics.co/img/pay_with_bitcoin_medium.png";
  return (
    <div>
      <a href="" className="blockoPayBtn" id={uid} data-toggle="modal" data-uid={uid}>
        <img width="160" src={image}/>
      </a>
    </div>
  );
}