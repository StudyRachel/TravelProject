import { Alert } from 'react-native';
import { GET_Attractions } from '../service/attractions';

export default{
    namespace: 'attractions',
    state: {},
    effects: {
        * GET_Attractions({ callback }, { call, put}){
            try{
                const response = yield call(GET_Attractions);
                yield put({
                    type: 'SAVE_Attractions',
                    payload: response,
                });
                if(callback){
                    callback();
                }
            } catch(error){
                Alert.alert('錯誤', '取得資料時發生錯誤!', [{text: '確認', onPress: () => console.log('OK')},
                ]);
            }
        },
    },
    reducers:{
        SAVE_Attractions(state, { payload }){
            return{
                ...state,
                attractions: payload,
            };
        },
        SAVE_Favorites(state, {payload}){
            return{
                ...state,
                favorites: payload,
            };
        },
    },
};