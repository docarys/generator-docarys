# Use a prebuilt docker image with docarys installed to build the documentation
FROM docarys/docarys:latest-build as build
WORKDIR /docarys
COPY . .
RUN docarys build

# Use the official docarys image to host the built website
FROM docarys/docarys:latest as runtime
COPY --from=build /docarys/build /usr/share/nginx/html