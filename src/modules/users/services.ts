import { type AxiosResponse } from 'axios';

import type { ApiParams } from '@/shared/types/commons';
import ServerAccess from '@/shared/utils/server-access';
import type { TUser } from './types';

class UserAPI extends ServerAccess {
  constructor() {
    super({
      RESOURCE_PATH: '/api/users',
    });
  }

  createUser(newUser: TUser): Promise<AxiosResponse<TUser>> {
    return this.server.post('', newUser);
  }

  getUsers(params?: ApiParams): Promise<AxiosResponse<TUser[]>> {
    return this.server.get('', { params });
  }

  getUserById(id: string) {
    return this.server.get(`/${id}`);
  }

  updateUser(id: string, user: Partial<TUser>) {
    return this.server.put(`/${id}`, user);
  }

  deleteUser(id: string) {
    return this.server.delete(`/${id}`);
  }
}

const userAPI = new UserAPI();

export default userAPI;
