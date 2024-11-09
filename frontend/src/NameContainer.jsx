import React, { useState } from 'react';
import { backend } from '../../src/declarations/backend';

const NameContainer = () => {
  const [greeting, setGreeting] = useState(null);
  const [name, setName] = useState('');
  const [submittedNames, setSubmittedNames] = useState([]);
  const [showNames, setShowNames] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const newGreeting = await backend.greet(name);
      setGreeting(newGreeting);
      setError(null);
    } catch (err) {
      setError('Failed to submit name. Please try again.');
    }
    return false;
  }

  async function handleShowNames() {
    try {
      const names = await backend.getSubmittedNames();
      setSubmittedNames(names);
      setShowNames(true);
      setError(null);
    } catch (err) {
      setError('Failed to fetch names. Please try again.');
    }
  }

  function handleGoBack() {
    setName('');
    setGreeting(null);
    setShowNames(false);
  }

  return (
    <div>
      <div>
        {!greeting && !showNames ? (
          <form onSubmit={handleSubmit} className='form-control'>
            <div className='form-group'>
              <label>Enter name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e?.target?.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="button-group">
              <button
                type="submit"
                className='btn btn-primary'
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleShowNames}
                className='btn btn-info'
              >
                Show All Names
              </button>
            </div>
          </form>
        ) : (
          <div>
            {greeting && <div className='alert alert-info'>{greeting}</div>}
            {showNames && (
              <div>
                <h2>Submitted Names:</h2>
                <ul>
                  {submittedNames.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              </div>
            )}
            <button
              onClick={handleGoBack}
              className='btn btn-warning'
            >
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NameContainer;
