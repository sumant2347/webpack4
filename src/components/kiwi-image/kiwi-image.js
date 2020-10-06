import kiwi from "./write.png";
import "./kiwi-image.scss";
class KiwiImage {
  render(name) {
    const img = document.createElement("img");
    img.src = kiwi;
    img.alt = "write";
    img.classList.add("kiwi-image");
    const h1 = document.createElement("h1");
    h1.innerHTML = "Hey, I'm " + name;
    const body = document.querySelector("body");
    body.appendChild(img);
    body.appendChild(h1);
  }
}
export default KiwiImage;
