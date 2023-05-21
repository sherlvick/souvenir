# souvenir

Souvenir is a dedicated platform to enhance the experience of memory creation and collection by providing cloud storage and tons of memory experience features.

# Google OAuth client creation

- Create a client ID and client secret using https://console.cloud.google.com/apis/dashboard
- From the project drop-down, select an existing project, or create a new one by selecting Create a new project
- In the sidebar under "APIs & Services", select Credentials
- In the Credentials tab, select the Create credentials drop-down list, and choose OAuth client ID.
- Under Application type, select Web application.
- In Authorized redirect URI use http://localhost:3000/auth/google/callback
- Press the Create button and copy the generated client ID and client secret
  Note: If Google doesn't support http://localhost:3000, then use http://127.0.0.1:3000

# Setup secrets config file

- Create file with filename secrets-config.env
- Add these vaiables
  1. PORT = 3000
  2. MONGO_URI = mongodb+srv://{USER}:{PASSWORD}@souvenir-mumbai.zbf9qzi.mongodb.net/souvenir?retryWrites=true&w=majority
  3. GOOGLE_CLIENT_ID = XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  4. GOOGLE_CLIENT_SECRET = XXXXXXXXXXXXXXXXXXXXXXXXXX

# Development

- `npm i`
- `npm run dev`
