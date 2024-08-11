const users = [
  {
    name: "pj curacha",
    email: "pj@curacha.com",
    password: "12345678"
  }
]

export const getUserByEmail = email => {
  const found = users.find(user => user.email === email)
  return found
}