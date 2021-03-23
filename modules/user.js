class User {
  constructor (id) {
      this.id = id;
      this.items = [];
  }
  setNameSurname(string) {
      const regexp = /[а-яА-ЯёЁ ]{2,}/g;
      if (regexp.test(string)) this.name = string;
      return false;
  }
}