export class Polka {
  constructor({ dispatch }) {
    this.dispatch = dispatch;
  }

  attach(el) {
    this.el = el;
    this.el.addEventListener('click', (evt) =>
      this.handleClick(evt));
  }

  handleClick(event) {
    const { width, height } = this.el.getBoundingClientRect();
    this.dispatch({
      type: "AddMark",
      x: event.clientX / width,
      y: event.clientY / height,
    })
  }

  changed({ marks }) {
    const { width, height } = this.el.getBoundingClientRect();
    const existing = [...this.el.querySelectorAll(".point")];
    const existingById = existing.reduce((h,e) => ( h[e.dataset.id] = true, h ), {});

    const toAppend = marks.reduce((all, { id, x, y, radius, color }) => {
      if(!existingById[id]) {
        const el = document.createElement("div");

        // setup styling
        el.classList.add("point");
        el.classList.add("added");
        el.style.left = x * width - radius + "px";
        el.style.top = y * height - radius + "px";
        el.style.background = color;
        el.style.width = el.style.height = radius * 2 + "px";

        el.dataset.id = id;

        all.push(el);
      }
      return all;
    }, []);


    const frag = document.createDocumentFragment();
    for(const el of toAppend) frag.appendChild(el);
    this.el.appendChild(frag);

    window.requestAnimationFrame(() => {
      for(const child of toAppend) {
        child.classList.remove("added");
      }
    });
  }
}
