FROM node:12.18.1-alpine3.12 as ui-builder

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install

ARG REACT_APP_API_BASE_URL

ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}

RUN npm run build

FROM nginx

COPY --from=ui-builder /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]