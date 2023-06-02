// Список возможных вариантов стран (обычно описан в спецификации)
export const CountriesEnum = {
  RUSSIA: 'Russia',
  USA: 'USA',
  AUSTRALIA: 'Australia',
}

// Класс соответствующий модели пользователя.
// В реальном проекте такой класс будет создаваться согласно описанию сущности в спецификации.
export class UserModel {
  constructor ({ avatar, title, subtitle, country, score, id, address }) {
    this.avatar = avatar
    this.title = title
    this.subtitle = subtitle
    this.country = country
    this.score = score
    this.id = id
    this.address = address
  }
}