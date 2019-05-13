# put [![](https://travis-ci.com/Gyumeijie/put.svg?branch=master)](https://travis-ci.com/Gyumeijie/put)

> **p**ictures **u**ploading **t**ool

**put** allows you uploading pictures assets without downloading the whole repository, especially when the repository has a big size.

## Install

```bash
$ npm install @gyumeijie/put
```

## Usage

```bash
$ put ./YuMeiJie.jpeg
```

## Config

> Put the following content to the `~/.putrc` file

```json
{
  "github": {
    "branch": "branch_name",
    "owner": "user_name",
    "path": "path",
    "repo": "repo",
    "token": "personal_access_token"
  }
}
```
And take `https://github.com/Gyumeijie/put` for examples:

```json
{
  "github": {
    "branch": "master",
    "owner": "Gyumeijie",
    "path": "assets",
    "repo": "put",
    "token": "06aed0df73r8ed1t2914d08da776148d2f350059"
  }
}
```
With all things ready, running the following command:

```bash
$ put ./YuMeiJie.jpeg

https://raw.githubusercontent.com/Gyumeijie/put/master/assets/YuMeiJie.jpeg
```

For how to create a **personal access token** to access the `GitHub API`, please visit [here](https://github.com/settings/tokens).

## License

MIT © [Gyumeijie](https://github.com/Gyumeijie)
