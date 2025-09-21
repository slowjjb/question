// Firebase 초기화 스크립트
const firebaseConfig = {
  apiKey: "AIzaSyCUmSDDcFn45Z_ZH3UigbsothE6iD21C7Y",
  authDomain: "grade-6-english-c17f3.firebaseapp.com",
  projectId: "grade-6-english-c17f3",
  storageBucket: "grade-6-english-c17f3.firebasestorage.app",
  messagingSenderId: "676305839050",
  appId: "1:676305839050:web:a5399633e7b828883fe533"
};

// 중복 초기화 방지
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// 전역에서 사용하기 쉽게 auth, db 내보내기
window.auth = firebase.auth();
window.db   = firebase.firestore();
