worker: node . --server
db: node . --db "mongodb+srv://Putbotz:PUTRA604@cluster0.ffci1.mongodb.net/?retryWrites=true&w=majority" --autocleartmp --restrict
worker: npx pm2 start npm --node-args="--optimize_for_size --max_old_space_size=460" -- run db && npx pm2 logs
