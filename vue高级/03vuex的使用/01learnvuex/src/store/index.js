import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 100,
    students: [
      {"name":"刘备","equipment":"双股剑","age":40},
      {"name":"关羽","equipment":"青龙偃月刀","age":36},
      {"name":"张飞","equipment":"丈八蛇矛","age":35},
      {"name":"诸葛亮","equipment":"诸葛连弩","age":27}
    ]
  },
  mutations:{
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    addStudent(state,student){
      state.students.push(student);
    }
  },
  getters: {
     square(state){
       return state.counter * state.counter;
     },
    morestu(state,getters){
       return age => {
         return state.students.filter(stu => stu.age >= age);
       }
    }
  }
})

export default store
