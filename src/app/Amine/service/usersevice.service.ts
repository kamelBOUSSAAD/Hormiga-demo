import { Injectable } from '@angular/core';
import { User } from '../model/user.model'
@Injectable({
  providedIn: 'root'
})
export class UserseviceService {
  public ELEMENT_DATA: User[] = [
    { id: 1, lastname: 'Bayouli', firstname: "Amine", email: 'aminebayouli@gmail.com' },
    { id: 2, lastname: 'Boussaad', firstname: "Kamel", email: 'boussaadKamel@gmail.com' },
    { id: 3, lastname: 'Massaoud', firstname: "Cherif", email: 'massaoudcherif@gmail.com' },
    { id: 4, lastname: 'Sekrafi', firstname: "Nawfel ", email: 'sekrafinawfel@gmail.com' },
    { id: 5, lastname: 'Shili', firstname: "Marwan", email: 'shilimarwan@gmail.com' },
    { id: 6, lastname: 'Amal', firstname: "Tlahig", email: 'tlahigamal@gmail.com' },
    { id: 7, lastname: 'Guemri', firstname: "Mouhamed", email: 'guemrimohamed@gmail.com' },
  ];
  constructor() { }
  addUser(user: User) {
    this.ELEMENT_DATA.push(user);
  }
}
