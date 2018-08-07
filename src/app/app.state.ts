import { item } from './models/Item.model';

export interface AppState {
  readonly todoItem : item[];
}