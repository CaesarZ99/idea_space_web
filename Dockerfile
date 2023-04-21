FROM node:latest AS builder


#移动当前目录下面的文件到app目录下
ADD . /app/

#进入到app目录下面，类似cd
WORKDIR /app
RUN npm config set registry https://registry.npmmirror.com/
#安装依赖
RUN npm install && npm run build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html/
