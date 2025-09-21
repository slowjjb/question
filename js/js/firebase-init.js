// Firebase 초기화 스크립트
const firebaseConfig = {
  apiKey: "AIzaSyCUmSDDCnf45ZHZUigbspothE6iD2iC7Y",
  authDomain: "grade-6-english-c173.firebaseapp.com",
  projectId: "grade-6-english-c173",
  storageBucket: "grade-6-english-c173.appspot.com",
  messagingSenderId: "767630583950",
  appId: "1:767630583950:web:a5399633e7b828883fe533"
};

// 중복 초기화 방지
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// 전역에서 사용하기 쉽게 auth, db 내보내기
window.auth = firebase.auth();
window.db   = firebase.firestore();
