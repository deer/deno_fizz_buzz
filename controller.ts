import { Response } from "https://deno.land/x/oak/mod.ts";

export const helloWorld = ({ response }: { response: Response }) => {
  response.body = {
    message: "Hello World!",
  };
};

export const calculateFizzBuzz = (
  { params, response }: { params: { id: string }; response: Response },
) => {
  let message = "";
  const input = parseInt(params.id);

  if (input % 15 === 0) {
    message = "asdf";
  } else if (input % 3 === 0) {
    message = "Fizz";
  } else if (input % 5 === 0) {
    message = "Buzz";
  } else {
    message = input.toString();
  }

  response.body = {
    message,
  };
};
