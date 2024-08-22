curl -X 'POST' \
  'https://easy-peasy.ai/api/generate-image' \
  -H 'accept: application/json' \
  -H 'x-api-key: 5ee8f368-677e-4ade-a29f-91b67857b22e' \
  -H 'Content-Type: application/json' \
  -d '{
  "prompt": "neon cat",
  "model": "DALL-E 3",
  "style": "string",
  "artist": "string",
  "dimensions": "string",
  "useHD": true,
  "image": "string"
}'
