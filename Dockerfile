FROM node:14.10.1 AS base
WORKDIR /src

FROM base AS build
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build && npm ci --prod

FROM base AS final
COPY --from=build /src .
CMD npm start