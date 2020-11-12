export default function omitKeys<T extends object = {}>(
  obj: T,
  excludeKeys: Array<keyof T>
): Partial<T> {
  let shallow: Partial<T> = {};

  for (let key in obj) {
    if (!excludeKeys.includes(key)) {
      shallow[key] = obj[key];
    }
  }

  return shallow;
}
