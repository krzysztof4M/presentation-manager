import ApiClient from '../../utils/ApiClient';

const client = new ApiClient();

export default function load(ownProps) {
  return client.get(`/presentations/${ownProps.match.params.id}`)
}
