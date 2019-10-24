import queryString from 'query-string';
import { add } from '../services/todolist'


export default {
    namespace: 'todo',
    state: {
        list: [],
        flag:true,
        toIndex:''
    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => { })
        }
    },
    effects: {
        *add({ payload: value }, { call, put, select }) {
            const data = yield call(add, value)
            let templist = yield select(state => state.todo.list)
            let list = []
            list = list.concat(templist)
            const tempObj = {};
            tempObj.name = value.name
            tempObj.age = value.age
            tempObj.xl = value.xl
            list.push(tempObj)
            yield put({ type: 'updateState', payload: { list } })

        },
        *delete({ payload: index }, { call, put, select }) {
            const data = yield call(add, index)
            let templist = yield select(state => state.todo.list)
            let list = []
            list = list.concat(templist)
            list.splice(index, 1)
            yield put({ type: 'updateState', payload: { list } })
        },
        *modify({payload:index},{call,put,select}){
            const data = yield call(add,index)
            let templist = yield select(state => state.todo.list)
            let list = []
            list = list.concat(templist)
            
           //console.log(tempflag)
            yield put({ type: 'updateState', payload: { flag:false,list,toIndex:index } })
        },
        *update({payload:value},{call,put,select}){
            const data = yield call(add,value)
            let templist = yield select(state => state.todo.list)
            let toIndex = yield select(state => state.todo.toIndex)
            let list = []
            list = list.concat(templist)
            list.splice(toIndex,1,value)
            yield put({ type: 'updateState', payload: { flag:true,list } })
        },
        
    },
    reducers: {
        updateState(state, action) {
            return { ...state, ...action.payload }
        }
    },

}