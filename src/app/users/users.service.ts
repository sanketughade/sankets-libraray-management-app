import { User } from '../users/user.model';

export class UsersService{
    private users: User[]=[
                            new User('1','User 1','user1@mail.com'),
                            new User('2','User 2','user2@mail.com'),
                            new User('3','User 3','user3@mail.com'),
                            new User('4','User 4','user4@mail.com'),
                            new User('5','User 5','user5@mail.com')
                          ]

    getUsers(){
        return this.users.slice();
    }

    deleteUser(id: number){
        this.users.splice(id,1);
    }
}