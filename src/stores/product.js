import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
                cardData : [{photo:'https://i.ibb.co/Sw5FgwB8/Chat-GPT-Image-2026-4-23-11-57-01.png', name:'고추 부각', price:10000, id:2,},
                            {photo:'https://i.ibb.co/F1dGFnk/Chat-GPT-Image-2026-4-23-11-03-19.png', name:'어포 튀각', price:10000, id:9,},
                            {photo:'https://i.ibb.co/MDrKZFgN/Chat-GPT-Image-2026-4-23-11-49-22.png', name:'다시마 부각', price:10000, id:3,},]
  }),
  actions: {
    
  },
  getters: {
    
  }
})