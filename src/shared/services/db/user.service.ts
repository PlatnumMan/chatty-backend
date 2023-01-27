import { IUserDocument } from '@user/interfaces/user.interface';
import { UserModel } from '@user/models/user.schem';

class UserService {
  public async addUserData(data: IUserDocument): Promise<void> {
    await UserModel.create(data);
  }
}

export const userService: UserService = new UserService();
