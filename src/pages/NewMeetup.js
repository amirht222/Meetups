import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-summary-36fe3-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: { 'Content-Type': 'application/json' },
      }
    ).then(()=>{
      history.replace('/')
    });
  }

  return (
    <section>
      <h1>New meetup page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
