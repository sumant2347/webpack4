import "./hello.scss";

class Hello {
  btnClassName = "btn";
  render(name) {
    const button = document.createElement("button");
    button.innerHTML = "Hello";
    button.classList.add(this.btnClassName);
    button.onclick = (event) => {
      const para = document.createElement("p");
      para.innerHTML = "Hello World " + "I'm " + name;
      para.classList.add("p");
      body.appendChild(para);
    };
    const body = document.querySelector("body");
    body.appendChild(button);
  }
}
export default Hello;
