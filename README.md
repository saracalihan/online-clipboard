# online-clipboard
TypeScript, Fastify, Sequelize-ts online clipboard application api

## File Structure
```
.
├── .env //enviroment variables
├── .sequelizerc // sequelize settings
├── package.json 
├── package-lock.json
├── README.md
├── sample.env // sample enviroment variables
├── src
│   ├── config
│   │   ├── db-config.js
│   │   └── sequelize-config.js
│   ├── encryption
│   │   └── index.ts
│   ├── main.ts // app start point
│   ├── migrations // migrations
│   │   ├── 22022021143225-create-user.js
│   │   └── 22022021143450-create-token.js
│   ├── models
│   │   ├── index.ts
│   │   ├── token.ts
│   │   └── user.ts
│   ├── routes
│   │   ├── authentication.ts
│   │   ├── index.ts
│   │   ├── token.ts
│   │   └── user.ts
│   ├── server.ts // server class
│   └── services
│       ├── index.ts
│       ├── token.ts
│       └── user.ts
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