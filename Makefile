.DEFAULT_GOAL := help

.PHONY: help install start build test storybook storybook-build deploy deploy-pages \
        server-de server-verbs server-nouns clean

help:
	@echo "Usage: make <target>"
	@echo ""
	@echo "  install          Install dependencies (pnpm install)"
	@echo "  start            Start the dev server (port 3000)"
	@echo "  build            Production build into ./build"
	@echo "  test             Run test suite"
	@echo "  storybook        Start Storybook dev server (port 6006)"
	@echo "  storybook-build  Build static Storybook"
	@echo "  deploy           Build and publish to GitHub Pages"
	@echo "  deploy-pages     Publish pre-built ./build to GitHub Pages (skip rebuild)"
	@echo "  server-de        Start json-server for DE questions  (port 9001)"
	@echo "  server-verbs     Start json-server for German verbs  (port 9002)"
	@echo "  server-nouns     Start json-server for German nouns  (port 9003)"
	@echo "  clean            Remove the ./build directory"

install:
	pnpm install

start:
	pnpm start

build:
	pnpm build

test:
	pnpm test

storybook:
	pnpm storybook

storybook-build:
	pnpm build-storybook

deploy: build
	npx gh-pages -d build

deploy-pages:
	npx gh-pages -d build

server-de:
	pnpm de-questions-server

server-verbs:
	pnpm verbs-server

server-nouns:
	pnpm nouns-server

clean:
	rm -rf build
