import React from 'react';

const handleSubmit = e => {
  e.preventDefault();
  const data = new FormData(e.target);

  fetch('http://127.0.0.1:8080', {
    method: 'POST',
    body: data
  });
};

export const UserInput = () => (
  <div className='user-input-wrapper'>
    <div className='user-input'>
      <h2>Make A Choice</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='' />
        </div>
        <div className='user-options-wrapper'>
          <div>
            <label htmlFor='num_hidden'>Number Hidden</label>
            <select name='num_hidden'>
              <option value='0'>0</option>
              <option value='7'>7</option>
              <option value='14'>14</option>
              <option value='20'>20</option>
            </select>
          </div>
          <div>
            <label htmlFor='survival'>Survival Rate</label>
            <select name='survival'>
              <option value='0'>0</option>
              <option value='0.25'>0.25</option>
              <option value='0.5'>0.5</option>
              <option value='0.75'>0.75</option>
            </select>
          </div>
          <div>
            <label htmlFor='node_add_prob'>Node Add Prob.</label>
            <select name='node_add_prob'>
              <option value='0'>0</option>
              <option value='0.25'>0.25</option>
              <option value='0.5'>0.5</option>
              <option value='0.75'>0.75</option>
            </select>
          </div>
          <div>
            <label htmlFor='node_del_prob'>Node Delete Prob.</label>
            <select name='node_del_prob'>
              <option value='0'>0</option>
              <option value='0.25'>0.25</option>
              <option value='0.5'>0.5</option>
              <option value='0.75'>0.75</option>
            </select>
          </div>
          <div>
            <label htmlFor='conn_add_prob'>Connection Add Prob.</label>
            <select name='conn_add_prob'>
              <option value='0'>0</option>
              <option value='0.25'>0.25</option>
              <option value='0.5'>0.5</option>
              <option value='0.75'>0.75</option>
            </select>
          </div>
          <div>
            <label htmlFor='conn_del_prob'>Connection Delete Prob.</label>
            <select name='conn_del_prob'>
              <option value='0'>0</option>
              <option value='0.25'>0.25</option>
              <option value='0.5'>0.5</option>
              <option value='0.75'>0.75</option>
            </select>
          </div>
          <div>
            <label htmlFor='weight_mutate_rate'>Weight Mutate Prob.</label>
            <select name='weight_mutate_rate'>
              <option value='0'>0</option>
              <option value='0.25'>0.25</option>
              <option value='0.5'>0.5</option>
              <option value='0.75'>0.75</option>
            </select>
          </div>
          <div>
            <label htmlFor='weight_replace_rate'>Weight Replace Prob.</label>
            <select name='weight_replace_rate'>
              <option value='0'>0</option>
              <option value='0.25'>0.25</option>
              <option value='0.5'>0.5</option>
              <option value='0.75'>0.75</option>
            </select>
          </div>
        </div>
        <input type='submit' value='Try It Out!' />
      </form>
    </div>
  </div>
);
