from prisma import Prisma
from dotenv import load_dotenv
import os

# Ensure env vars are loaded for Prisma
load_dotenv()

# Global Prisma client instance
prisma = Prisma()
