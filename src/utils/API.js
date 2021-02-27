import axios from 'axios';

function getRandomEmployees() {
  return axios.get('https://randomuser.me/api/?results=25&nat=us,ca');
}

export default getRandomEmployees;
