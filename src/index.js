import "./styles.css";

function setColor(color) {
  const signals = document.getElementsByClassName("traffic-light__signal");
  const activeClass = "traffic-light__signal_" + color;

  for (let signal of signals) {
    const classList = signal.classList;
    classList.remove("traffic-light__signal_active");
    if (classList.contains(activeClass)) {
      classList.add("traffic-light__signal_active");
    }
  }
}

const transitions = {
  idle: {
    NEXT: () => {
      setColor("green");
      return "green";
    }
  },
  green: {
    NEXT: () => {
      setColor("yellow");
      return "yellow";
    }
  },
  yellow: {
    NEXT: () => {
      setColor("red");
      return "red";
    }
  },
  red: {
    NEXT: () => {
      setColor("green");
      return "green";
    }
  }
};

function doTransition(action, state) {
  const transition = transitions[state][action];
  return transition ? transition() : state;
}

let state = "idle";
// state = doTransition("NEXT", state); // green
// state = doTransition("NEXT", state); // yellow
// state = doTransition("PREV", state); // yellow
// state = doTransition("NEXT", state); // red
// state = doTransition("NEXT", state); // green

setInterval(() => {
  state = doTransition("NEXT", state);
}, 1000);
