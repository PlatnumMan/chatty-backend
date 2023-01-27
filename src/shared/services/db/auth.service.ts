import { IAuthDocument } from '@auth/interfaces/auth.interface';
import { AuthModel } from '@auth/models/auth.schema';
import { Helpers } from '@global/helpers/helpers';

class AuthService {
  public async createAuhUser(data: IAuthDocument): Promise<void> {
    await AuthModel.create(data);
  }

  public async getUserByUsernameOrEmail(username: string, email: string): Promise<IAuthDocument> {
    const query = {
      $or: [{ username: Helpers.firstLetterUppercased(username) }, { email: Helpers.lowerCase(email) }]
    };
    const user: IAuthDocument = (await AuthModel.findOne(query).exec()) as IAuthDocument;
    return user;
  }

  public async getAuthUserByUsername(username: string): Promise<IAuthDocument> {
    const user: IAuthDocument = (await AuthModel.findOne({ username: Helpers.firstLetterUppercased(username) }).exec()) as IAuthDocument;
    return user;
  }
}

export const authService: AuthService = new AuthService();
