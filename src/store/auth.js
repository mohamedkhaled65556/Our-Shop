const credentials = [
  { email: "admin@gmail.com", password: "12345678" },
  { email: "mohamed@gmail.com", password: "01001046558" },
];

export const login = (values) => {
  let index = credentials.findIndex((el) => {
    return el.email === values.email;
  });
  if (index === -1) return;
  return (
    values.email === credentials[index].email &&
    values.password === credentials[index].password
  );
};
