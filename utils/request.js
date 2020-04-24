const baseUrl = "https://douban.uieee.com"

const baseRequest = (opts) => {
    let defaultOpts = {
        url: `${baseUrl}${opts.url}`,
        method: opts.method,
        data: opts.data,
        header: {
            'Content-Type': 'json'
        },
        dataType: 'json'
    }
    return new Promise((resolve, rejects) => {
        uni.request(defaultOpts).then(res => {
			if (res) {
				resolve(res)
			}
		}).catch(err => {
			rejects(err)
		})
    })
}

module.exports = baseRequest