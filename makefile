build:
	docker build -t trainer-ai-landing .

run:
	docker run -p 3000:3000 trainer-ai-landing