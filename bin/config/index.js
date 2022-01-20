module.exports = {
  npmUrl: 'https://registry.npmjs.org/sscss-cli',
  promptTypeList: [
    {
      type: 'list',
      message: 'Please select the template type to pull:',
      name: 'type',
      choices: [
        {
          name: 'sscss-cli',
          value: {
            url: 'https://github.com/willasas/sscss-cli.git',
            gitName: 'sscss-cli',
            val: 'sscss-cli',
          },
        },
      ],
    },
  ],
};