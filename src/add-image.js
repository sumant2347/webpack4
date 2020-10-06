import write from "../public/write.png";

const addImage = () => {
  const img = document.createElement("img");
  img.width = 25;
  img.height = 25;
  img.src = write;
  img.alt = "write";
  const body = document.querySelector("body");
  body.appendChild(img);
};

export default addImage;
