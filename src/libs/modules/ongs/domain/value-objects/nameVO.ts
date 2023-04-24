export default class NameVO {
  constructor(public firstName: string, public lastName: string) {
    if (!firstName) throw new Error('First name is required');
    if (!lastName) throw new Error('Last name is required');
  }
}
