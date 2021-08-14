export const asElementTypes = <D>() => {
  const createObject = <T extends Record<keyof T, D>>(map: T) => {
    return map;
  }
  return { createObject };
}