export async function onRequestGet({ request }) {
  const { url, method, headers, body } = request
  const newUrl = new URL(url)
  return fetch(`https://i.imgur.com/${newUrl.pathname.replace('vh-img-proxy', '')}`, {
    method,
    headers: {
      ...headers,
      referer: 'https://www.vhimg.com',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 888; 22120RN86C Build/UP1A.231005.007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/888.888.888.888 Mobile Safari/537.36'
    },
    body
  })
}
