FROM node:21-slim as builder

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

FROM node:21-alpine

# change workdir
WORKDIR /app

# create necessary paths
RUN mkdir -p /config \
&& mkdir -p /default

# copy app files
COPY --from=builder /build/dist ./dist
COPY --from=builder /build/node_modules ./node_modules

# copy misc files
COPY misc/entrypoint.sh /
COPY misc/default.yaml /default

# symlink images path
RUN ln -s /app/dist/client/icons /assets

# expose 80
EXPOSE 80

# start app
CMD ["/entrypoint.sh"]
