import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    federation: {
      google: {
        clientId: 'YOUR_GOOGLE_CLIENT_ID',
      },
      facebook: {
        appId: 'YOUR_FACEBOOK_APP_ID',
      },
    },
  },
  signupAttributes: [
    'email',
    'name',
    'preferred_username',
    'phone_number',
    'birthdate',
    'custom:address',
    'custom:gender',
  ],
  passwordPolicy: {
    minLength: 8,
    requireUppercase: true,
    requireNumbers: true,
    requireSymbols: false,
  },
});
