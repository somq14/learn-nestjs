FROM node:14.19.1-alpine3.15 as builder
WORKDIR /work

COPY .yarn/plugins .yarn/plugins
COPY .yarn/releases .yarn/releases
COPY .yarnrc.yml package.json yarn.lock ./
RUN yarn install

COPY tsconfig.json tsconfig.build.json ./
COPY src src

RUN yarn build
RUN yarn workspaces focus --production


FROM node:14.19.1-alpine3.15 as app
WORKDIR /work

COPY --from=builder /work/dist .
COPY --from=builder /work/node_modules node_modules

CMD ["main.js"]
