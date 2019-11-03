import React from 'react';
import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

const getUserData = () => {
  let ref = firebase
    .database()
    .ref('/leaders')
    .once('value')
    .then(function(snapshot) {
      let username = (snapshot.val() && snapshot.val().score) || 'Anonymous';
    });
};

export const Leaderboard = () => {
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
