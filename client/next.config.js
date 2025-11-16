/** @type {import('next').NextConfig} */
module.exports = {
  rewrites() {
    [
      {
        destination: 'http://server:8000', // Docker Compose 서비스 이름 사용
      }
    ]
  }
};
