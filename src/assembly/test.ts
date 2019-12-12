// The entry file of your WebAssembly module.
export const magicnumber = 2181970; 

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function hello(): string {
  return "Hello World!";
}

