import usersList from '../../UsersList.json'
import { useUsersStore } from '../../stores/UsersStore'
import { UserModel } from '../models/index'
export default class UsersService {
  store = useUsersStore()

  // Загрузка списка пользователей
  loadUsers () {
    // Данные приходят из UsersList.json.
    // В реальном проекте скорее всего будет использоваться некий слой (например класс ApiGateway),
    // который будет отвечать за получение данных по REST или иным способом.
    let users = usersList

    // Оборачиваем каждого юзера в класс UserModel.
    users = users.map(u => new UserModel(u))

    // Устанавливаем пользователей в store.
    this.store.setUsers(users)
  }
}