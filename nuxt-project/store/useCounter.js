import { reactive } from "vue";

export const useCounter = reactive({
  count: 0,
  incrementBy10() {
    this.count = this.count + 10;
  },

  increment() {
    this.count++;
  },

  add(number) {
    this.count = this.count + number;
  },
});
