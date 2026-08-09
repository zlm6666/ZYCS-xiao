export async function onRequest({ request }) {
  const { method } = request
  const formData = await request.formData()
  const imgFile = formData.get('file')
  // 创建 FormData 对象
  const body = new FormData()
  body.append('image', imgFile)
  return fetch(`https://api.imgur.com/3/upload?client_id=546c25a59c58ad7`, {
    method,
    headers: {
      ...request.headers,
      cookie:
        'postpagebeta=1; ana_id=0; is_emerald=0; frontpagebetav2=1; mp_d7e83c929082d17b884d6c71de740244_mixpanel=%7B%22distinct_id%22%3A%22%24device%3A61afb0d6-702b-4d2b-a117-93622b5856c9%22%2C%22%24device_id%22%3A%2261afb0d6-702b-4d2b-a117-93622b5856c9%22%2C%22%24search_engine%22%3A%22bing%22%2C%22%24initial_referrer%22%3A%22https%3A%2F%2Fwww.bing.com%2F%22%2C%22%24initial_referring_domain%22%3A%22www.bing.com%22%2C%22__mps%22%3A%7B%22%24os%22%3A%22Android%22%2C%22%24browser%22%3A%22Chrome%22%2C%22%24browser_version%22%3A888.888%2C%22assembly_uid%22%3A0%2C%22Show%20Mature%22%3Afalse%7D%2C%22__mpso%22%3A%7B%22%24initial_referrer%22%3A%22https%3A%2F%2Fwww.bing.com%2F%22%2C%22%24initial_referring_domain%22%3A%22www.bing.com%22%7D%2C%22__mpus%22%3A%7B%7D%2C%22__mpa%22%3A%7B%7D%2C%22__mpu%22%3A%7B%7D%2C%22__mpr%22%3A%5B%5D%2C%22__mpap%22%3A%5B%5D%2C%22imgur_platform%22%3A%22mobile%20web%22%2C%22version_name%22%3A%22e0ab08c%22%2C%22user%20agent%22%3A%22Mozilla%2F5.0%20(Linux%3B%20Android%20888%3B%2022120RN86C%20Build%2FUP1A.231005.007)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F888.888.888.888%20Mobile%20Safari%2F537.36%22%2C%22legacy%22%3Afalse%2C%22assembly_uid%22%3A0%2C%22signed_in%22%3Afalse%7D; IMGURUIDJAFO=56df04b9184a48bd2c1743c371fbdf7787c5ad99b3983d873c3aa32907e22000; authautologin=03cc5c0b893cca2bc260e40ea0fb4c18%7E15hzJDIpyqoYNAJnTRTBPrPliJlPB2bz; IMGURSESSION=08feb4932234b60d3e6735a67e25563f; accesstoken=8865f03bf266addfb4e990c73ab22e4ddaff572c; is_authed=1; user_id=199325855; is_just_signed_up=1; _nc=1; postpagebetalogged=1; retina=1; SESSIONDATA=%7B%22sessionCount%22%3A1%2C%22sessionTime%22%3A1786253430670%7D',
      Authorization: 'Client-ID 546c25a59c58ad7'
    },
    body
  })
}
