# YAND - Yet Another Network Dashboard

[![Build and Publish](https://github.com/0xk1f0/YAND/actions/workflows/build.yaml/badge.svg)](https://github.com/0xk1f0/YAND/actions/workflows/build.yaml)

Because we don't have enough of them already

## Usage

To run YAND, you can use either `docker` or `podman`.

```bash
# with docker
docker compose up -d -f docker-compose.yaml
# with podman
podman kube play podman-play.yaml
```

By default, YAND expects the configuration to be placed in `./data/config/` and the icons to be placed in `./data/assets/`, which are the default bind mount locations.

An example configuration file can be found in the `misc/` folder of this repository. The icons you wan to use for your services need to be manually placed in the assets folder.

YAND is intended to be a lightweight drop in replacement/alternative for [Homer Dashboard](https://github.com/bastienwirtz/homer), so the syntax will be about the same.

## Building

To build YAND from source or prepare for development.

```bash
git clone https://github.com/0xk1f0/YAND && cd YAND
npm install
# Build
npm run build
# Run dev server
# $CONFIG can be any example configuration
CONFIG=./misc/config.yaml npm run dev
```

## License

GPL-3.0
