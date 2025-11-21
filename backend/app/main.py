from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router

app = FastAPI(title="PDF QA Extension Backend")

# Frontend URL (live Codespaces URL)
origins = [
    "https://didactic-capybara-wr499wwqvrww354pq-5173.app.github.dev"
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,        # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API router
app.include_router(router, prefix="/api")
