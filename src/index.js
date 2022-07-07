export const hotel = {
  quantityOfPlaces: 30,
  priceByPlace: 20,
  bankAccount: 0,
  guests: {
    0: {
      firstName: 'Bohdan',
      lastName: 'Rammfall',
      money: 40,
    },
    1: {
      firstName: 'Bohdan',
      lastName: 'Rammfall',
      money: 40,
    },
  },

  getLength: function () {
    return Object.keys(this.guests).length;
  },

  getActualFreePlace: function () {
    return this.quantityOfPlace - this.getLength();
  },

  paidPerPlace: function () {
    return (this.bankAccount = this.bankAccount + this.priceByPlace);
  },

  checkInGuest: function (name, lastName, money) {
    if (this.getActualFreePlace() === 0) {
      return 'Sorry, we have not free spaces';
    }

    if (this.priceByPlace > money) {
      return 'Sorry, you have not enough money';
    }
    const user = {
      firstName: name,
      lastName,
      money: money - this.priceByPlace,
    };
    this.guests[this.getLength()] = user;

    this.paidPerPlace();

    return user;
  },
};
