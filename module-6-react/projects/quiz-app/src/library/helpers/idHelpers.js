import { nanoid } from "nanoid";

export function generateId() {
  return nanoid();
}

const module = {
  generateId,
};

export default module;
