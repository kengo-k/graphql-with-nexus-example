FROM node:lts-alpine3.15

RUN \
  npm install -g yarn; \
  apk add curl; \
  curl -sSL \
    "https://github.com/bufbuild/buf/releases/download/v1.8.0/buf-$(uname -s)-$(uname -m).tar.gz" | \
    tar -xvzf - -C /usr/local --strip-components 1;

USER node
WORKDIR /home/node

CMD ["/bin/ash"]