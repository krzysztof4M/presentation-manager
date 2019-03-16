import ApiClient from '../../utils/ApiClient';

const client = new ApiClient();

export function load(ownProps) {
  return client.get(`/presentations/${ownProps.match.params.id}`)
}

export function save(presentationId, data) {
  return client.post(`/presentations/${presentationId}/slides`, { data });
}

export function update(presentationId, slideId, data) {
  return client.put(`/presentations/${presentationId}/slides/${slideId}`, { data })
}

