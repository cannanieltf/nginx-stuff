FROM ubuntu:15.04

MAINTAINER Christopher Annanie

RUN apt-get update && apt-get install -y nginx apache2-utils
RUN htpasswd -bc /etc/nginx/.htpasswd lifetime supersecret
RUN rm /etc/nginx/nginx.conf

