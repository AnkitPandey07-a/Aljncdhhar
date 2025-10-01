const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting deployment process...');

try {
  // Build the project
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Create a simple server file for deployment
  const serverCode = `
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log('Aadhaar Banking Education App running on port', port);
});
`;

  fs.writeFileSync('server.js', serverCode);
  
  console.log('✅ Build completed successfully!');
  console.log('📁 Files ready for deployment in /build directory');
  console.log('🌐 Server file created: server.js');
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
}