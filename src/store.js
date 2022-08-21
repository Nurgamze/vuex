import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: "Ahmet",
      lname: "Elçi",
      age: 69,
      adress:{},
      password:"ashda",
      tc:5456532,

    },
    theme: "dark",
    fullName: "Gamzenur demir",
    permissions: [0, 1, 2, 3, 4, 5],
    userList: ["Beylerbeyi", "Bayburdi", "Aşk iklimi"],
    itemList: [
      { id: 1, title: "masa", type: "mobilya" },
      { id: 2, title: "sandalye", type: "mobilya" },
      { id: 3, title: "tv", type: "elektronik" },
      { id: 4, title: "monitör", type: "elektronik"     },
      { id: 5, title: "bardak", type: "plastik" },
    ],
  },
  getters:{
     wooditems:state=>state.itemList.filter(i=>i.type=="elektronik"),
     activeUser(state)
     {
        const user=(state.user)
            delete user.password;
            return user;
     }
  }
});

// dışardan erişilebileceğini eklemem gerek
export default store;
