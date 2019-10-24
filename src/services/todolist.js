  
import request from '../utils/request';

export function add() {
  return request('/api/todos');
}
export function query() {
  return request('/api/todos');
}
