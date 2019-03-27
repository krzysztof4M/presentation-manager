import ApiClient from '../../utils/ApiClient';

const client = new ApiClient();

export default function load(ownProps, signal) {
  return client.get(`/presentations/${ownProps.match.params.id}`, { signal })
}
