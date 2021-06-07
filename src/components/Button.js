import React from "react";
import postscribe from 'postscribe';

export default function BitcoinPaymentButton({ uid, imageURL, font, backgroundColor, descriptionColor, titleColor, buttonColor, hoverColor, hideBlockonomics, inputHeights, progressbarColor, BTCAmountColor}) {

  //Set default values or the new values from props
  const image = (imageURL) ? imageURL : "https://www.blockonomics.co/img/pay_with_bitcoin_medium.png";
  font = (font) ? font : `"Helvetica Neue", Helvetica, Arial, sans-serif`;
  backgroundColor = (backgroundColor) ? backgroundColor : "#f4f4f4";
  descriptionColor = (descriptionColor) ? descriptionColor : "#333333";
  titleColor = (titleColor) ? titleColor : "#333333";
  hideBlockonomics = (hideBlockonomics) ? "none" : "block";
  inputHeights = (inputHeights) ? inputHeights : "34px";
  progressbarColor = (progressbarColor) ? progressbarColor : "#09CA83";
  BTCAmountColor = (BTCAmountColor) ? BTCAmountColor : "#059e66";

  const id = '#root';
  postscribe(id, '<script src="https://www.blockonomics.co/js/pay_button.js"></script>');
  
  postscribe(id, `<style type="text/css"> 
  #blockoPayModal.modal .modal-content {
    background: ${backgroundColor};
  }
  #blockoPayModal.modal {
    font-family: ${font};
  }
  #blockoPayModal.modal .modal-header h4 {
    color: ${titleColor};
  }
  #blockoPayModal.modal .modal-header .modal-desc {
    color: ${descriptionColor};
  }
  #blockoCopyAmountText{
    color: ${descriptionColor};
  }
  #blockoCopyAddressText{
    color: ${descriptionColor};
  }
  #timeRemainingText{
    color: ${descriptionColor};
  }
  #blockoPayModal.modal .btn-warning {
    background-color: ${buttonColor};
    border-color: ${buttonColor};
  }
  #blockoPayModal.modal .btn-warning:hover {
      background-color: ${hoverColor};
      border-color: ${hoverColor};
  }
  #blockoPayModal.modal .modal-footer small {
    display: ${hideBlockonomics};
  }
  #blockoPayModal.modal .form-control {
    height: ${inputHeights};
  }
  #blockoPayModal.modal .ticker .time-progress .prog {
    background: ${progressbarColor};
  }
  #blockoPayBtnBTCAmount {
    background: ${BTCAmountColor};
  } 
  </style>`);


  return (
    <div>
      <a href="" className="blockoPayBtn" id={uid} data-toggle="modal" data-uid={uid}>
        <img width="160" src={image}/>
      </a>
    </div>
  );
}