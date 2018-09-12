export default fullName => {
  return fullName
    .split(" ")
    .map(initials)
    .join("");
};

const initials = elem => elem.slice(0, 1);
