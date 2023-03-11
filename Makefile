.PHONY: all build deps reload tests test-coverage analyze start stop destroy doco rebuild terminal
.DEFAULT_GOAL:=help

current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

##@ Helpers

help:
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)


##@  🚀  Getting started

build: start ## Run environment
	docker-compose build app

deps: deps-install
	docker-compose run --rm app npm install

##@  📦  Dependencies

deps-install: ## Install dependencies
	echo "install depencencies" 
deps-update: ## Update dependencies
	echo "update dependencies" 


##@  🕵️  Reload services

reload: ## Reload services
	echo "reload services"

##@  ✅  Tests

tests: ## Run tests
	echo "run tests"

test-coverage: ## Run tests with coverage
	echo "run tests with coverage"

analyze: ## Run static analyzer or linter
	echo "run static analyzer or linter"

##@  🐳  Docker

start: ## Boot up containers
	@docker-compose up -d

up: ##     -> Alias for start
	make start

stop: CMD=stop  ## Stop containers

destroy: CMD=down ## Stop and delete containers and volumes

# Usage: `make doco CMD="ps --services"`
# Usage: `make doco CMD="build --parallel --pull --force-rm --no-cache"`
doco stop destroy:
	@docker-compose $(CMD)

rebuild: ## Force rebuild containers
	docker-compose build --pull --force-rm --no-cache
	make deps
	make start

##@  📺 Tools
terminal: ## Attach to bash session
	CMD=container-name
	docker-compose exec $(CMD) /bin/bash
##@