from fastapi import APIRouter, HTTPException
from app.utils.db import prisma

router = APIRouter()

@router.get("/reports", tags=["Reports"])
async def get_reports(limit: int = 50):
    """
    Get recent attendance reports with user and location details.
    Mimics the legacy Node.js response structure.
    """
    try:
        logs = await prisma.accesslog.find_many(
            take=limit,
            order={'timestamp': 'desc'},
            include={
                'user': True,
                'location': True
            }
        )

        # Transform to match legacy Node.js/Supabase structure
        # Legacy frontend expects: { ..., users: { full_name: ... }, locations: { ... } }
        transformed_logs = []
        for log in logs:
            data = log.model_dump()
            
            # Map 'user' -> 'users'
            if data.get('user'):
                data['users'] = data.pop('user')
            
            # Map 'location' -> 'locations'
            if data.get('location'):
                data['locations'] = data.pop('location')
                
            transformed_logs.append(data)
        
        return transformed_logs

    except Exception as e:
        print(f"Error fetching reports: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
