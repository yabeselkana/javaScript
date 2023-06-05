const num = 5;

const loop = () => {
  if (typeof num !== "number") {
    console.log("Data Hurus Number");
  } else {
    for (let i = num; i >= 1; i--) {
      element = "";
      for (let j = 1; j <= i; j++) {
        element += j;
      }
      console.log(element);
    }
  }
};

loop();
