import firebase from '~/plugins/firebase'
import { Route,RawLocation } from 'vue-router'

export interface Params {
  route:Route;
  redirect:(location: RawLocation) => void;
}

export default function ({ route, redirect }:Params) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
      if (route.path !== '/login') {
        redirect('/login')
      }
    }
  });
}