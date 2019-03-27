import ApiClient from '../../utils/ApiClient';

const client = new ApiClient();

export function load(ownProps, signal) {
  return client.get(`/presentations/${ownProps.match.params.id}`,{ signal })
}

export function save(presentationId, data) {
  return client.post(`/presentations/${presentationId}/slides`, { data });
}

export function update(presentationId, slideId, data) {
  return client.put(`/presentations/${presentationId}/slides/${slideId}`, { data })
}

