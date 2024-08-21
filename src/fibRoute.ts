// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";
import { Request,Response } from "express";

// Define the interface for your route params

interface Params {
  num: string;
}


export default (req:Request<Params>, res:Response) => {
  const { num } = req.params;
  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;
  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }
  res.send(result);
};
