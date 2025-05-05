FROM node:22-slim as builder

# change workdir
WORKDIR /build

COPY package.json \
astro.config.mjs \
tsconfig.json ./

# Install dependencies
RUN npm install --omit=dev

# app files
COPY src ./src

# and build webapp
RUN npm run build

FROM node:22-slim

# change workdir
WORKDIR /app

# copy app files
COPY --from=builder /build/dist ./dist

# necessary paths
RUN mkdir -p /config
RUN ln -s /app/dist/client/icons /assets

# copy misc files
COPY misc/entrypoint.sh /
COPY misc/config.yaml /config

# expose 80
EXPOSE 80

# start app
CMD ["/entrypoint.sh"]
