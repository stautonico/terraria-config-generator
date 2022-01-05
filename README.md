# Terraria Config Generator

This project is pretty self-explanatory. It is a web-based config generator for Terraria servers.

### Build Instructions

1. Clone the repository

```shell
git clone https://github.com/stautonico/terraria-config-generator
```

2. Install dependencies

```shell
cd terraria-config-generator
npm install
```

3. Build

```shell
npm run build-deploy
```

From here, the final build is in the `dist` directory. You can run a local webserver or deploy using something like
nginx

### Development

To develop for this project, you can use the `npm run start` command. This will continuously watch for changes and
rebuild the project. However, this does not start a local webserver. You can use whatever webserver you want, but I'd
recommend using the python webserver. You can start it by using `python3 -m http.server`. **Note: While developing, make
sure your local webserver is running in the root of the project instead of the `dist` directory.** The `dist` directory
is only for the final build.

Once you have some changes, you can submit a pull request.
