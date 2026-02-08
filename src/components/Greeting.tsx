// type user = {
//   name: string;
//   age: number;
// };

interface user {
  name:string,
  age:number
}
function Greeting({ name, age }: user) {
  return <div>Hello I am {name} . I am {age} years old</div>;
}

export default Greeting;
