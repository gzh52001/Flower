/**
 * action creator
 */

export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const CHANGE_QTY = 'CHANGE_QTY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const GET_FROM_CART = 'GET_FROM_CART';

export function add(goods) {
    return {
        type: ADD_TO_CART,
        goods
    }
}
export function change(id, number) {
    return {
        type: CHANGE_QTY,
        id,
        number
    }
}

export function clear() {
    return {
        type: CLEAR_CART,
    }
}

export function remove(id) {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}
export function get(data) {
    return {
        type: GET_FROM_CART,
        data
    }
}

export default {
    add,
    change,
    remove,
    clear,
    get
}