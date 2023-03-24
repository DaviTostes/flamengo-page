import axios from 'axios';

const getData = async () => {
  const result = await axios.get('https://api-flamengo.vercel.app/')
  return result.data.titles
}

export default getData