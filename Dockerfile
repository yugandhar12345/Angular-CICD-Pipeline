FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY dist/your-app-name /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
