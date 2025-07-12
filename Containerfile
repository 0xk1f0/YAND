FROM oven/bun:alpine

# change workdir
WORKDIR /app

COPY package.json \
astro.config.mjs \
tsconfig.json ./

# Install dependencies
RUN bun install

# app files
COPY src ./src

# and build webapp
RUN bun run build

# necessary paths
RUN mkdir -p /config
RUN ln -s /app/dist/client/icons /assets

# copy misc files
COPY misc/entrypoint.sh /
COPY misc/config.yaml /config

# expose 8080
EXPOSE 8080

# start app
CMD ["/entrypoint.sh"]
