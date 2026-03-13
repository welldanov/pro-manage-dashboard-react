export const combineClass = (className: Array<string | undefined>): string => {
  return className.map(
    (el) => el ? el : ""
  ).join(" ")
}
