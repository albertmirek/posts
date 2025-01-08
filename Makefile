.PHONY: all up down clean logs schema

all: up

up:
	@docker-compose up -d

down:
	@docker-compose down

clean:
	@docker-compose down -v

logs:
	@docker-compose logs -f

start-local:
	@CONFIG_PATH=./config/config.dev.json yarn start:dev

schema:
	@CONFIG_PATH=./config/config.dev.json npm run typeorm schema:log > schema.sql

generate-schema:
	yarn workspace app run generate:openapi

generate-types: generate-schema
	yarn workspace types run generate-types

build: generate-types
	cd types && yarn pack

