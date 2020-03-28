import { User } from '../models/user';
const u1: User = new User(1, '123456789AAB', 'Roger', 'Capdevila', true, 'rogercapcas@gmail.com', 666737461, '' );
const u2: User = new User(2, '1234567890AAB', 'Guillem', 'Pedra', true, 'pedra@totook.es', 689077473, '');
const u3: User = new User(3, '1234567890AAB', 'Jaume', 'Gelonch', true, 'jaumedelaventa@gmail.com', 612345678, '');
/*u2.id = 2;
u2.password = '1234567890AAB';
u2.name = 'Guillem';
u2.surname = 'Pedra';
u2.superuser = true;
u2.email = 'pedra@totook.es';
u2.phoneNumber = 689077473;

const u3: User = new User();
u3.id = 3;
u3.password = '1234567890AAB';
u3.name = 'Jaume';
u3.surname = 'Gelonch';
u3.superuser = true;
u3.email = 'jaumedelaventa@gmail.com';
u3.phoneNumber = 612345678;
*/
export let USERS: User[];
USERS = [u1, u2, u3];

