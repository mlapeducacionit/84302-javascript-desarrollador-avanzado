printf 'n\n' | npm create vite@latest ./ -- --template vanilla
# git init
rm public/vite.svg src/javascript.svg src/counter.js
echo "" > src/style.css
echo "import './style.css'" > src/main.js
npm install
npm run dev