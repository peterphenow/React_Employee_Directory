import axios from 'axios';

function getRandomEmployees() {
  return axios.get('https://randomuser.me/api/?results=5');
}

export default getRandomEmployees;
