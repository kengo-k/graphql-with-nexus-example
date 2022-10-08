build-image:
	docker build -t sample-graphql-server-with-protobuf:v1.0.0 .

connect:
	docker run \
		-it \
		--rm \
		--name sample-graphql-server-with-protobuf \
		-v "$(PWD)/:/home/node" \
		sample-graphql-server-with-protobuf:v1.0.0

gen:
	buf generate --template buf.gen.yaml