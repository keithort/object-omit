function objectOmit<T>(obj: T, keys: Array<keyof T>): T {
  let shallow = {
    ...obj
  };

  for (let key of keys) {
    delete shallow[key]
  };

  return shallow;
}

export default objectOmit;
