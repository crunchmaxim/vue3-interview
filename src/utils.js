export function filterUsersByCountry (users, country) {
  return users.filter(u => u.country === country)
}

export function filterUsersByScore (users, score) {
  switch (score) {
    case '> 20':
      return users.filter(u => u.score > 20)
    case '< 10':
      return users.filter(u => u.score < 10)
    default:
      return users
  }
}