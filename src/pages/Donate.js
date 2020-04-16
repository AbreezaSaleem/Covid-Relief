import React, { useState, useEffect } from 'react';

const Donate = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    donation: '',
    charity: '',
  })

  useEffect(() => {
    console.log('state changed', state)
  }, [state])

  const handleChange = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    })
  }

  return (
    <div className="donate-container">
      <h2>Your donation will helps millions 🤣</h2> <br/>
      <h3>Choose a charity to donate to now:</h3>
        <ul className="charity-list">
          <li>Rizq</li>
          <li>Edhi Foundation</li>
          <li>Aurat Foundation</li>
          <li>Ansar Burney Trust</li>
          <li>Transparent Hands Trust </li>
        </ul>
        <form className="form-container">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleChange} value={state.name} />
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" onChange={handleChange} value={state.email} />
          <label for="donation">Donation Amount</label>
          <input type="number" id="donation" name="donation" onChange={handleChange} value={state.donation} />
          <label for="charity">Select a charity</label>
          <select id="charities" onChange={handleChange}>
            <option value="Rizq">Rizq</option>
            <option value="Edhi Foundation">Edhi Foundation</option>
            <option value="Aurat Foundation">Aurat Foundation</option>
            <option value="Ansar Burney Trust">Ansar Burney Trust</option>
            <option value="Transparent Hands Trust">Transparent Hands Trust</option>
          </select>
          <button type="button" value="Submit" className="btn btn-success">Send Donation!</button>
        </form>
    </div>
  );
};

export default Donate;
