import request from './request';

const root = 'https://api.github.com';

const upload = async (file, config) => {
  const { branch, path, owner, repo, token } = config;
  const { name, data } = file;
  const content = data.replace(/^data:image\/(png|jpe?g|svg|gif);base64,/gi, '');
  const body = {
    message: 'Uploaded by PUT',
    content,
    branch,
    path: `${path}/${encodeURI(name)}`
  };
  const url = `${root}/repos/${owner}/${repo}/contents/${encodeURI(path)}/${encodeURI(name)}`;

  try {
    const date = Date.parse(new Date());
    const res = await request({
      url,
      method: 'PUT',
      headers: {
        Authorization: `token ${token}`,
        'User-Agent': 'Gyumeijie/put'
      },
      body,
      json: true
    });

    if (res.content) {
      return {
        name,
        url: res.content.download_url,
        date
      };
    }
    throw new Error('Upload Fail');
  } catch (err) {
    throw err;
  }
};

export default {
  upload
};
