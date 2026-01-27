import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str
    SECRET_KEY: str = "your-secret-key"
    API_V1_STR: str = "/api"
    PROJECT_NAME: str = "CAMPUS360 Attendance Module"

    class Config:
        case_sensitive = True
        env_file = ".env"

settings = Settings()
