import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
                cardData : [{photo:'../src/assets/bugak_file/bugak1.png', name:'고추 부각', price:10000,},
                            {photo:'../src/assets/bugak_file/bugak3.png', name:'크렌베리 멸치 튀각', price:10000,},
                            {photo:'../src/assets/bugak_file/bugak2.png', name:'다시마 부각', price:10000,},]
  }),
  actions: {
    
  },
  getters: {
    
  }
})