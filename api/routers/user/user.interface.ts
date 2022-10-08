export interface User {
  dateCreated: Date;
  dateModified: Date;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  hash: string;
  salt: string;
}
