import React from 'react';
import { useState, useEffect } from 'react';
import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

const getUserData = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyBI4jY-YxsYnzYQdGwbgJbavmxTf_dEtDk',
    authDomain: 'neat-p.firebaseapp.com',
    databaseURL: 'https://neat-p.firebaseio.com'
    // projectId: 'neat-p',
    // storageBucket: 'neat-p.appspot.com',
    // messagingSenderId: '963165542271',
    // appId: '1:963165542271:web:0a5adaab88e18cfea2ec4a'
  });  
};

export const Leaderboard = () => {
  getUserData();
  
  return (
    <div className='leaderboard-wrapper'>
      <div className='leaderboard'>
        <h2>Leaderboard</h2>
        <table cellSpacing='0'>
          <thead>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>name1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>name2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>name3</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
