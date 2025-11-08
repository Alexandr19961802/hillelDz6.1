let userInfo = {
    name: "Alex",
    age: 29,
    city: "Kiev",
    adress: {
      street: "Dragomanova",
      house: 11
    },
    showInfo: function() {
      console.log("Имя: " + this.name);
      console.log("Возраст: " + this.age);
      console.log("Город: " + this.city);
      console.log("Улица: " + this.adress.street);
      console.log("Дом: " + this.adress.house);
    }
  };
  
