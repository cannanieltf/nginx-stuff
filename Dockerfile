FROM nginx_base 

MAINTAINER Christopher Annanie

ADD nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD service nginx start && tail -F /var/log/nginx/access.log -F /var/log/nginx/error.log
