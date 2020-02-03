import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import profileReducer from './profile-reducer';

let store = {
  _state: {
    profilePage: {
      postsData:  [
        {id: 1, message: 'Hi, how are you?', likes: 15},
        {id: 2, message: "It's my first post!", likes: 32}
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogsData: [
        {id: 1, name: 'Федя', avatar: 'https://www.meme-arsenal.com/memes/38d1f49e1747b1d9c06447aa0622c787.jpg'},
        {id: 2, name: 'Паша', avatar: 'https://avatars.mds.yandex.net/get-pdb/1039768/c8ac7298-adc8-40ad-b1ed-c5b9309f5e77/s375'},
        {id: 3, name: 'Маша', avatar: 'https://lastfm.freetls.fastly.net/i/u/770x0/140ab88fbc27abfda6001d33718a52db.jpg'},
        {id: 4, name: 'Коля', avatar: 'https://lh6.googleusercontent.com/proxy/116x_pQFUbv36YKL2YTMljgwPDt1mpu-1JrLFp0fEUqfGETXOePvS3j9feba9T305JE_Rd89nOI2ypHL4t5e'},
        {id: 5, name: 'Наташа', avatar: 'https://i.ytimg.com/vi/GSFa1o2YGvo/maxresdefault.jpg'},
        {id: 6, name: 'Ксюша', avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Ava_Addams_AVN_Expo_2015_2.jpg'}
      ],
      messagesData: [
        {Id: 1, message: 'Привет!'},
        {Id: 2, message: 'Привет!'},
        {Id: 3, message: 'Привет!'},
        {Id: 4, message: 'Привет!'},
        {Id: 5, message: 'Привет!'},
        {Id: 6, message: 'Привет!'}
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('Stage changed');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state);
  }
}

window.store = store;

export default store;
