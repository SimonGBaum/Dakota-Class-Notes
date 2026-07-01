FROM node:latest

WORKDIR /app/

# I need to ensure js file gets copied into my img
COPY  main.js /app/

CMD ["node", "main.js"]