FROM node:21-slim as builder

# change workdir
WORKDIR /app

# create necessary paths
RUN mkdir -p /config \
&& mkdir -p /default

COPY app/package.json \
app/package-lock.json \
app/astro.config.mjs \
app/tailwind.config.mjs \
app/tsconfig.json ./

# Install dependencies
RUN npm install

# app files
COPY app/src ./src

# copy misc files
COPY misc/entrypoint.sh /
COPY misc/default.yaml /default

# and build webapp
RUN npm run build

# symlink images path
RUN ln -s /app/dist/client/icons /assets

# expose 80
EXPOSE 80

# start app
CMD ["/entrypoint.sh"]
