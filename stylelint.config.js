export default {
  extends: [
    'stylelint-config-tailwindcss', 
  ],
  rules: {
    
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind', // Allow Tailwind-specific at-rules
          'apply',
          'layer',
          'screen',
        ],
      },
    ],
  },
}
