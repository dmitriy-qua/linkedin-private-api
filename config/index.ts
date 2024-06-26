export const linkedinApiUrl = 'https://www.linkedin.com/voyager/api/';

export const authUrl = 'https://www.linkedin.com/uas/authenticate';

export const authHeaders = {
  "User-Agent": "ANDROID OS",
  'accept-encoding': 'gzip, deflate',
  Accept: '*/*',
  Connection: 'keep-alive',
  'X-Li-User-Agent': 'LIAuthLibrary:0.0.3 com.linkedin.android:4.1.881 Asus_ASUS_Z01QD:android_9',
  'X-User-Language': 'en',
  'X-User-Locale': 'en_US',
  'Accept-Language': 'en-us',
  'Content-Length': '110',
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const requestHeaders = {
  authority: 'www.linkedin.com',
  'x-restli-protocol-version': '2.0.0',
  'x-li-lang': 'en_US',
  'user-agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
  'x-li-page-instance': 'urn:li:page:d_flagship3_feed;N2rwHUFIQrykkt4exT64CQ==',
  accept: 'application/vnd.linkedin.normalized+json+2.1',
  'x-li-track': '{"clientVersion":"1.12.7270","mpVersion":"1.12.7270","osName":"web","timezoneOffset":3,"timezone":"Europe/Kiev","deviceFormFactor":"DESKTOP","mpName":"voyager-web","displayDensity":1,"displayWidth":1920,"displayHeight":1080}',
  'sec-fetch-site': 'same-origin',
  'sec-fetch-mode': 'cors',
  referer: 'https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'en-US,en;q=0.9',
};
