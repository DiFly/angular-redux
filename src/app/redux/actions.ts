export const ADD_NUMBER = 'ADD_NUMBER';
export const REMOVE_NUMBER = 'REMOVE_NUMBER';
export const MULTIPLY_NUMBER = 'MULTIPLY_NUMBER';
export const DIVIDE_NUMBER = 'DIVIDE_NUMBER';

export function addNumber(n: number) {
  return { type: ADD_NUMBER, n}
}

export function removeNumber(n: number) {
  return { type: REMOVE_NUMBER, n }
}

export function multiplyNumber(n: number) {
  return { type: MULTIPLY_NUMBER, n }
}

export function divideNumber(n: number) {
  return { type: DIVIDE_NUMBER, n }
}