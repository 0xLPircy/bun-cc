// const data = "i love JS";

// await Bun.write("ouput.txt", data);
const file = await Bun.file("output.txt");
// console.log(await file.text()); //NOT WORKING (?)
console.log(file.size);
console.log(await file.stream());
console.log(await file.arrayBuffer());
