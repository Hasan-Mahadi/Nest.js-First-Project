import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  private users = [
    { userId: 1, username: 'john', password: 'changeme', role: 'user' },
    { userId: 2, username: 'maria', password: 'guess', role: 'admin' },
  ];

  async findOne(username: string) {
    return this.users.find((u) => u.username === username);
  }
}
