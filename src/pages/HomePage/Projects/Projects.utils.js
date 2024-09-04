export const orderTopThree = (list) => {
  const resp = [];

  if (list.length >= 2) resp.push(list[1]);
  if (list.length >= 1) resp.push(list[0]);
  if (list.length >= 3) resp.push(list[2]);

  return resp;
};
