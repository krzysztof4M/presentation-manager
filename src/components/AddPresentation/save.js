import ApiClient from '../../utils/ApiClient';

const client = new ApiClient();

export default function save(data) {
  return client.post('/presentations', { data });
}
