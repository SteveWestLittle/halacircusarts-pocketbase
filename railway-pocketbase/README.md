# PocketBase for Railway Deployment

## Quick Deploy to Railway

### Step 1: Deploy from this directory
**IMPORTANT**: Deploy from the `railway-pocketbase` directory, NOT the root or `pb_migrations` directory.

1. **Create Railway Account**: [railway.app](https://railway.app)
2. **Connect GitHub**: Link this repository
3. **Set Root Directory**: In Railway dashboard, set the root directory to `railway-pocketbase`
4. **Deploy**: Railway will detect the Dockerfile and deploy automatically
5. **Get URL**: Railway provides your PocketBase URL

### Step 2: Configure Railway Project
In your Railway project settings:
- **Root Directory**: `railway-pocketbase`
- **Build Command**: (leave empty - uses Dockerfile)
- **Start Command**: (leave empty - uses Dockerfile CMD)

### Step 3: Add Environment Variables (Optional)
- `PORT`: Railway sets this automatically
- `PB_ENCRYPTION_KEY`: Set a random 32-character string for data encryption

## Environment Setup

Railway will automatically:
- Build from Dockerfile
- Download PocketBase v0.22.21
- Run migrations on first start
- Create admin user (you'll set password on first visit)
- Provide HTTPS URL with custom domain support

## Admin Access

After deployment:
1. Visit your Railway URL + `/_/`
2. Create admin account
3. Import your local data if needed

## Database Persistence

Railway provides persistent storage for your PocketBase database. Your data will persist across deployments.

## Migration Notes

- All migrations in `pb_migrations/` will run automatically
- Schema in `pb_schema.json` provides backup reference
- Fresh database created on Railway (no local data transferred)

## Troubleshooting

If deployment fails:
1. Ensure you're deploying from the `railway-pocketbase` directory
2. Check Railway logs for specific error messages
3. Verify all migration files are present in `pb_migrations/`
