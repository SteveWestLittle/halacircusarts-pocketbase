# PocketBase for Railway Deployment

## Quick Deploy to Railway

1. **Create Railway Account**: [railway.app](https://railway.app)
2. **Connect GitHub**: Link this repository
3. **Deploy**: Railway auto-detects Dockerfile and deploys
4. **Get URL**: Railway provides your PocketBase URL

## Environment Setup

Railway will automatically:
- Build from Dockerfile
- Run migrations on first start
- Create admin user (you'll set password on first visit)
- Provide HTTPS URL

## Admin Access

After deployment:
1. Visit your Railway URL + `/_/`
2. Create admin account
3. Import your local data if needed

## Local Development

```bash
# Run locally
./pocketbase serve --http="0.0.0.0:8090"
```

## Migration Notes

- All migrations in `pb_migrations/` will run automatically
- Schema in `pb_schema.json` provides backup reference
- Fresh database created on Railway (no local data transferred)
