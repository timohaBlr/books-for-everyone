run: docker run -d -p 3000:3000 --env-file .config/.env --rm --name bks4evr1 bks4evr1:dev
run-dev: docker run -d -p 3000:3000  -v "C:/Projects/books-for-everyone:/app" -v /app/node_modules --rm --name bks4evr1 bks4evr1:dev

stop: docker stop bks4evr1

docker run -p 3000:3000 -d --rm --name logsapp -v logs:/app/data -v /app/node_modules -v "/Users/vladilen/WebstormProjects/express-sample-app:/app" logsapp:volumes