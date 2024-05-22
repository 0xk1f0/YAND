FROM node:slim as builder

# change workdir
WORKDIR /app

# create necessary paths
RUN mkdir -p /default

COPY app/package.json \
app/package-lock.json \
app/astro.config.mjs \
app/tailwind.config.mjs \
app/tsconfig.json ./

# Install dependencies
RUN npm install

# app files
COPY app/src ./src

# default config
COPY misc/default.yaml /default

# and build webapp
RUN npm run build

# alpine nginx
FROM nginx:alpine

# change workdir
WORKDIR /app

# create necessary paths
RUN mkdir -p /config \
&& mkdir -p /default

# replace nginx config
RUN rm -f /etc/nginx/nginx.conf
COPY misc/nginx.conf /etc/nginx/

# default config
COPY misc/default.yaml /default

# copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# symlink images path
RUN ln -s /usr/share/nginx/html/icons /assets

# expose 80
EXPOSE 80

# serve nginx
CMD ["nginx", "-g", "daemon off;"]
