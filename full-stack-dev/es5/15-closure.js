this.a = 20;
var test = {
  a: 40,
  init: () => {
    console.log(this.a);
    function go () {
      this.a = 60;
      console.log(this.a);
    }
    go.prototype.a = 50;
    return go;
  }
};
var p = test.init();
p(); // this => window;this => window;
new (test.init());// this => window; this => window;