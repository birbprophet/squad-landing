import { useState } from "react";
import { createContainer } from "unstated-next";

const useCounter = (initialState = "") => {
  const [email, setEmail] = useState(initialState);

  return { email, setEmail };
};

export const EmailContainer = createContainer(useCounter);
