export const dbConfig = {
    url: process.env.NODE_ENV === 'production'
        ? process.env.CONNECTION_STRING
        : 'mongodb+srv://db-user:sVL1gXJJ8pMGTebh@om.haz76.azure.mongodb.net/om-1?retryWrites=true&w=majority',
};
