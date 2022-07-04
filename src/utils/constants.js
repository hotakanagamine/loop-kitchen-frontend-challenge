export const COMPANY = {
  URL: 'https://loopkitchen.xyz/',
  NAME: 'LoopKitchen',
};

export const MESSAGES = {
  ERRORS: {
    LOADING_QUIZZES: 'Failed to get problems!',
    API_RESPONSE_ERRORS: {
      401: 'Unauthenticated!',
      403: 'Unauthorized!',
      404: 'Not Found!',
      500: 'Server Error!',
      503: 'Maintenance!',
      UNKNOWN: 'Unknown Error!',
    },
  },
  APP: {
    AUTH: {
      INVALID_CREDENTIALS: 'Invalid username and password!',
      SUCCESS: 'Sign in successfully!',
    },
  },
};

export const ROUTES = {
  HOME: '/home',
  SIGNIN: '/signin',
  BOOKMARK: '/bookmark',
};
