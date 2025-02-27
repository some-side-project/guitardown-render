import AppTpl from "./App.html";
import "./App.scss";
import basicLogo from "../assets/images/guitar-logo-icon.jpg";
import guitarDown from "../assets/pu/empty.gd";

export default {
  setup() {
    console.log("setup exec");
    const pieces = guitarDown.json?.pieces || [];
    const piecesArr = [[]];
    for (let i = 0; i < pieces.length; i++) {
      const lastLine = piecesArr[piecesArr.length - 1];
      if (lastLine.length < 4) {
        lastLine.push(pieces[i]);
      } else {
        piecesArr.push([pieces[i]]);
      }
    }
    return {
      basicLogo,
      guitarDown,
      piecesArr,
    };
  },
  template: AppTpl,
};
