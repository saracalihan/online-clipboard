# online-clipboard
TypeScript, Fastify, Sequelize-ts online clipboard application api

## File Structure
```
.
├── config
│   ├── db-config.js
│   └── sequelize-config.js
├── migrations
│   ├── 22022021143225-create-user.js
│   ├── 22022021143450-create-token.js
│   └── 22022021172741-create-clipboard.js
├── package.json
├── package-lock.json
├── README.md
├── sample.env
├── src
│   ├── encryption
│   │   └── index.ts
│   ├── handlers
│   │   ├── clipboard.ts
│   │   ├── index.ts
│   │   ├── token.ts
│   │   └── user.ts
│   ├── main.ts
│   ├── models
│   │   ├── clipboard.ts
│   │   ├── index.ts
│   │   ├── token.ts
│   │   └── user.ts
│   ├── routes
│   │   ├── authentication.ts
│   │   ├── clipboard.ts
│   │   ├── index.ts
│   │   ├── token.ts
│   │   └── user.ts
│   └── server.ts
└── tsconfig.json

```

## Clone
```bash
git clone https://github.com/saracalihan/online-clipboard.git
cd online-clipboard
```

## Install Dependencies
```bash
npm install
```

## Set Environment Variables
Copy `sample.env` file then set your environment variables
```bash
cp sample.env .env
```

## Migrate Database
```bash
npm run migrate
```

## Start
```bash
npm start
```
