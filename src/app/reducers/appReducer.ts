import { item } from "../models/Item.model";

export const todos = function methodName(state : item[] = null, action)  {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, action.payload];
      default:
        return state;
    }
  }