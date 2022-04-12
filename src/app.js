const name = 123;

function foo() {
  const lasss = name;
  console.log(lasss);
}

const x = 2000;

const a = () => {
  console.log(x, name);
};

foo();

a();
