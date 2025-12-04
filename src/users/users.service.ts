import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { 
            id: '1', 
            name: 'Alice',
            email: 'alice@gmail.com', 
            role: 'INTERN' 
        },
        { 
            id: '2', 
            name: 'Bob',
            email: 'bob@gmail.com',
            role: 'ENGINEER'
        },
        { 
            id: '3', 
            name: 'Charlie',
            email: 'charlie@gmail.com',
            role: 'ADMIN'
        },
        { 
            id: '4', 
            name: 'Alice2',
            email: 'alice2@gmail.com', 
            role: 'INTERN' 
        },
        { 
            id: '5', 
            name: 'Bob2',
            email: 'bob2@gmail.com',
            role: 'ENGINEER'
        },
        { 
            id: '6', 
            name: 'Charlie2',
            email: 'charlie2@gmail.com',
            role: 'ADMIN'
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            return this.users.filter(user => user.role === role);
        }
        return this.users;
    }

    findOne(id: string) {
        const user = this.users.find(user => user.id === id);
        return user;
    }

    create(user: { name: string; email: string; role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        const usersByHighestId = [...this.users].sort((a,b) => Number(b.id) - Number(a.id));

        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        }    
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updatedUser: { name?: string; email?: string; role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        this.users = this.users.map(user => {
            if (Number(user.id) === id) {
                return {
                    ...user,
                    ...updatedUser
                }
            }
            return user;
        })
        return this.findOne(String(id));
    } 
    
    delete(id: number) {
        const removedUser = this.findOne(String(id));
        this.users = this.users.filter(user => Number(user.id) !== id);
        return removedUser;
    }
}
