export default {
  testMatch: ['<rootDir>/src/**/__tests__/**/*.[jt]s?(x)'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
};
