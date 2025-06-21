import './App.css';
import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    postal: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(form); // Replace with backend logic if needed
  }

  return (
    <form className="form-container" onSubmit={submitHandler}>
      <label htmlFor="firstName">First Name:</label>
      <input type='text' placeholder='First Name' name='firstName' onChange={changeHandler} value={form.firstName} />

      <label htmlFor="lastName">Last Name:</label>
      <input type='text' placeholder='Last Name' name='lastName' onChange={changeHandler} value={form.lastName} />

      <label htmlFor="Email">Email:</label>
      <input type='text' placeholder='abc@gmail.com' name='Email' onChange={changeHandler} value={form.Email} />

      <label htmlFor='country'>Country:</label>
      <select name='country' value={form.country} onChange={changeHandler}>
        <option value="">--Choose an option--</option>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
      </select>

      <label htmlFor="street">Street Address:</label>
      <input type='text' placeholder='B-25' name='street' onChange={changeHandler} value={form.street} />

      <label htmlFor="city">City:</label>
      <input type='text' placeholder='Ranchi' name='city' onChange={changeHandler} value={form.city} />

      <label htmlFor="state">State/Province:</label>
      <input type='text' placeholder='Jharkhand' name='state' onChange={changeHandler} value={form.state} />

      <label htmlFor="postal">Postal Code:</label>
      <input type='text' placeholder='834001' name='postal' onChange={changeHandler} value={form.postal} />

      <h3>By Email</h3>

      <label>
        <input type="checkbox" name="comments" checked={form.comments} onChange={changeHandler} />
        Comments
        <div>Get notified when someone posts a comment on a posting.</div>
      </label>

      <label>
        <input type="checkbox" name="candidates" checked={form.candidates} onChange={changeHandler} />
        Candidates
        <div>Get notified when a candidate applies for a job.</div>
      </label>

      <label>
        <input type="checkbox" name="offers" checked={form.offers} onChange={changeHandler} />
        Offers
        <div>Get notified when a candidate accepts or rejects an offer.</div>
      </label>

      <h3>Push Notifications</h3>
      <div>These are delivered via SMS to your mobile phone.</div>

      <label>
        <input type="radio" name="pushNotification" value="everything" checked={form.pushNotification === 'everything'} onChange={changeHandler} />
        Everything
      </label>

      <label>
        <input type="radio" name="pushNotification" value="same" checked={form.pushNotification === 'same'} onChange={changeHandler} />
        Same as email
      </label>

      <label>
        <input type="radio" name="pushNotification" value="none" checked={form.pushNotification === 'none'} onChange={changeHandler} />
        No push notifications
      </label>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}

export default App;
