FROM node:22-slim as builder

# change workdir
WORKDIR /build

COPY app/package.json \
app/package-lock.json \
app/astro.config.mjs \
app/tailwind.config.mjs \
app/tsconfig.json ./

# Install dependencies
RUN npm install

# app files
COPY app/src ./src

# and build webapp
RUN npm run build

# remove unnecessary dependencies
RUN npm prune --production

FROM node:22-slim

# change workdir
WORKDIR /app

# copy app files
COPY --from=builder /build/dist ./dist
COPY --from=builder /build/node_modules ./node_modules

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
