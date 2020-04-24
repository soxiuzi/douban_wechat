import baseRequest from '../utils/request.js'

export function test() {
	return baseRequest({
		url: '/v2/movie/weekly',
		method: 'GET'
	})
}