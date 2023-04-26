const { spec } = require('pactum');

it('should get random male users', async () => {
  await spec()
    .get('http://0.0.0.0:4010/api?gender=male')
    .expectStatus(200)
    .expectJsonLike({
      "results": [
        {
          "gender": "male"
        }
      ]
    });
});