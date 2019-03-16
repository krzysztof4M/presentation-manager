import ApiClient from '../../utils/ApiClient';

const client = new ApiClient();

export default function load() {
  return client.get('/presentations');
}
